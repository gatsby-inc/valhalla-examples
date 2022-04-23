/**
 * THIS FILE HAS BEEN GENERATED. DO NOT EDIT!
 */
import { Options } from "./bindings/types";
import { Binding } from "./bindings/binding";

import nodeFetch from "node-fetch";
import turistFetch from "@turist/fetch";

import { GraphQLResolveInfo, GraphQLSchema } from "graphql";

import { print, buildSchema } from "graphql";
import { IResolvers, AsyncExecutor } from "@graphql-tools/utils";
import { wrapSchema } from "@graphql-tools/wrap";
import { readFileSync } from "fs";

import {
  ContentfulAssetFieldsEnum,
  ContentfulCatsAboutTextNodeFieldsEnum,
  ContentfulCatsFieldsEnum,
  ContentfulContentTypeFieldsEnum,
  ContentfulDogsAboutTextNodeFieldsEnum,
  ContentfulDogsFieldsEnum,
  ContentfulEntryFieldsEnum,
  ContentfulImageCropFocus,
  DirectoryFieldsEnum,
  FileFieldsEnum,
  GatsbyImageFormat,
  GatsbyImageLayout,
  GatsbyImagePlaceholder,
  ImageCropFocus,
  ImageFit,
  ImageFormat,
  ImageLayout,
  ImagePlaceholder,
  ImageResizingBehavior,
  ImageSharpFieldsEnum,
  PotraceTurnPolicy,
  RemoteFileCropFocus,
  RemoteFileFit,
  RemoteFileFormat,
  RemoteFileLayout,
  RemoteFilePlaceholder,
  SiteBuildMetadataFieldsEnum,
  SiteFieldsEnum,
  SiteFunctionFieldsEnum,
  SitePageFieldsEnum,
  SitePluginFieldsEnum,
  SortOrderEnum,
  AvifOptions,
  BlurredOptions,
  BooleanQueryOperatorInput,
  ContentfulAssetFileDetailsFilterInput,
  ContentfulAssetFileDetailsImageFilterInput,
  ContentfulAssetFileFilterInput,
  ContentfulAssetFilterInput,
  ContentfulAssetSortInput,
  ContentfulAssetSysFilterInput,
  ContentfulCatsAboutTextNodeFilterInput,
  ContentfulCatsAboutTextNodeFilterListInput,
  ContentfulCatsAboutTextNodeSortInput,
  ContentfulCatsAboutTextNodeSysFilterInput,
  ContentfulCatsFilterInput,
  ContentfulCatsLocationFilterInput,
  ContentfulCatsSortInput,
  ContentfulCatsSysContentTypeFilterInput,
  ContentfulCatsSysContentTypeSysFilterInput,
  ContentfulCatsSysFilterInput,
  ContentfulContentTypeFilterInput,
  ContentfulContentTypeSortInput,
  ContentfulContentTypeSysFilterInput,
  ContentfulDogsAboutTextNodeFilterInput,
  ContentfulDogsAboutTextNodeFilterListInput,
  ContentfulDogsAboutTextNodeSortInput,
  ContentfulDogsAboutTextNodeSysFilterInput,
  ContentfulDogsFilterInput,
  ContentfulDogsLocationFilterInput,
  ContentfulDogsSortInput,
  ContentfulDogsSysContentTypeFilterInput,
  ContentfulDogsSysContentTypeSysFilterInput,
  ContentfulDogsSysFilterInput,
  ContentfulEntryFilterInput,
  ContentfulEntrySortInput,
  DateQueryOperatorInput,
  DirectoryFilterInput,
  DirectorySortInput,
  DuotoneGradient,
  FileFilterInput,
  FileSortInput,
  FloatQueryOperatorInput,
  ImageSharpFilterInput,
  ImageSharpFilterListInput,
  ImageSharpFixedFilterInput,
  ImageSharpFluidFilterInput,
  ImageSharpOriginalFilterInput,
  ImageSharpResizeFilterInput,
  ImageSharpSortInput,
  InternalFilterInput,
  IntQueryOperatorInput,
  JpgOptions,
  JsonQueryOperatorInput,
  NodeFilterInput,
  NodeFilterListInput,
  PngOptions,
  Potrace,
  RemoteFileResizeFilterInput,
  SiteBuildMetadataFilterInput,
  SiteBuildMetadataSortInput,
  SiteFilterInput,
  SiteFunctionFilterInput,
  SiteFunctionSortInput,
  SitePageFilterInput,
  SitePageSortInput,
  SitePluginFilterInput,
  SitePluginSortInput,
  SiteSiteMetadataFilterInput,
  SiteSortInput,
  StringQueryOperatorInput,
  TransformOptions,
  WebPOptions,
  ContentfulEntry,
  ContentfulReference,
  Node,
  RemoteFile,
  ContentfulAsset,
  ContentfulAssetConnection,
  ContentfulAssetEdge,
  ContentfulAssetFile,
  ContentfulAssetFileDetails,
  ContentfulAssetFileDetailsImage,
  ContentfulAssetGroupConnection,
  ContentfulAssetSys,
  ContentfulCats,
  ContentfulCatsAboutTextNode,
  ContentfulCatsAboutTextNodeConnection,
  ContentfulCatsAboutTextNodeEdge,
  ContentfulCatsAboutTextNodeGroupConnection,
  ContentfulCatsAboutTextNodeSys,
  ContentfulCatsConnection,
  ContentfulCatsEdge,
  ContentfulCatsGroupConnection,
  ContentfulCatsLocation,
  ContentfulCatsSys,
  ContentfulCatsSysContentType,
  ContentfulCatsSysContentTypeSys,
  ContentfulContentType,
  ContentfulContentTypeConnection,
  ContentfulContentTypeEdge,
  ContentfulContentTypeGroupConnection,
  ContentfulContentTypeSys,
  ContentfulDogs,
  ContentfulDogsAboutTextNode,
  ContentfulDogsAboutTextNodeConnection,
  ContentfulDogsAboutTextNodeEdge,
  ContentfulDogsAboutTextNodeGroupConnection,
  ContentfulDogsAboutTextNodeSys,
  ContentfulDogsConnection,
  ContentfulDogsEdge,
  ContentfulDogsGroupConnection,
  ContentfulDogsLocation,
  ContentfulDogsSys,
  ContentfulDogsSysContentType,
  ContentfulDogsSysContentTypeSys,
  ContentfulEntryConnection,
  ContentfulEntryEdge,
  ContentfulEntryGroupConnection,
  Directory,
  DirectoryConnection,
  DirectoryEdge,
  DirectoryGroupConnection,
  File,
  FileConnection,
  FileEdge,
  FileGroupConnection,
  ImageSharp,
  ImageSharpConnection,
  ImageSharpEdge,
  ImageSharpFixed,
  ImageSharpFluid,
  ImageSharpGroupConnection,
  ImageSharpOriginal,
  ImageSharpResize,
  Internal,
  PageInfo,
  RemoteFileResize,
  Site,
  SiteBuildMetadata,
  SiteBuildMetadataConnection,
  SiteBuildMetadataEdge,
  SiteBuildMetadataGroupConnection,
  SiteConnection,
  SiteEdge,
  SiteFunction,
  SiteFunctionConnection,
  SiteFunctionEdge,
  SiteFunctionGroupConnection,
  SiteGroupConnection,
  SitePage,
  SitePageConnection,
  SitePageEdge,
  SitePageGroupConnection,
  SitePlugin,
  SitePluginConnection,
  SitePluginEdge,
  SitePluginGroupConnection,
  SiteSiteMetadata,
  // Date,
} from "./types";

