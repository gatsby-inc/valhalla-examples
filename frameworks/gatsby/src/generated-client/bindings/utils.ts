import {
  GraphQLSchema,
  GraphQLResolveInfo,
  GraphQLOutputType,
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLInterfaceType,
  GraphQLUnionType,
  GraphQLList,
  GraphQLEnumType,
  GraphQLNonNull,
  parse,
  FragmentDefinitionNode,
  OperationDefinitionNode,
} from 'graphql'

import { Operation } from './types'

import * as immutable from 'object-path-immutable'

export function getDeepType(
  type: GraphQLOutputType
): GraphQLObjectType | GraphQLScalarType {
  if ((type as any).ofType) {
    return getDeepType((type as any).ofType)
  }

  return type as any
}

export function isScalar(t: GraphQLOutputType): boolean {
  if (t instanceof GraphQLScalarType || t instanceof GraphQLEnumType) {
    return true
  }

  if (
    t instanceof GraphQLObjectType ||
    t instanceof GraphQLInterfaceType ||
    t instanceof GraphQLUnionType ||
    t instanceof GraphQLList
  ) {
    return false
  }

  const nnt = t as any
  if (nnt instanceof GraphQLNonNull) {
    if (
      nnt.ofType instanceof GraphQLScalarType ||
      nnt.ofType instanceof GraphQLEnumType
    ) {
      return true
    }
  }

  return false
}

export function getTypeForRootFieldName(
  rootFieldName: string,
  operation: Operation,
  schema: GraphQLSchema
): GraphQLOutputType {
  if (operation === 'mutation' && !schema.getMutationType()) {
    throw new Error(`Schema doesn't have mutation type`)
  }

  if (operation === 'subscription' && !schema.getSubscriptionType()) {
    throw new Error(`Schema doesn't have subscription type`)
  }

  const rootType = {
    query: () => schema.getQueryType(),
    mutation: () => schema.getMutationType(),
    subscription: () => schema.getSubscriptionType(),
  }[operation]()

  const rootField = rootType.getFields()[rootFieldName]

  if (!rootField) {
    throw new Error(`No such root field found: ${rootFieldName}`)
  }

  return rootField.type
}

export function addFragmentToInfo(
  info: GraphQLResolveInfo,
  fragment: string
): GraphQLResolveInfo {
  const returnType = getDeepType(info.returnType)
  if (returnType instanceof GraphQLScalarType) {
    throw new Error(
      `Can't add fragment "${fragment}" because return type of info object is a scalar type ${info.returnType.toString()}`
    )
  }

  const ast = parse(fragment)

  const deepReturnType = getDeepType(returnType)

  if (
    ast.definitions[0].kind === 'FragmentDefinition' &&
    (ast.definitions[0] as FragmentDefinitionNode).typeCondition.name.value !==
      deepReturnType.toString()
  ) {
    throw new Error(
      `Type ${
        (ast.definitions[0] as FragmentDefinitionNode).typeCondition.name.value
      } specified in fragment doesn't match return type ${deepReturnType.toString()}`
    )
  }

  return (immutable as any).update(
    info,
    ['fieldNodes', 0, 'selectionSet', 'selections'],
    selections =>
      selections.concat(
        (ast.definitions[0] as OperationDefinitionNode).selectionSet.selections
      )
  )
}
