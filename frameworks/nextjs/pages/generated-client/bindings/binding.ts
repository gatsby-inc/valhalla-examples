import {
  QueryMap,
  MutationMap,
  BindingOptions,
  SubscriptionMap /* , Operation*/,
  QueryOrMutation,
} from './types'
import { Delegate } from './Delegate'
import { GraphQLError } from 'graphql'

// to avoid recreation on each instantiation for the same schema, we cache the created methods
const methodCache = new Map()

export class Binding extends Delegate {
  query: QueryMap
  mutation: MutationMap
  subscription: SubscriptionMap

  constructor({ schema, before, disableCache }: BindingOptions) {
    super({ schema, before, disableCache })

    const { query, mutation, subscription } = this.buildMethods()
    this.query = query
    this.mutation = mutation
    this.subscription = subscription
  }

  buildMethods() {
    const cachedMethods = methodCache.get(this.schema)
    if (cachedMethods) {
      return cachedMethods
    }
    const methods = {
      query: this.buildQueryMethods('query'),
      mutation: this.buildQueryMethods('mutation'),
      subscription: this.buildSubscriptionMethods(),
    }
    if (!this.disableCache) {
      methodCache.set(this.schema, methods)
    }
    return methods
  }

  buildQueryMethods(operation: QueryOrMutation): QueryMap {
    const queryType =
      operation === 'query'
        ? this.schema.getQueryType()
        : this.schema.getMutationType()
    if (!queryType) {
      return {}
    }
    const fields = queryType.getFields()
    return Object.entries(fields)
      .map(([fieldName, field]) => {
        return {
          key: fieldName,
          value: async (args, info, options) => {
            const result = await this.delegate(
              operation,
              fieldName,
              args,
              info,
              options
            )

            if (result instanceof Error || result instanceof GraphQLError) {
              throw result
            }

            return result
          },
        }
      })
      .reduce((acc, curr) => {
        return { ...acc, [curr.key]: curr.value }
      }, {})
  }

  buildSubscriptionMethods(): SubscriptionMap {
    const subscriptionType = this.schema.getSubscriptionType()
    if (!subscriptionType) {
      return {}
    }
    const fields = subscriptionType.getFields()
    return Object.entries(fields)
      .map(([fieldName, field]) => {
        return {
          key: fieldName,
          value: (args, info, options) =>
            this.delegateSubscription(fieldName, args, info, options),
        }
      })
      .reduce((acc, curr) => {
        return { ...acc, [curr.key]: curr.value }
      }, {})
  }
}