declare interface GlobalFetch {
  fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
}
const fetch = turistFetch(nodeFetch, {
  timeout: 2 * 60 * 1000,
}) as unknown as GlobalFetch["fetch"];

export interface GatsbyQuery {
  file: <T = File | null>(
    args: {
      sourceInstanceName?: StringQueryOperatorInput | null;
      absolutePath?: StringQueryOperatorInput | null;
      relativePath?: StringQueryOperatorInput | null;
      extension?: StringQueryOperatorInput | null;
      size?: IntQueryOperatorInput | null;
      prettySize?: StringQueryOperatorInput | null;
      modifiedTime?: DateQueryOperatorInput | null;
      accessTime?: DateQueryOperatorInput | null;
      changeTime?: DateQueryOperatorInput | null;
      birthTime?: DateQueryOperatorInput | null;
      root?: StringQueryOperatorInput | null;
      dir?: StringQueryOperatorInput | null;
      base?: StringQueryOperatorInput | null;
      ext?: StringQueryOperatorInput | null;
      name?: StringQueryOperatorInput | null;
      relativeDirectory?: StringQueryOperatorInput | null;
      dev?: IntQueryOperatorInput | null;
      mode?: IntQueryOperatorInput | null;
      nlink?: IntQueryOperatorInput | null;
      uid?: IntQueryOperatorInput | null;
      gid?: IntQueryOperatorInput | null;
      rdev?: IntQueryOperatorInput | null;
      ino?: FloatQueryOperatorInput | null;
      atimeMs?: FloatQueryOperatorInput | null;
      mtimeMs?: FloatQueryOperatorInput | null;
      ctimeMs?: FloatQueryOperatorInput | null;
      atime?: DateQueryOperatorInput | null;
      mtime?: DateQueryOperatorInput | null;
      ctime?: DateQueryOperatorInput | null;
      birthtime?: DateQueryOperatorInput | null;
      birthtimeMs?: FloatQueryOperatorInput | null;
      blksize?: IntQueryOperatorInput | null;
      blocks?: IntQueryOperatorInput | null;
      publicURL?: StringQueryOperatorInput | null;
      childrenImageSharp?: ImageSharpFilterListInput | null;
      childImageSharp?: ImageSharpFilterInput | null;
      id?: StringQueryOperatorInput | null;
      parent?: NodeFilterInput | null;
      children?: NodeFilterListInput | null;
      internal?: InternalFilterInput | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  allFile: <T = FileConnection>(
    args: {
      filter?: FileFilterInput | null;
      sort?: FileSortInput | null;
      skip?: Int | null;
      limit?: Int | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  directory: <T = Directory | null>(
    args: {
      sourceInstanceName?: StringQueryOperatorInput | null;
      absolutePath?: StringQueryOperatorInput | null;
      relativePath?: StringQueryOperatorInput | null;
      extension?: StringQueryOperatorInput | null;
      size?: IntQueryOperatorInput | null;
      prettySize?: StringQueryOperatorInput | null;
      modifiedTime?: DateQueryOperatorInput | null;
      accessTime?: DateQueryOperatorInput | null;
      changeTime?: DateQueryOperatorInput | null;
      birthTime?: DateQueryOperatorInput | null;
      root?: StringQueryOperatorInput | null;
      dir?: StringQueryOperatorInput | null;
      base?: StringQueryOperatorInput | null;
      ext?: StringQueryOperatorInput | null;
      name?: StringQueryOperatorInput | null;
      relativeDirectory?: StringQueryOperatorInput | null;
      dev?: IntQueryOperatorInput | null;
      mode?: IntQueryOperatorInput | null;
      nlink?: IntQueryOperatorInput | null;
      uid?: IntQueryOperatorInput | null;
      gid?: IntQueryOperatorInput | null;
      rdev?: IntQueryOperatorInput | null;
      ino?: FloatQueryOperatorInput | null;
      atimeMs?: FloatQueryOperatorInput | null;
      mtimeMs?: FloatQueryOperatorInput | null;
      ctimeMs?: FloatQueryOperatorInput | null;
      atime?: DateQueryOperatorInput | null;
      mtime?: DateQueryOperatorInput | null;
      ctime?: DateQueryOperatorInput | null;
      birthtime?: DateQueryOperatorInput | null;
      birthtimeMs?: FloatQueryOperatorInput | null;
      id?: StringQueryOperatorInput | null;
      parent?: NodeFilterInput | null;
      children?: NodeFilterListInput | null;
      internal?: InternalFilterInput | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  allDirectory: <T = DirectoryConnection>(
    args: {
      filter?: DirectoryFilterInput | null;
      sort?: DirectorySortInput | null;
      skip?: Int | null;
      limit?: Int | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  site: <T = Site | null>(
    args: {
      buildTime?: DateQueryOperatorInput | null;
      siteMetadata?: SiteSiteMetadataFilterInput | null;
      polyfill?: BooleanQueryOperatorInput | null;
      pathPrefix?: StringQueryOperatorInput | null;
      jsxRuntime?: StringQueryOperatorInput | null;
      trailingSlash?: StringQueryOperatorInput | null;
      id?: StringQueryOperatorInput | null;
      parent?: NodeFilterInput | null;
      children?: NodeFilterListInput | null;
      internal?: InternalFilterInput | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  allSite: <T = SiteConnection>(
    args: {
      filter?: SiteFilterInput | null;
      sort?: SiteSortInput | null;
      skip?: Int | null;
      limit?: Int | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  siteFunction: <T = SiteFunction | null>(
    args: {
      functionRoute?: StringQueryOperatorInput | null;
      pluginName?: StringQueryOperatorInput | null;
      originalAbsoluteFilePath?: StringQueryOperatorInput | null;
      originalRelativeFilePath?: StringQueryOperatorInput | null;
      relativeCompiledFilePath?: StringQueryOperatorInput | null;
      absoluteCompiledFilePath?: StringQueryOperatorInput | null;
      matchPath?: StringQueryOperatorInput | null;
      id?: StringQueryOperatorInput | null;
      parent?: NodeFilterInput | null;
      children?: NodeFilterListInput | null;
      internal?: InternalFilterInput | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  allSiteFunction: <T = SiteFunctionConnection>(
    args: {
      filter?: SiteFunctionFilterInput | null;
      sort?: SiteFunctionSortInput | null;
      skip?: Int | null;
      limit?: Int | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  sitePage: <T = SitePage | null>(
    args: {
      path?: StringQueryOperatorInput | null;
      component?: StringQueryOperatorInput | null;
      internalComponentName?: StringQueryOperatorInput | null;
      componentChunkName?: StringQueryOperatorInput | null;
      matchPath?: StringQueryOperatorInput | null;
      pageContext?: JsonQueryOperatorInput | null;
      pluginCreator?: SitePluginFilterInput | null;
      id?: StringQueryOperatorInput | null;
      parent?: NodeFilterInput | null;
      children?: NodeFilterListInput | null;
      internal?: InternalFilterInput | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  allSitePage: <T = SitePageConnection>(
    args: {
      filter?: SitePageFilterInput | null;
      sort?: SitePageSortInput | null;
      skip?: Int | null;
      limit?: Int | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  sitePlugin: <T = SitePlugin | null>(
    args: {
      resolve?: StringQueryOperatorInput | null;
      name?: StringQueryOperatorInput | null;
      version?: StringQueryOperatorInput | null;
      nodeAPIs?: StringQueryOperatorInput | null;
      browserAPIs?: StringQueryOperatorInput | null;
      ssrAPIs?: StringQueryOperatorInput | null;
      pluginFilepath?: StringQueryOperatorInput | null;
      pluginOptions?: JsonQueryOperatorInput | null;
      packageJson?: JsonQueryOperatorInput | null;
      id?: StringQueryOperatorInput | null;
      parent?: NodeFilterInput | null;
      children?: NodeFilterListInput | null;
      internal?: InternalFilterInput | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  allSitePlugin: <T = SitePluginConnection>(
    args: {
      filter?: SitePluginFilterInput | null;
      sort?: SitePluginSortInput | null;
      skip?: Int | null;
      limit?: Int | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  siteBuildMetadata: <T = SiteBuildMetadata | null>(
    args: {
      buildTime?: DateQueryOperatorInput | null;
      id?: StringQueryOperatorInput | null;
      parent?: NodeFilterInput | null;
      children?: NodeFilterListInput | null;
      internal?: InternalFilterInput | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  allSiteBuildMetadata: <T = SiteBuildMetadataConnection>(
    args: {
      filter?: SiteBuildMetadataFilterInput | null;
      sort?: SiteBuildMetadataSortInput | null;
      skip?: Int | null;
      limit?: Int | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  contentfulEntry: <T = ContentfulEntry | null>(
    args: {
      contentful_id?: StringQueryOperatorInput | null;
      id?: StringQueryOperatorInput | null;
      node_locale?: StringQueryOperatorInput | null;
      parent?: NodeFilterInput | null;
      children?: NodeFilterListInput | null;
      internal?: InternalFilterInput | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  allContentfulEntry: <T = ContentfulEntryConnection>(
    args: {
      filter?: ContentfulEntryFilterInput | null;
      sort?: ContentfulEntrySortInput | null;
      skip?: Int | null;
      limit?: Int | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  contentfulAsset: <T = ContentfulAsset | null>(
    args: {
      contentful_id?: StringQueryOperatorInput | null;
      id?: StringQueryOperatorInput | null;
      gatsbyImageData?: Js | null;
      spaceId?: StringQueryOperatorInput | null;
      createdAt?: DateQueryOperatorInput | null;
      updatedAt?: DateQueryOperatorInput | null;
      file?: ContentfulAssetFileFilterInput | null;
      title?: StringQueryOperatorInput | null;
      description?: StringQueryOperatorInput | null;
      node_locale?: StringQueryOperatorInput | null;
      sys?: ContentfulAssetSysFilterInput | null;
      url?: StringQueryOperatorInput | null;
      placeholderUrl?: StringQueryOperatorInput | null;
      mimeType?: StringQueryOperatorInput | null;
      filename?: StringQueryOperatorInput | null;
      width?: IntQueryOperatorInput | null;
      height?: IntQueryOperatorInput | null;
      parent?: NodeFilterInput | null;
      children?: NodeFilterListInput | null;
      internal?: InternalFilterInput | null;
      filesize?: IntQueryOperatorInput | null;
      publicUrl?: StringQueryOperatorInput | null;
      resize?: RemoteFileResizeFilterInput | null;
      gatsbyImage?: JsonQueryOperatorInput | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  allContentfulAsset: <T = ContentfulAssetConnection>(
    args: {
      filter?: ContentfulAssetFilterInput | null;
      sort?: ContentfulAssetSortInput | null;
      skip?: Int | null;
      limit?: Int | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  contentfulDogs: <T = ContentfulDogs | null>(
    args: {
      contentful_id?: StringQueryOperatorInput | null;
      id?: StringQueryOperatorInput | null;
      node_locale?: StringQueryOperatorInput | null;
      name?: StringQueryOperatorInput | null;
      location?: ContentfulDogsLocationFilterInput | null;
      image?: ContentfulAssetFilterInput | null;
      about?: ContentfulDogsAboutTextNodeFilterInput | null;
      spaceId?: StringQueryOperatorInput | null;
      createdAt?: DateQueryOperatorInput | null;
      updatedAt?: DateQueryOperatorInput | null;
      sys?: ContentfulDogsSysFilterInput | null;
      childrenContentfulDogsAboutTextNode?: ContentfulDogsAboutTextNodeFilterListInput | null;
      childContentfulDogsAboutTextNode?: ContentfulDogsAboutTextNodeFilterInput | null;
      parent?: NodeFilterInput | null;
      children?: NodeFilterListInput | null;
      internal?: InternalFilterInput | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  allContentfulDogs: <T = ContentfulDogsConnection>(
    args: {
      filter?: ContentfulDogsFilterInput | null;
      sort?: ContentfulDogsSortInput | null;
      skip?: Int | null;
      limit?: Int | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  contentfulCats: <T = ContentfulCats | null>(
    args: {
      contentful_id?: StringQueryOperatorInput | null;
      id?: StringQueryOperatorInput | null;
      node_locale?: StringQueryOperatorInput | null;
      name?: StringQueryOperatorInput | null;
      location?: ContentfulCatsLocationFilterInput | null;
      image?: ContentfulAssetFilterInput | null;
      about?: ContentfulCatsAboutTextNodeFilterInput | null;
      spaceId?: StringQueryOperatorInput | null;
      createdAt?: DateQueryOperatorInput | null;
      updatedAt?: DateQueryOperatorInput | null;
      sys?: ContentfulCatsSysFilterInput | null;
      childrenContentfulCatsAboutTextNode?: ContentfulCatsAboutTextNodeFilterListInput | null;
      childContentfulCatsAboutTextNode?: ContentfulCatsAboutTextNodeFilterInput | null;
      parent?: NodeFilterInput | null;
      children?: NodeFilterListInput | null;
      internal?: InternalFilterInput | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  allContentfulCats: <T = ContentfulCatsConnection>(
    args: {
      filter?: ContentfulCatsFilterInput | null;
      sort?: ContentfulCatsSortInput | null;
      skip?: Int | null;
      limit?: Int | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  imageSharp: <T = ImageSharp | null>(
    args: {
      fixed?: ImageSharpFixedFilterInput | null;
      fluid?: ImageSharpFluidFilterInput | null;
      gatsbyImageData?: JsonQueryOperatorInput | null;
      original?: ImageSharpOriginalFilterInput | null;
      resize?: ImageSharpResizeFilterInput | null;
      id?: StringQueryOperatorInput | null;
      parent?: NodeFilterInput | null;
      children?: NodeFilterListInput | null;
      internal?: InternalFilterInput | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  allImageSharp: <T = ImageSharpConnection>(
    args: {
      filter?: ImageSharpFilterInput | null;
      sort?: ImageSharpSortInput | null;
      skip?: Int | null;
      limit?: Int | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  contentfulDogsAboutTextNode: <T = ContentfulDogsAboutTextNode | null>(
    args: {
      id?: StringQueryOperatorInput | null;
      parent?: NodeFilterInput | null;
      children?: NodeFilterListInput | null;
      internal?: InternalFilterInput | null;
      about?: StringQueryOperatorInput | null;
      sys?: ContentfulDogsAboutTextNodeSysFilterInput | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  allContentfulDogsAboutTextNode: <T = ContentfulDogsAboutTextNodeConnection>(
    args: {
      filter?: ContentfulDogsAboutTextNodeFilterInput | null;
      sort?: ContentfulDogsAboutTextNodeSortInput | null;
      skip?: Int | null;
      limit?: Int | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  contentfulCatsAboutTextNode: <T = ContentfulCatsAboutTextNode | null>(
    args: {
      id?: StringQueryOperatorInput | null;
      parent?: NodeFilterInput | null;
      children?: NodeFilterListInput | null;
      internal?: InternalFilterInput | null;
      about?: StringQueryOperatorInput | null;
      sys?: ContentfulCatsAboutTextNodeSysFilterInput | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  allContentfulCatsAboutTextNode: <T = ContentfulCatsAboutTextNodeConnection>(
    args: {
      filter?: ContentfulCatsAboutTextNodeFilterInput | null;
      sort?: ContentfulCatsAboutTextNodeSortInput | null;
      skip?: Int | null;
      limit?: Int | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  contentfulContentType: <T = ContentfulContentType | null>(
    args: {
      id?: StringQueryOperatorInput | null;
      parent?: NodeFilterInput | null;
      children?: NodeFilterListInput | null;
      internal?: InternalFilterInput | null;
      name?: StringQueryOperatorInput | null;
      displayField?: StringQueryOperatorInput | null;
      description?: StringQueryOperatorInput | null;
      sys?: ContentfulContentTypeSysFilterInput | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  allContentfulContentType: <T = ContentfulContentTypeConnection>(
    args: {
      filter?: ContentfulContentTypeFilterInput | null;
      sort?: ContentfulContentTypeSortInput | null;
      skip?: Int | null;
      limit?: Int | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
}
export interface GatsbyMutation {}
export interface GatsbySubscription {}
export interface GatsbyBinding {
  query: GatsbyQuery;
  mutation: GatsbyMutation;
  subscription: GatsbySubscription;
  request: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;
  delegate(
    operation: "query" | "mutation",
    fieldName: string,
    args: {
      [key: string]: any;
    },
    infoOrQuery?: GraphQLResolveInfo | string,
    options?: Options
  ): Promise<any>;
  delegateSubscription(
    fieldName: string,
    args?: {
      [key: string]: any;
    },
    infoOrQuery?: GraphQLResolveInfo | string,
    options?: Options
  ): Promise<AsyncIterator<any>>;
  getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}
interface BindingConstructor<T> {
  new (...args: any[]): T;
}

const rootTypeDefs = readFileSync(process.cwd() + "/src/generated-client/schema.graphql", "utf-8");
export const gatsbyTypeDefs = [rootTypeDefs].join("");

function createGatsbyBinding({
  uri,
  serviceId,
  customHeaders = {},
}: any): GatsbyBinding {
  const executor: AsyncExecutor = async ({ document, variables }) => {
    const query = print(document);
    const fetchResult = await fetch(uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        serviceid: serviceId,
        ...customHeaders,
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!fetchResult.ok) {
      throw new Error("Failed");
    }

    return fetchResult.json();
  };
  const schema = wrapSchema({
    schema: buildSchema(gatsbyTypeDefs),
    executor,
  });

  function makeBindingClass<T>({ schema }: { schema: GraphQLSchema }): T {
    return class ServiceBinding extends Binding {
      constructor(options: any) {
        super({ schema, ...options });
      }
      buildMethods() {
        return {
          query: this.buildQueryMethods("query"),
          mutation: this.buildQueryMethods("mutation"),
          subscription: this.buildSubscriptionMethods(),
        };
      }
    } as any;
  }
  const ServiceBinding = makeBindingClass<BindingConstructor<GatsbyBinding>>({
    schema,
  });
  return new ServiceBinding();
}

// Types
/*
 The 'Boolean' scalar type represents 'true' or 'false'.
 */
export type Boolean = boolean;
/*
 The 'Int' scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
 */
export type Int = number;
export type Float = number;
/*
 The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
 */
export type String = string;
export type ID_Output = string;
export type UUID = string;
export type URI = string;
export type HTML = string;
export type JSON = string;


let gatsbyClientInst: GatsbyBinding | undefined

if (!gatsbyClientInst) {
  gatsbyClientInst = createGatsbyBinding({
    uri: `http://localhost:8801/graphql`,
    serviceId: `foo`,
  });
}

export const gatsbyClient = gatsbyClientInst
