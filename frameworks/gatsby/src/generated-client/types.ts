// THIS IS A GENERATED FILE
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AvifOptions = {
  lossless?: InputMaybe<Scalars['Boolean']>;
  quality?: InputMaybe<Scalars['Int']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type ContentfulAsset = ContentfulReference & Node & RemoteFile & {
  children: Array<Node>;
  contentful_id: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  file?: Maybe<ContentfulAssetFile>;
  filename: Scalars['String'];
  filesize?: Maybe<Scalars['Int']>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  gatsbyImage?: Maybe<Scalars['JSON']>;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  internal: Internal;
  mimeType: Scalars['String'];
  node_locale?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  placeholderUrl?: Maybe<Scalars['String']>;
  publicUrl: Scalars['String'];
  resize?: Maybe<RemoteFileResize>;
  spaceId?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulAssetSys>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


export type ContentfulAssetCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulAssetGatsbyImageArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  formats?: InputMaybe<Array<RemoteFileFormat>>;
  height?: InputMaybe<Scalars['Int']>;
  layout?: InputMaybe<RemoteFileLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  quality?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  cornerRadius?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ContentfulImageCropFocus>;
  formats?: InputMaybe<Array<InputMaybe<GatsbyImageFormat>>>;
  height?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  layout?: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<GatsbyImagePlaceholder>;
  quality?: InputMaybe<Scalars['Int']>;
  resizingBehavior?: InputMaybe<ImageResizingBehavior>;
  sizes?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetResizeArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulAssetConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulAssetEdge>;
  group: Array<ContentfulAssetGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  field: ContentfulAssetFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetConnectionMaxArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionMinArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionSumArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export enum ContentfulAssetFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  Description = 'description',
  FileContentType = 'file___contentType',
  FileDetailsImageHeight = 'file___details___image___height',
  FileDetailsImageWidth = 'file___details___image___width',
  FileDetailsSize = 'file___details___size',
  FileFileName = 'file___fileName',
  FileUrl = 'file___url',
  Filename = 'filename',
  Filesize = 'filesize',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  GatsbyImage = 'gatsbyImage',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  GatsbyImageData = 'gatsbyImageData',
  Height = 'height',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MimeType = 'mimeType',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PlaceholderUrl = 'placeholderUrl',
  PublicUrl = 'publicUrl',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeHeight = 'resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeSrc = 'resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeWidth = 'resize___width',
  SpaceId = 'spaceId',
  SysRevision = 'sys___revision',
  SysType = 'sys___type',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  Url = 'url',
  Width = 'width'
}

export type ContentfulAssetFile = {
  contentType?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  image?: Maybe<ContentfulAssetFileDetailsImage>;
  size?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  image?: InputMaybe<ContentfulAssetFileDetailsImageFilterInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileDetailsImage = {
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  height?: InputMaybe<IntQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  contentType?: InputMaybe<StringQueryOperatorInput>;
  details?: InputMaybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  file?: InputMaybe<ContentfulAssetFileFilterInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  filesize?: InputMaybe<IntQueryOperatorInput>;
  gatsbyImage?: InputMaybe<JsonQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  placeholderUrl?: InputMaybe<StringQueryOperatorInput>;
  publicUrl?: InputMaybe<StringQueryOperatorInput>;
  resize?: InputMaybe<RemoteFileResizeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAssetSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulAssetGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulAssetEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ContentfulAssetGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulAssetGroupConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetGroupConnectionGroupArgs = {
  field: ContentfulAssetFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetGroupConnectionMaxArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetGroupConnectionMinArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetGroupConnectionSumArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulAssetFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulAssetSys = {
  revision?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type ContentfulAssetSysFilterInput = {
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulCats = ContentfulEntry & ContentfulReference & Node & {
  about?: Maybe<ContentfulCatsAboutTextNode>;
  /** Returns the first child node of type contentfulCatsAboutTextNode or null if there are no children of given type on this node */
  childContentfulCatsAboutTextNode?: Maybe<ContentfulCatsAboutTextNode>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type contentfulCatsAboutTextNode */
  childrenContentfulCatsAboutTextNode?: Maybe<Array<Maybe<ContentfulCatsAboutTextNode>>>;
  contentful_id: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  image?: Maybe<ContentfulAsset>;
  internal: Internal;
  location?: Maybe<ContentfulCatsLocation>;
  name?: Maybe<Scalars['String']>;
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  spaceId?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulCatsSys>;
  updatedAt?: Maybe<Scalars['Date']>;
};


export type ContentfulCatsCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulCatsUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulCatsConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulCatsEdge>;
  group: Array<ContentfulCatsGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulCats>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulCatsConnectionDistinctArgs = {
  field: ContentfulCatsFieldsEnum;
};


export type ContentfulCatsConnectionGroupArgs = {
  field: ContentfulCatsFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulCatsConnectionMaxArgs = {
  field: ContentfulCatsFieldsEnum;
};


export type ContentfulCatsConnectionMinArgs = {
  field: ContentfulCatsFieldsEnum;
};


export type ContentfulCatsConnectionSumArgs = {
  field: ContentfulCatsFieldsEnum;
};

export type ContentfulCatsEdge = {
  next?: Maybe<ContentfulCats>;
  node: ContentfulCats;
  previous?: Maybe<ContentfulCats>;
};

export enum ContentfulCatsFieldsEnum {
  AboutAbout = 'about___about',
  AboutChildren = 'about___children',
  AboutChildrenChildren = 'about___children___children',
  AboutChildrenChildrenChildren = 'about___children___children___children',
  AboutChildrenChildrenId = 'about___children___children___id',
  AboutChildrenId = 'about___children___id',
  AboutChildrenInternalContent = 'about___children___internal___content',
  AboutChildrenInternalContentDigest = 'about___children___internal___contentDigest',
  AboutChildrenInternalDescription = 'about___children___internal___description',
  AboutChildrenInternalFieldOwners = 'about___children___internal___fieldOwners',
  AboutChildrenInternalIgnoreType = 'about___children___internal___ignoreType',
  AboutChildrenInternalMediaType = 'about___children___internal___mediaType',
  AboutChildrenInternalOwner = 'about___children___internal___owner',
  AboutChildrenInternalType = 'about___children___internal___type',
  AboutChildrenParentChildren = 'about___children___parent___children',
  AboutChildrenParentId = 'about___children___parent___id',
  AboutId = 'about___id',
  AboutInternalContent = 'about___internal___content',
  AboutInternalContentDigest = 'about___internal___contentDigest',
  AboutInternalDescription = 'about___internal___description',
  AboutInternalFieldOwners = 'about___internal___fieldOwners',
  AboutInternalIgnoreType = 'about___internal___ignoreType',
  AboutInternalMediaType = 'about___internal___mediaType',
  AboutInternalOwner = 'about___internal___owner',
  AboutInternalType = 'about___internal___type',
  AboutParentChildren = 'about___parent___children',
  AboutParentChildrenChildren = 'about___parent___children___children',
  AboutParentChildrenId = 'about___parent___children___id',
  AboutParentId = 'about___parent___id',
  AboutParentInternalContent = 'about___parent___internal___content',
  AboutParentInternalContentDigest = 'about___parent___internal___contentDigest',
  AboutParentInternalDescription = 'about___parent___internal___description',
  AboutParentInternalFieldOwners = 'about___parent___internal___fieldOwners',
  AboutParentInternalIgnoreType = 'about___parent___internal___ignoreType',
  AboutParentInternalMediaType = 'about___parent___internal___mediaType',
  AboutParentInternalOwner = 'about___parent___internal___owner',
  AboutParentInternalType = 'about___parent___internal___type',
  AboutParentParentChildren = 'about___parent___parent___children',
  AboutParentParentId = 'about___parent___parent___id',
  AboutSysType = 'about___sys___type',
  ChildContentfulCatsAboutTextNodeAbout = 'childContentfulCatsAboutTextNode___about',
  ChildContentfulCatsAboutTextNodeChildren = 'childContentfulCatsAboutTextNode___children',
  ChildContentfulCatsAboutTextNodeChildrenChildren = 'childContentfulCatsAboutTextNode___children___children',
  ChildContentfulCatsAboutTextNodeChildrenChildrenChildren = 'childContentfulCatsAboutTextNode___children___children___children',
  ChildContentfulCatsAboutTextNodeChildrenChildrenId = 'childContentfulCatsAboutTextNode___children___children___id',
  ChildContentfulCatsAboutTextNodeChildrenId = 'childContentfulCatsAboutTextNode___children___id',
  ChildContentfulCatsAboutTextNodeChildrenInternalContent = 'childContentfulCatsAboutTextNode___children___internal___content',
  ChildContentfulCatsAboutTextNodeChildrenInternalContentDigest = 'childContentfulCatsAboutTextNode___children___internal___contentDigest',
  ChildContentfulCatsAboutTextNodeChildrenInternalDescription = 'childContentfulCatsAboutTextNode___children___internal___description',
  ChildContentfulCatsAboutTextNodeChildrenInternalFieldOwners = 'childContentfulCatsAboutTextNode___children___internal___fieldOwners',
  ChildContentfulCatsAboutTextNodeChildrenInternalIgnoreType = 'childContentfulCatsAboutTextNode___children___internal___ignoreType',
  ChildContentfulCatsAboutTextNodeChildrenInternalMediaType = 'childContentfulCatsAboutTextNode___children___internal___mediaType',
  ChildContentfulCatsAboutTextNodeChildrenInternalOwner = 'childContentfulCatsAboutTextNode___children___internal___owner',
  ChildContentfulCatsAboutTextNodeChildrenInternalType = 'childContentfulCatsAboutTextNode___children___internal___type',
  ChildContentfulCatsAboutTextNodeChildrenParentChildren = 'childContentfulCatsAboutTextNode___children___parent___children',
  ChildContentfulCatsAboutTextNodeChildrenParentId = 'childContentfulCatsAboutTextNode___children___parent___id',
  ChildContentfulCatsAboutTextNodeId = 'childContentfulCatsAboutTextNode___id',
  ChildContentfulCatsAboutTextNodeInternalContent = 'childContentfulCatsAboutTextNode___internal___content',
  ChildContentfulCatsAboutTextNodeInternalContentDigest = 'childContentfulCatsAboutTextNode___internal___contentDigest',
  ChildContentfulCatsAboutTextNodeInternalDescription = 'childContentfulCatsAboutTextNode___internal___description',
  ChildContentfulCatsAboutTextNodeInternalFieldOwners = 'childContentfulCatsAboutTextNode___internal___fieldOwners',
  ChildContentfulCatsAboutTextNodeInternalIgnoreType = 'childContentfulCatsAboutTextNode___internal___ignoreType',
  ChildContentfulCatsAboutTextNodeInternalMediaType = 'childContentfulCatsAboutTextNode___internal___mediaType',
  ChildContentfulCatsAboutTextNodeInternalOwner = 'childContentfulCatsAboutTextNode___internal___owner',
  ChildContentfulCatsAboutTextNodeInternalType = 'childContentfulCatsAboutTextNode___internal___type',
  ChildContentfulCatsAboutTextNodeParentChildren = 'childContentfulCatsAboutTextNode___parent___children',
  ChildContentfulCatsAboutTextNodeParentChildrenChildren = 'childContentfulCatsAboutTextNode___parent___children___children',
  ChildContentfulCatsAboutTextNodeParentChildrenId = 'childContentfulCatsAboutTextNode___parent___children___id',
  ChildContentfulCatsAboutTextNodeParentId = 'childContentfulCatsAboutTextNode___parent___id',
  ChildContentfulCatsAboutTextNodeParentInternalContent = 'childContentfulCatsAboutTextNode___parent___internal___content',
  ChildContentfulCatsAboutTextNodeParentInternalContentDigest = 'childContentfulCatsAboutTextNode___parent___internal___contentDigest',
  ChildContentfulCatsAboutTextNodeParentInternalDescription = 'childContentfulCatsAboutTextNode___parent___internal___description',
  ChildContentfulCatsAboutTextNodeParentInternalFieldOwners = 'childContentfulCatsAboutTextNode___parent___internal___fieldOwners',
  ChildContentfulCatsAboutTextNodeParentInternalIgnoreType = 'childContentfulCatsAboutTextNode___parent___internal___ignoreType',
  ChildContentfulCatsAboutTextNodeParentInternalMediaType = 'childContentfulCatsAboutTextNode___parent___internal___mediaType',
  ChildContentfulCatsAboutTextNodeParentInternalOwner = 'childContentfulCatsAboutTextNode___parent___internal___owner',
  ChildContentfulCatsAboutTextNodeParentInternalType = 'childContentfulCatsAboutTextNode___parent___internal___type',
  ChildContentfulCatsAboutTextNodeParentParentChildren = 'childContentfulCatsAboutTextNode___parent___parent___children',
  ChildContentfulCatsAboutTextNodeParentParentId = 'childContentfulCatsAboutTextNode___parent___parent___id',
  ChildContentfulCatsAboutTextNodeSysType = 'childContentfulCatsAboutTextNode___sys___type',
  Children = 'children',
  ChildrenContentfulCatsAboutTextNode = 'childrenContentfulCatsAboutTextNode',
  ChildrenContentfulCatsAboutTextNodeAbout = 'childrenContentfulCatsAboutTextNode___about',
  ChildrenContentfulCatsAboutTextNodeChildren = 'childrenContentfulCatsAboutTextNode___children',
  ChildrenContentfulCatsAboutTextNodeChildrenChildren = 'childrenContentfulCatsAboutTextNode___children___children',
  ChildrenContentfulCatsAboutTextNodeChildrenChildrenChildren = 'childrenContentfulCatsAboutTextNode___children___children___children',
  ChildrenContentfulCatsAboutTextNodeChildrenChildrenId = 'childrenContentfulCatsAboutTextNode___children___children___id',
  ChildrenContentfulCatsAboutTextNodeChildrenId = 'childrenContentfulCatsAboutTextNode___children___id',
  ChildrenContentfulCatsAboutTextNodeChildrenInternalContent = 'childrenContentfulCatsAboutTextNode___children___internal___content',
  ChildrenContentfulCatsAboutTextNodeChildrenInternalContentDigest = 'childrenContentfulCatsAboutTextNode___children___internal___contentDigest',
  ChildrenContentfulCatsAboutTextNodeChildrenInternalDescription = 'childrenContentfulCatsAboutTextNode___children___internal___description',
  ChildrenContentfulCatsAboutTextNodeChildrenInternalFieldOwners = 'childrenContentfulCatsAboutTextNode___children___internal___fieldOwners',
  ChildrenContentfulCatsAboutTextNodeChildrenInternalIgnoreType = 'childrenContentfulCatsAboutTextNode___children___internal___ignoreType',
  ChildrenContentfulCatsAboutTextNodeChildrenInternalMediaType = 'childrenContentfulCatsAboutTextNode___children___internal___mediaType',
  ChildrenContentfulCatsAboutTextNodeChildrenInternalOwner = 'childrenContentfulCatsAboutTextNode___children___internal___owner',
  ChildrenContentfulCatsAboutTextNodeChildrenInternalType = 'childrenContentfulCatsAboutTextNode___children___internal___type',
  ChildrenContentfulCatsAboutTextNodeChildrenParentChildren = 'childrenContentfulCatsAboutTextNode___children___parent___children',
  ChildrenContentfulCatsAboutTextNodeChildrenParentId = 'childrenContentfulCatsAboutTextNode___children___parent___id',
  ChildrenContentfulCatsAboutTextNodeId = 'childrenContentfulCatsAboutTextNode___id',
  ChildrenContentfulCatsAboutTextNodeInternalContent = 'childrenContentfulCatsAboutTextNode___internal___content',
  ChildrenContentfulCatsAboutTextNodeInternalContentDigest = 'childrenContentfulCatsAboutTextNode___internal___contentDigest',
  ChildrenContentfulCatsAboutTextNodeInternalDescription = 'childrenContentfulCatsAboutTextNode___internal___description',
  ChildrenContentfulCatsAboutTextNodeInternalFieldOwners = 'childrenContentfulCatsAboutTextNode___internal___fieldOwners',
  ChildrenContentfulCatsAboutTextNodeInternalIgnoreType = 'childrenContentfulCatsAboutTextNode___internal___ignoreType',
  ChildrenContentfulCatsAboutTextNodeInternalMediaType = 'childrenContentfulCatsAboutTextNode___internal___mediaType',
  ChildrenContentfulCatsAboutTextNodeInternalOwner = 'childrenContentfulCatsAboutTextNode___internal___owner',
  ChildrenContentfulCatsAboutTextNodeInternalType = 'childrenContentfulCatsAboutTextNode___internal___type',
  ChildrenContentfulCatsAboutTextNodeParentChildren = 'childrenContentfulCatsAboutTextNode___parent___children',
  ChildrenContentfulCatsAboutTextNodeParentChildrenChildren = 'childrenContentfulCatsAboutTextNode___parent___children___children',
  ChildrenContentfulCatsAboutTextNodeParentChildrenId = 'childrenContentfulCatsAboutTextNode___parent___children___id',
  ChildrenContentfulCatsAboutTextNodeParentId = 'childrenContentfulCatsAboutTextNode___parent___id',
  ChildrenContentfulCatsAboutTextNodeParentInternalContent = 'childrenContentfulCatsAboutTextNode___parent___internal___content',
  ChildrenContentfulCatsAboutTextNodeParentInternalContentDigest = 'childrenContentfulCatsAboutTextNode___parent___internal___contentDigest',
  ChildrenContentfulCatsAboutTextNodeParentInternalDescription = 'childrenContentfulCatsAboutTextNode___parent___internal___description',
  ChildrenContentfulCatsAboutTextNodeParentInternalFieldOwners = 'childrenContentfulCatsAboutTextNode___parent___internal___fieldOwners',
  ChildrenContentfulCatsAboutTextNodeParentInternalIgnoreType = 'childrenContentfulCatsAboutTextNode___parent___internal___ignoreType',
  ChildrenContentfulCatsAboutTextNodeParentInternalMediaType = 'childrenContentfulCatsAboutTextNode___parent___internal___mediaType',
  ChildrenContentfulCatsAboutTextNodeParentInternalOwner = 'childrenContentfulCatsAboutTextNode___parent___internal___owner',
  ChildrenContentfulCatsAboutTextNodeParentInternalType = 'childrenContentfulCatsAboutTextNode___parent___internal___type',
  ChildrenContentfulCatsAboutTextNodeParentParentChildren = 'childrenContentfulCatsAboutTextNode___parent___parent___children',
  ChildrenContentfulCatsAboutTextNodeParentParentId = 'childrenContentfulCatsAboutTextNode___parent___parent___id',
  ChildrenContentfulCatsAboutTextNodeSysType = 'childrenContentfulCatsAboutTextNode___sys___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  Id = 'id',
  ImageChildren = 'image___children',
  ImageChildrenChildren = 'image___children___children',
  ImageChildrenChildrenChildren = 'image___children___children___children',
  ImageChildrenChildrenId = 'image___children___children___id',
  ImageChildrenId = 'image___children___id',
  ImageChildrenInternalContent = 'image___children___internal___content',
  ImageChildrenInternalContentDigest = 'image___children___internal___contentDigest',
  ImageChildrenInternalDescription = 'image___children___internal___description',
  ImageChildrenInternalFieldOwners = 'image___children___internal___fieldOwners',
  ImageChildrenInternalIgnoreType = 'image___children___internal___ignoreType',
  ImageChildrenInternalMediaType = 'image___children___internal___mediaType',
  ImageChildrenInternalOwner = 'image___children___internal___owner',
  ImageChildrenInternalType = 'image___children___internal___type',
  ImageChildrenParentChildren = 'image___children___parent___children',
  ImageChildrenParentId = 'image___children___parent___id',
  ImageContentfulId = 'image___contentful_id',
  ImageCreatedAt = 'image___createdAt',
  ImageDescription = 'image___description',
  ImageFileContentType = 'image___file___contentType',
  ImageFileDetailsSize = 'image___file___details___size',
  ImageFileFileName = 'image___file___fileName',
  ImageFileUrl = 'image___file___url',
  ImageFilename = 'image___filename',
  ImageFilesize = 'image___filesize',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageGatsbyImage = 'image___gatsbyImage',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageGatsbyImageData = 'image___gatsbyImageData',
  ImageHeight = 'image___height',
  ImageId = 'image___id',
  ImageInternalContent = 'image___internal___content',
  ImageInternalContentDigest = 'image___internal___contentDigest',
  ImageInternalDescription = 'image___internal___description',
  ImageInternalFieldOwners = 'image___internal___fieldOwners',
  ImageInternalIgnoreType = 'image___internal___ignoreType',
  ImageInternalMediaType = 'image___internal___mediaType',
  ImageInternalOwner = 'image___internal___owner',
  ImageInternalType = 'image___internal___type',
  ImageMimeType = 'image___mimeType',
  ImageNodeLocale = 'image___node_locale',
  ImageParentChildren = 'image___parent___children',
  ImageParentChildrenChildren = 'image___parent___children___children',
  ImageParentChildrenId = 'image___parent___children___id',
  ImageParentId = 'image___parent___id',
  ImageParentInternalContent = 'image___parent___internal___content',
  ImageParentInternalContentDigest = 'image___parent___internal___contentDigest',
  ImageParentInternalDescription = 'image___parent___internal___description',
  ImageParentInternalFieldOwners = 'image___parent___internal___fieldOwners',
  ImageParentInternalIgnoreType = 'image___parent___internal___ignoreType',
  ImageParentInternalMediaType = 'image___parent___internal___mediaType',
  ImageParentInternalOwner = 'image___parent___internal___owner',
  ImageParentInternalType = 'image___parent___internal___type',
  ImageParentParentChildren = 'image___parent___parent___children',
  ImageParentParentId = 'image___parent___parent___id',
  ImagePlaceholderUrl = 'image___placeholderUrl',
  ImagePublicUrl = 'image___publicUrl',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageResizeHeight = 'image___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageResizeSrc = 'image___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageResizeWidth = 'image___resize___width',
  ImageSpaceId = 'image___spaceId',
  ImageSysRevision = 'image___sys___revision',
  ImageSysType = 'image___sys___type',
  ImageTitle = 'image___title',
  ImageUpdatedAt = 'image___updatedAt',
  ImageUrl = 'image___url',
  ImageWidth = 'image___width',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  LocationLat = 'location___lat',
  LocationLon = 'location___lon',
  Name = 'name',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SpaceId = 'spaceId',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysRevision = 'sys___revision',
  SysType = 'sys___type',
  UpdatedAt = 'updatedAt'
}

export type ContentfulCatsFilterInput = {
  about?: InputMaybe<ContentfulCatsAboutTextNodeFilterInput>;
  childContentfulCatsAboutTextNode?: InputMaybe<ContentfulCatsAboutTextNodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenContentfulCatsAboutTextNode?: InputMaybe<ContentfulCatsAboutTextNodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ContentfulAssetFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  location?: InputMaybe<ContentfulCatsLocationFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulCatsSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulCatsGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulCatsEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ContentfulCatsGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulCats>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulCatsGroupConnectionDistinctArgs = {
  field: ContentfulCatsFieldsEnum;
};


export type ContentfulCatsGroupConnectionGroupArgs = {
  field: ContentfulCatsFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulCatsGroupConnectionMaxArgs = {
  field: ContentfulCatsFieldsEnum;
};


export type ContentfulCatsGroupConnectionMinArgs = {
  field: ContentfulCatsFieldsEnum;
};


export type ContentfulCatsGroupConnectionSumArgs = {
  field: ContentfulCatsFieldsEnum;
};

export type ContentfulCatsLocation = {
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
};

export type ContentfulCatsLocationFilterInput = {
  lat?: InputMaybe<FloatQueryOperatorInput>;
  lon?: InputMaybe<FloatQueryOperatorInput>;
};

export type ContentfulCatsSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulCatsFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulCatsSys = {
  contentType?: Maybe<ContentfulCatsSysContentType>;
  revision?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type ContentfulCatsSysContentType = {
  sys?: Maybe<ContentfulCatsSysContentTypeSys>;
};

export type ContentfulCatsSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulCatsSysContentTypeSysFilterInput>;
};

export type ContentfulCatsSysContentTypeSys = {
  id?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ContentfulCatsSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulCatsSysFilterInput = {
  contentType?: InputMaybe<ContentfulCatsSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulContentType = Node & {
  children: Array<Node>;
  description?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  sys?: Maybe<ContentfulContentTypeSys>;
};

export type ContentfulContentTypeConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulContentTypeEdge>;
  group: Array<ContentfulContentTypeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  field: ContentfulContentTypeFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulContentTypeConnectionMaxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionMinArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionSumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export enum ContentfulContentTypeFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Description = 'description',
  DisplayField = 'displayField',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SysType = 'sys___type'
}

export type ContentfulContentTypeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  displayField?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sys?: InputMaybe<ContentfulContentTypeSysFilterInput>;
};

export type ContentfulContentTypeGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulContentTypeEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ContentfulContentTypeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulContentTypeGroupConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeGroupConnectionGroupArgs = {
  field: ContentfulContentTypeFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulContentTypeGroupConnectionMaxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeGroupConnectionMinArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeGroupConnectionSumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulContentTypeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulContentTypeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulDogs = ContentfulEntry & ContentfulReference & Node & {
  about?: Maybe<ContentfulDogsAboutTextNode>;
  /** Returns the first child node of type contentfulDogsAboutTextNode or null if there are no children of given type on this node */
  childContentfulDogsAboutTextNode?: Maybe<ContentfulDogsAboutTextNode>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type contentfulDogsAboutTextNode */
  childrenContentfulDogsAboutTextNode?: Maybe<Array<Maybe<ContentfulDogsAboutTextNode>>>;
  contentful_id: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  image?: Maybe<ContentfulAsset>;
  internal: Internal;
  location?: Maybe<ContentfulDogsLocation>;
  name?: Maybe<Scalars['String']>;
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  spaceId?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulDogsSys>;
  updatedAt?: Maybe<Scalars['Date']>;
};


export type ContentfulDogsCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulDogsUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulDogsConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulDogsEdge>;
  group: Array<ContentfulDogsGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulDogs>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulDogsConnectionDistinctArgs = {
  field: ContentfulDogsFieldsEnum;
};


export type ContentfulDogsConnectionGroupArgs = {
  field: ContentfulDogsFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulDogsConnectionMaxArgs = {
  field: ContentfulDogsFieldsEnum;
};


export type ContentfulDogsConnectionMinArgs = {
  field: ContentfulDogsFieldsEnum;
};


export type ContentfulDogsConnectionSumArgs = {
  field: ContentfulDogsFieldsEnum;
};

export type ContentfulDogsEdge = {
  next?: Maybe<ContentfulDogs>;
  node: ContentfulDogs;
  previous?: Maybe<ContentfulDogs>;
};

export enum ContentfulDogsFieldsEnum {
  AboutAbout = 'about___about',
  AboutChildren = 'about___children',
  AboutChildrenChildren = 'about___children___children',
  AboutChildrenChildrenChildren = 'about___children___children___children',
  AboutChildrenChildrenId = 'about___children___children___id',
  AboutChildrenId = 'about___children___id',
  AboutChildrenInternalContent = 'about___children___internal___content',
  AboutChildrenInternalContentDigest = 'about___children___internal___contentDigest',
  AboutChildrenInternalDescription = 'about___children___internal___description',
  AboutChildrenInternalFieldOwners = 'about___children___internal___fieldOwners',
  AboutChildrenInternalIgnoreType = 'about___children___internal___ignoreType',
  AboutChildrenInternalMediaType = 'about___children___internal___mediaType',
  AboutChildrenInternalOwner = 'about___children___internal___owner',
  AboutChildrenInternalType = 'about___children___internal___type',
  AboutChildrenParentChildren = 'about___children___parent___children',
  AboutChildrenParentId = 'about___children___parent___id',
  AboutId = 'about___id',
  AboutInternalContent = 'about___internal___content',
  AboutInternalContentDigest = 'about___internal___contentDigest',
  AboutInternalDescription = 'about___internal___description',
  AboutInternalFieldOwners = 'about___internal___fieldOwners',
  AboutInternalIgnoreType = 'about___internal___ignoreType',
  AboutInternalMediaType = 'about___internal___mediaType',
  AboutInternalOwner = 'about___internal___owner',
  AboutInternalType = 'about___internal___type',
  AboutParentChildren = 'about___parent___children',
  AboutParentChildrenChildren = 'about___parent___children___children',
  AboutParentChildrenId = 'about___parent___children___id',
  AboutParentId = 'about___parent___id',
  AboutParentInternalContent = 'about___parent___internal___content',
  AboutParentInternalContentDigest = 'about___parent___internal___contentDigest',
  AboutParentInternalDescription = 'about___parent___internal___description',
  AboutParentInternalFieldOwners = 'about___parent___internal___fieldOwners',
  AboutParentInternalIgnoreType = 'about___parent___internal___ignoreType',
  AboutParentInternalMediaType = 'about___parent___internal___mediaType',
  AboutParentInternalOwner = 'about___parent___internal___owner',
  AboutParentInternalType = 'about___parent___internal___type',
  AboutParentParentChildren = 'about___parent___parent___children',
  AboutParentParentId = 'about___parent___parent___id',
  AboutSysType = 'about___sys___type',
  ChildContentfulDogsAboutTextNodeAbout = 'childContentfulDogsAboutTextNode___about',
  ChildContentfulDogsAboutTextNodeChildren = 'childContentfulDogsAboutTextNode___children',
  ChildContentfulDogsAboutTextNodeChildrenChildren = 'childContentfulDogsAboutTextNode___children___children',
  ChildContentfulDogsAboutTextNodeChildrenChildrenChildren = 'childContentfulDogsAboutTextNode___children___children___children',
  ChildContentfulDogsAboutTextNodeChildrenChildrenId = 'childContentfulDogsAboutTextNode___children___children___id',
  ChildContentfulDogsAboutTextNodeChildrenId = 'childContentfulDogsAboutTextNode___children___id',
  ChildContentfulDogsAboutTextNodeChildrenInternalContent = 'childContentfulDogsAboutTextNode___children___internal___content',
  ChildContentfulDogsAboutTextNodeChildrenInternalContentDigest = 'childContentfulDogsAboutTextNode___children___internal___contentDigest',
  ChildContentfulDogsAboutTextNodeChildrenInternalDescription = 'childContentfulDogsAboutTextNode___children___internal___description',
  ChildContentfulDogsAboutTextNodeChildrenInternalFieldOwners = 'childContentfulDogsAboutTextNode___children___internal___fieldOwners',
  ChildContentfulDogsAboutTextNodeChildrenInternalIgnoreType = 'childContentfulDogsAboutTextNode___children___internal___ignoreType',
  ChildContentfulDogsAboutTextNodeChildrenInternalMediaType = 'childContentfulDogsAboutTextNode___children___internal___mediaType',
  ChildContentfulDogsAboutTextNodeChildrenInternalOwner = 'childContentfulDogsAboutTextNode___children___internal___owner',
  ChildContentfulDogsAboutTextNodeChildrenInternalType = 'childContentfulDogsAboutTextNode___children___internal___type',
  ChildContentfulDogsAboutTextNodeChildrenParentChildren = 'childContentfulDogsAboutTextNode___children___parent___children',
  ChildContentfulDogsAboutTextNodeChildrenParentId = 'childContentfulDogsAboutTextNode___children___parent___id',
  ChildContentfulDogsAboutTextNodeId = 'childContentfulDogsAboutTextNode___id',
  ChildContentfulDogsAboutTextNodeInternalContent = 'childContentfulDogsAboutTextNode___internal___content',
  ChildContentfulDogsAboutTextNodeInternalContentDigest = 'childContentfulDogsAboutTextNode___internal___contentDigest',
  ChildContentfulDogsAboutTextNodeInternalDescription = 'childContentfulDogsAboutTextNode___internal___description',
  ChildContentfulDogsAboutTextNodeInternalFieldOwners = 'childContentfulDogsAboutTextNode___internal___fieldOwners',
  ChildContentfulDogsAboutTextNodeInternalIgnoreType = 'childContentfulDogsAboutTextNode___internal___ignoreType',
  ChildContentfulDogsAboutTextNodeInternalMediaType = 'childContentfulDogsAboutTextNode___internal___mediaType',
  ChildContentfulDogsAboutTextNodeInternalOwner = 'childContentfulDogsAboutTextNode___internal___owner',
  ChildContentfulDogsAboutTextNodeInternalType = 'childContentfulDogsAboutTextNode___internal___type',
  ChildContentfulDogsAboutTextNodeParentChildren = 'childContentfulDogsAboutTextNode___parent___children',
  ChildContentfulDogsAboutTextNodeParentChildrenChildren = 'childContentfulDogsAboutTextNode___parent___children___children',
  ChildContentfulDogsAboutTextNodeParentChildrenId = 'childContentfulDogsAboutTextNode___parent___children___id',
  ChildContentfulDogsAboutTextNodeParentId = 'childContentfulDogsAboutTextNode___parent___id',
  ChildContentfulDogsAboutTextNodeParentInternalContent = 'childContentfulDogsAboutTextNode___parent___internal___content',
  ChildContentfulDogsAboutTextNodeParentInternalContentDigest = 'childContentfulDogsAboutTextNode___parent___internal___contentDigest',
  ChildContentfulDogsAboutTextNodeParentInternalDescription = 'childContentfulDogsAboutTextNode___parent___internal___description',
  ChildContentfulDogsAboutTextNodeParentInternalFieldOwners = 'childContentfulDogsAboutTextNode___parent___internal___fieldOwners',
  ChildContentfulDogsAboutTextNodeParentInternalIgnoreType = 'childContentfulDogsAboutTextNode___parent___internal___ignoreType',
  ChildContentfulDogsAboutTextNodeParentInternalMediaType = 'childContentfulDogsAboutTextNode___parent___internal___mediaType',
  ChildContentfulDogsAboutTextNodeParentInternalOwner = 'childContentfulDogsAboutTextNode___parent___internal___owner',
  ChildContentfulDogsAboutTextNodeParentInternalType = 'childContentfulDogsAboutTextNode___parent___internal___type',
  ChildContentfulDogsAboutTextNodeParentParentChildren = 'childContentfulDogsAboutTextNode___parent___parent___children',
  ChildContentfulDogsAboutTextNodeParentParentId = 'childContentfulDogsAboutTextNode___parent___parent___id',
  ChildContentfulDogsAboutTextNodeSysType = 'childContentfulDogsAboutTextNode___sys___type',
  Children = 'children',
  ChildrenContentfulDogsAboutTextNode = 'childrenContentfulDogsAboutTextNode',
  ChildrenContentfulDogsAboutTextNodeAbout = 'childrenContentfulDogsAboutTextNode___about',
  ChildrenContentfulDogsAboutTextNodeChildren = 'childrenContentfulDogsAboutTextNode___children',
  ChildrenContentfulDogsAboutTextNodeChildrenChildren = 'childrenContentfulDogsAboutTextNode___children___children',
  ChildrenContentfulDogsAboutTextNodeChildrenChildrenChildren = 'childrenContentfulDogsAboutTextNode___children___children___children',
  ChildrenContentfulDogsAboutTextNodeChildrenChildrenId = 'childrenContentfulDogsAboutTextNode___children___children___id',
  ChildrenContentfulDogsAboutTextNodeChildrenId = 'childrenContentfulDogsAboutTextNode___children___id',
  ChildrenContentfulDogsAboutTextNodeChildrenInternalContent = 'childrenContentfulDogsAboutTextNode___children___internal___content',
  ChildrenContentfulDogsAboutTextNodeChildrenInternalContentDigest = 'childrenContentfulDogsAboutTextNode___children___internal___contentDigest',
  ChildrenContentfulDogsAboutTextNodeChildrenInternalDescription = 'childrenContentfulDogsAboutTextNode___children___internal___description',
  ChildrenContentfulDogsAboutTextNodeChildrenInternalFieldOwners = 'childrenContentfulDogsAboutTextNode___children___internal___fieldOwners',
  ChildrenContentfulDogsAboutTextNodeChildrenInternalIgnoreType = 'childrenContentfulDogsAboutTextNode___children___internal___ignoreType',
  ChildrenContentfulDogsAboutTextNodeChildrenInternalMediaType = 'childrenContentfulDogsAboutTextNode___children___internal___mediaType',
  ChildrenContentfulDogsAboutTextNodeChildrenInternalOwner = 'childrenContentfulDogsAboutTextNode___children___internal___owner',
  ChildrenContentfulDogsAboutTextNodeChildrenInternalType = 'childrenContentfulDogsAboutTextNode___children___internal___type',
  ChildrenContentfulDogsAboutTextNodeChildrenParentChildren = 'childrenContentfulDogsAboutTextNode___children___parent___children',
  ChildrenContentfulDogsAboutTextNodeChildrenParentId = 'childrenContentfulDogsAboutTextNode___children___parent___id',
  ChildrenContentfulDogsAboutTextNodeId = 'childrenContentfulDogsAboutTextNode___id',
  ChildrenContentfulDogsAboutTextNodeInternalContent = 'childrenContentfulDogsAboutTextNode___internal___content',
  ChildrenContentfulDogsAboutTextNodeInternalContentDigest = 'childrenContentfulDogsAboutTextNode___internal___contentDigest',
  ChildrenContentfulDogsAboutTextNodeInternalDescription = 'childrenContentfulDogsAboutTextNode___internal___description',
  ChildrenContentfulDogsAboutTextNodeInternalFieldOwners = 'childrenContentfulDogsAboutTextNode___internal___fieldOwners',
  ChildrenContentfulDogsAboutTextNodeInternalIgnoreType = 'childrenContentfulDogsAboutTextNode___internal___ignoreType',
  ChildrenContentfulDogsAboutTextNodeInternalMediaType = 'childrenContentfulDogsAboutTextNode___internal___mediaType',
  ChildrenContentfulDogsAboutTextNodeInternalOwner = 'childrenContentfulDogsAboutTextNode___internal___owner',
  ChildrenContentfulDogsAboutTextNodeInternalType = 'childrenContentfulDogsAboutTextNode___internal___type',
  ChildrenContentfulDogsAboutTextNodeParentChildren = 'childrenContentfulDogsAboutTextNode___parent___children',
  ChildrenContentfulDogsAboutTextNodeParentChildrenChildren = 'childrenContentfulDogsAboutTextNode___parent___children___children',
  ChildrenContentfulDogsAboutTextNodeParentChildrenId = 'childrenContentfulDogsAboutTextNode___parent___children___id',
  ChildrenContentfulDogsAboutTextNodeParentId = 'childrenContentfulDogsAboutTextNode___parent___id',
  ChildrenContentfulDogsAboutTextNodeParentInternalContent = 'childrenContentfulDogsAboutTextNode___parent___internal___content',
  ChildrenContentfulDogsAboutTextNodeParentInternalContentDigest = 'childrenContentfulDogsAboutTextNode___parent___internal___contentDigest',
  ChildrenContentfulDogsAboutTextNodeParentInternalDescription = 'childrenContentfulDogsAboutTextNode___parent___internal___description',
  ChildrenContentfulDogsAboutTextNodeParentInternalFieldOwners = 'childrenContentfulDogsAboutTextNode___parent___internal___fieldOwners',
  ChildrenContentfulDogsAboutTextNodeParentInternalIgnoreType = 'childrenContentfulDogsAboutTextNode___parent___internal___ignoreType',
  ChildrenContentfulDogsAboutTextNodeParentInternalMediaType = 'childrenContentfulDogsAboutTextNode___parent___internal___mediaType',
  ChildrenContentfulDogsAboutTextNodeParentInternalOwner = 'childrenContentfulDogsAboutTextNode___parent___internal___owner',
  ChildrenContentfulDogsAboutTextNodeParentInternalType = 'childrenContentfulDogsAboutTextNode___parent___internal___type',
  ChildrenContentfulDogsAboutTextNodeParentParentChildren = 'childrenContentfulDogsAboutTextNode___parent___parent___children',
  ChildrenContentfulDogsAboutTextNodeParentParentId = 'childrenContentfulDogsAboutTextNode___parent___parent___id',
  ChildrenContentfulDogsAboutTextNodeSysType = 'childrenContentfulDogsAboutTextNode___sys___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  Id = 'id',
  ImageChildren = 'image___children',
  ImageChildrenChildren = 'image___children___children',
  ImageChildrenChildrenChildren = 'image___children___children___children',
  ImageChildrenChildrenId = 'image___children___children___id',
  ImageChildrenId = 'image___children___id',
  ImageChildrenInternalContent = 'image___children___internal___content',
  ImageChildrenInternalContentDigest = 'image___children___internal___contentDigest',
  ImageChildrenInternalDescription = 'image___children___internal___description',
  ImageChildrenInternalFieldOwners = 'image___children___internal___fieldOwners',
  ImageChildrenInternalIgnoreType = 'image___children___internal___ignoreType',
  ImageChildrenInternalMediaType = 'image___children___internal___mediaType',
  ImageChildrenInternalOwner = 'image___children___internal___owner',
  ImageChildrenInternalType = 'image___children___internal___type',
  ImageChildrenParentChildren = 'image___children___parent___children',
  ImageChildrenParentId = 'image___children___parent___id',
  ImageContentfulId = 'image___contentful_id',
  ImageCreatedAt = 'image___createdAt',
  ImageDescription = 'image___description',
  ImageFileContentType = 'image___file___contentType',
  ImageFileDetailsSize = 'image___file___details___size',
  ImageFileFileName = 'image___file___fileName',
  ImageFileUrl = 'image___file___url',
  ImageFilename = 'image___filename',
  ImageFilesize = 'image___filesize',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageGatsbyImage = 'image___gatsbyImage',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageGatsbyImageData = 'image___gatsbyImageData',
  ImageHeight = 'image___height',
  ImageId = 'image___id',
  ImageInternalContent = 'image___internal___content',
  ImageInternalContentDigest = 'image___internal___contentDigest',
  ImageInternalDescription = 'image___internal___description',
  ImageInternalFieldOwners = 'image___internal___fieldOwners',
  ImageInternalIgnoreType = 'image___internal___ignoreType',
  ImageInternalMediaType = 'image___internal___mediaType',
  ImageInternalOwner = 'image___internal___owner',
  ImageInternalType = 'image___internal___type',
  ImageMimeType = 'image___mimeType',
  ImageNodeLocale = 'image___node_locale',
  ImageParentChildren = 'image___parent___children',
  ImageParentChildrenChildren = 'image___parent___children___children',
  ImageParentChildrenId = 'image___parent___children___id',
  ImageParentId = 'image___parent___id',
  ImageParentInternalContent = 'image___parent___internal___content',
  ImageParentInternalContentDigest = 'image___parent___internal___contentDigest',
  ImageParentInternalDescription = 'image___parent___internal___description',
  ImageParentInternalFieldOwners = 'image___parent___internal___fieldOwners',
  ImageParentInternalIgnoreType = 'image___parent___internal___ignoreType',
  ImageParentInternalMediaType = 'image___parent___internal___mediaType',
  ImageParentInternalOwner = 'image___parent___internal___owner',
  ImageParentInternalType = 'image___parent___internal___type',
  ImageParentParentChildren = 'image___parent___parent___children',
  ImageParentParentId = 'image___parent___parent___id',
  ImagePlaceholderUrl = 'image___placeholderUrl',
  ImagePublicUrl = 'image___publicUrl',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageResizeHeight = 'image___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageResizeSrc = 'image___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ImageResizeWidth = 'image___resize___width',
  ImageSpaceId = 'image___spaceId',
  ImageSysRevision = 'image___sys___revision',
  ImageSysType = 'image___sys___type',
  ImageTitle = 'image___title',
  ImageUpdatedAt = 'image___updatedAt',
  ImageUrl = 'image___url',
  ImageWidth = 'image___width',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  LocationLat = 'location___lat',
  LocationLon = 'location___lon',
  Name = 'name',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SpaceId = 'spaceId',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysRevision = 'sys___revision',
  SysType = 'sys___type',
  UpdatedAt = 'updatedAt'
}

export type ContentfulDogsFilterInput = {
  about?: InputMaybe<ContentfulDogsAboutTextNodeFilterInput>;
  childContentfulDogsAboutTextNode?: InputMaybe<ContentfulDogsAboutTextNodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenContentfulDogsAboutTextNode?: InputMaybe<ContentfulDogsAboutTextNodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ContentfulAssetFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  location?: InputMaybe<ContentfulDogsLocationFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulDogsSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulDogsGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulDogsEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ContentfulDogsGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulDogs>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulDogsGroupConnectionDistinctArgs = {
  field: ContentfulDogsFieldsEnum;
};


export type ContentfulDogsGroupConnectionGroupArgs = {
  field: ContentfulDogsFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulDogsGroupConnectionMaxArgs = {
  field: ContentfulDogsFieldsEnum;
};


export type ContentfulDogsGroupConnectionMinArgs = {
  field: ContentfulDogsFieldsEnum;
};


export type ContentfulDogsGroupConnectionSumArgs = {
  field: ContentfulDogsFieldsEnum;
};

export type ContentfulDogsLocation = {
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
};

export type ContentfulDogsLocationFilterInput = {
  lat?: InputMaybe<FloatQueryOperatorInput>;
  lon?: InputMaybe<FloatQueryOperatorInput>;
};

export type ContentfulDogsSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulDogsFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulDogsSys = {
  contentType?: Maybe<ContentfulDogsSysContentType>;
  revision?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type ContentfulDogsSysContentType = {
  sys?: Maybe<ContentfulDogsSysContentTypeSys>;
};

export type ContentfulDogsSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulDogsSysContentTypeSysFilterInput>;
};

export type ContentfulDogsSysContentTypeSys = {
  id?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ContentfulDogsSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulDogsSysFilterInput = {
  contentType?: InputMaybe<ContentfulDogsSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulEntry = {
  children: Array<Node>;
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
};

export type ContentfulEntryConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulEntryEdge>;
  group: Array<ContentfulEntryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulEntryConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionGroupArgs = {
  field: ContentfulEntryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulEntryConnectionMaxArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionMinArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionSumArgs = {
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryEdge = {
  next?: Maybe<ContentfulEntry>;
  node: ContentfulEntry;
  previous?: Maybe<ContentfulEntry>;
};

export enum ContentfulEntryFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id'
}

export type ContentfulEntryFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type ContentfulEntryGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulEntryEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ContentfulEntryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulEntryGroupConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryGroupConnectionGroupArgs = {
  field: ContentfulEntryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulEntryGroupConnectionMaxArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryGroupConnectionMinArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryGroupConnectionSumArgs = {
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntrySortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulEntryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum ContentfulImageCropFocus {
  Bottom = 'BOTTOM',
  BottomLeft = 'BOTTOM_LEFT',
  BottomRight = 'BOTTOM_RIGHT',
  Center = 'CENTER',
  Face = 'FACE',
  Faces = 'FACES',
  Left = 'LEFT',
  Right = 'RIGHT',
  Top = 'TOP',
  TopLeft = 'TOP_LEFT',
  TopRight = 'TOP_RIGHT'
}

export type ContentfulReference = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  changeTime: Scalars['Date'];
  children: Array<Node>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type DirectoryAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  ChangeTime = 'changeTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid'
}

export type DirectoryFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
  shadow: Scalars['String'];
};

export type File = Node & {
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  changeTime: Scalars['Date'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type FileAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  ChangeTime = 'changeTime',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  Children = 'children',
  ChildrenImageSharp = 'childrenImageSharp',
  ChildrenImageSharpChildren = 'childrenImageSharp___children',
  ChildrenImageSharpChildrenChildren = 'childrenImageSharp___children___children',
  ChildrenImageSharpChildrenChildrenChildren = 'childrenImageSharp___children___children___children',
  ChildrenImageSharpChildrenChildrenId = 'childrenImageSharp___children___children___id',
  ChildrenImageSharpChildrenId = 'childrenImageSharp___children___id',
  ChildrenImageSharpChildrenInternalContent = 'childrenImageSharp___children___internal___content',
  ChildrenImageSharpChildrenInternalContentDigest = 'childrenImageSharp___children___internal___contentDigest',
  ChildrenImageSharpChildrenInternalDescription = 'childrenImageSharp___children___internal___description',
  ChildrenImageSharpChildrenInternalFieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  ChildrenImageSharpChildrenInternalIgnoreType = 'childrenImageSharp___children___internal___ignoreType',
  ChildrenImageSharpChildrenInternalMediaType = 'childrenImageSharp___children___internal___mediaType',
  ChildrenImageSharpChildrenInternalOwner = 'childrenImageSharp___children___internal___owner',
  ChildrenImageSharpChildrenInternalType = 'childrenImageSharp___children___internal___type',
  ChildrenImageSharpChildrenParentChildren = 'childrenImageSharp___children___parent___children',
  ChildrenImageSharpChildrenParentId = 'childrenImageSharp___children___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedAspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedBase64 = 'childrenImageSharp___fixed___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedHeight = 'childrenImageSharp___fixed___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedOriginalName = 'childrenImageSharp___fixed___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedSrc = 'childrenImageSharp___fixed___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedSrcSet = 'childrenImageSharp___fixed___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedSrcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedSrcWebp = 'childrenImageSharp___fixed___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedTracedSvg = 'childrenImageSharp___fixed___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFixedWidth = 'childrenImageSharp___fixed___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidAspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidBase64 = 'childrenImageSharp___fluid___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidOriginalImg = 'childrenImageSharp___fluid___originalImg',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidOriginalName = 'childrenImageSharp___fluid___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidPresentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidPresentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidSizes = 'childrenImageSharp___fluid___sizes',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidSrc = 'childrenImageSharp___fluid___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidSrcSet = 'childrenImageSharp___fluid___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidSrcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidSrcWebp = 'childrenImageSharp___fluid___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpFluidTracedSvg = 'childrenImageSharp___fluid___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpGatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  ChildrenImageSharpId = 'childrenImageSharp___id',
  ChildrenImageSharpInternalContent = 'childrenImageSharp___internal___content',
  ChildrenImageSharpInternalContentDigest = 'childrenImageSharp___internal___contentDigest',
  ChildrenImageSharpInternalDescription = 'childrenImageSharp___internal___description',
  ChildrenImageSharpInternalFieldOwners = 'childrenImageSharp___internal___fieldOwners',
  ChildrenImageSharpInternalIgnoreType = 'childrenImageSharp___internal___ignoreType',
  ChildrenImageSharpInternalMediaType = 'childrenImageSharp___internal___mediaType',
  ChildrenImageSharpInternalOwner = 'childrenImageSharp___internal___owner',
  ChildrenImageSharpInternalType = 'childrenImageSharp___internal___type',
  ChildrenImageSharpOriginalHeight = 'childrenImageSharp___original___height',
  ChildrenImageSharpOriginalSrc = 'childrenImageSharp___original___src',
  ChildrenImageSharpOriginalWidth = 'childrenImageSharp___original___width',
  ChildrenImageSharpParentChildren = 'childrenImageSharp___parent___children',
  ChildrenImageSharpParentChildrenChildren = 'childrenImageSharp___parent___children___children',
  ChildrenImageSharpParentChildrenId = 'childrenImageSharp___parent___children___id',
  ChildrenImageSharpParentId = 'childrenImageSharp___parent___id',
  ChildrenImageSharpParentInternalContent = 'childrenImageSharp___parent___internal___content',
  ChildrenImageSharpParentInternalContentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  ChildrenImageSharpParentInternalDescription = 'childrenImageSharp___parent___internal___description',
  ChildrenImageSharpParentInternalFieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  ChildrenImageSharpParentInternalIgnoreType = 'childrenImageSharp___parent___internal___ignoreType',
  ChildrenImageSharpParentInternalMediaType = 'childrenImageSharp___parent___internal___mediaType',
  ChildrenImageSharpParentInternalOwner = 'childrenImageSharp___parent___internal___owner',
  ChildrenImageSharpParentInternalType = 'childrenImageSharp___parent___internal___type',
  ChildrenImageSharpParentParentChildren = 'childrenImageSharp___parent___parent___children',
  ChildrenImageSharpParentParentId = 'childrenImageSharp___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpResizeAspectRatio = 'childrenImageSharp___resize___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpResizeHeight = 'childrenImageSharp___resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpResizeOriginalName = 'childrenImageSharp___resize___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpResizeSrc = 'childrenImageSharp___resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpResizeTracedSvg = 'childrenImageSharp___resize___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ChildrenImageSharpResizeWidth = 'childrenImageSharp___resize___width',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  PublicUrl = 'publicURL',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid'
}

export type FileFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export enum GatsbyImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum GatsbyImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum GatsbyImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export enum ImageCropFocus {
  Attention = 'ATTENTION',
  Center = 'CENTER',
  East = 'EAST',
  Entropy = 'ENTROPY',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  Northwest = 'NORTHWEST',
  South = 'SOUTH',
  Southeast = 'SOUTHEAST',
  Southwest = 'SOUTHWEST',
  West = 'WEST'
}

export enum ImageFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum ImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum ImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum ImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export enum ImageResizingBehavior {
  /** Crop a part of the original image to match the specified size. */
  Crop = 'CROP',
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  Fill = 'FILL',
  NoChange = 'NO_CHANGE',
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  Pad = 'PAD',
  /** Scale the image regardless of the original aspect ratio. */
  Scale = 'SCALE',
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  Thumb = 'THUMB'
}

export type ImageSharp = Node & {
  children: Array<Node>;
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  id: Scalars['ID'];
  internal: Internal;
  original?: Maybe<ImageSharpOriginal>;
  parent?: Maybe<Node>;
  resize?: Maybe<ImageSharpResize>;
};


export type ImageSharpFixedArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpFluidArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  avifOptions?: InputMaybe<AvifOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  height?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  pngOptions?: InputMaybe<PngOptions>;
  quality?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  transformOptions?: InputMaybe<TransformOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  width?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpResizeArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64?: InputMaybe<Scalars['Boolean']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedAspectRatio = 'fixed___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedBase64 = 'fixed___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedHeight = 'fixed___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedOriginalName = 'fixed___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedSrc = 'fixed___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedSrcSet = 'fixed___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedSrcWebp = 'fixed___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedTracedSvg = 'fixed___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FixedWidth = 'fixed___width',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidAspectRatio = 'fluid___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidBase64 = 'fluid___base64',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidOriginalImg = 'fluid___originalImg',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidOriginalName = 'fluid___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidPresentationHeight = 'fluid___presentationHeight',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidPresentationWidth = 'fluid___presentationWidth',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidSizes = 'fluid___sizes',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidSrc = 'fluid___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidSrcSet = 'fluid___srcSet',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidSrcWebp = 'fluid___srcWebp',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  FluidTracedSvg = 'fluid___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  GatsbyImageData = 'gatsbyImageData',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  OriginalWidth = 'original___width',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeAspectRatio = 'resize___aspectRatio',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeHeight = 'resize___height',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeOriginalName = 'resize___originalName',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeSrc = 'resize___src',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeTracedSvg = 'resize___tracedSVG',
  /** @deprecated Sorting on fields that need arguments to resolve is deprecated. */
  ResizeWidth = 'resize___width'
}

export type ImageSharpFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  aspectRatio?: Maybe<Scalars['Float']>;
  base64?: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  originalName?: Maybe<Scalars['String']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width: Scalars['Float'];
};

export type ImageSharpFixedFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpFluid = {
  aspectRatio: Scalars['Float'];
  base64?: Maybe<Scalars['String']>;
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationHeight: Scalars['Int'];
  presentationWidth: Scalars['Int'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
};

export type ImageSharpFluidFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpOriginal = {
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type ImageSharpOriginalFilterInput = {
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpResize = {
  aspectRatio?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Int']>;
  originalName?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type ImageSharpResizeFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  progressive?: InputMaybe<Scalars['Boolean']>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  ne?: InputMaybe<Scalars['JSON']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type NodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type PngOptions = {
  compressionSpeed?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  alphaMax?: InputMaybe<Scalars['Float']>;
  background?: InputMaybe<Scalars['String']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  turdSize?: InputMaybe<Scalars['Float']>;
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyWhite = 'TURNPOLICY_WHITE'
}

export type Query = {
  allContentfulAsset: ContentfulAssetConnection;
  allContentfulCats: ContentfulCatsConnection;
  allContentfulCatsAboutTextNode: ContentfulCatsAboutTextNodeConnection;
  allContentfulContentType: ContentfulContentTypeConnection;
  allContentfulDogs: ContentfulDogsConnection;
  allContentfulDogsAboutTextNode: ContentfulDogsAboutTextNodeConnection;
  allContentfulEntry: ContentfulEntryConnection;
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allImageSharp: ImageSharpConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  contentfulCats?: Maybe<ContentfulCats>;
  contentfulCatsAboutTextNode?: Maybe<ContentfulCatsAboutTextNode>;
  contentfulContentType?: Maybe<ContentfulContentType>;
  contentfulDogs?: Maybe<ContentfulDogs>;
  contentfulDogsAboutTextNode?: Maybe<ContentfulDogsAboutTextNode>;
  contentfulEntry?: Maybe<ContentfulEntry>;
  directory?: Maybe<Directory>;
  file?: Maybe<File>;
  imageSharp?: Maybe<ImageSharp>;
  site?: Maybe<Site>;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  siteFunction?: Maybe<SiteFunction>;
  sitePage?: Maybe<SitePage>;
  sitePlugin?: Maybe<SitePlugin>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: InputMaybe<ContentfulAssetFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ContentfulAssetSortInput>;
};


export type QueryAllContentfulCatsArgs = {
  filter?: InputMaybe<ContentfulCatsFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ContentfulCatsSortInput>;
};


export type QueryAllContentfulCatsAboutTextNodeArgs = {
  filter?: InputMaybe<ContentfulCatsAboutTextNodeFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ContentfulCatsAboutTextNodeSortInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: InputMaybe<ContentfulContentTypeFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ContentfulContentTypeSortInput>;
};


export type QueryAllContentfulDogsArgs = {
  filter?: InputMaybe<ContentfulDogsFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ContentfulDogsSortInput>;
};


export type QueryAllContentfulDogsAboutTextNodeArgs = {
  filter?: InputMaybe<ContentfulDogsAboutTextNodeFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ContentfulDogsAboutTextNodeSortInput>;
};


export type QueryAllContentfulEntryArgs = {
  filter?: InputMaybe<ContentfulEntryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ContentfulEntrySortInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<DirectorySortInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<FileSortInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ImageSharpSortInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteSortInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteFunctionSortInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SitePageSortInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SitePluginSortInput>;
};


export type QueryContentfulAssetArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  file?: InputMaybe<ContentfulAssetFileFilterInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  filesize?: InputMaybe<IntQueryOperatorInput>;
  gatsbyImage?: InputMaybe<JsonQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  placeholderUrl?: InputMaybe<StringQueryOperatorInput>;
  publicUrl?: InputMaybe<StringQueryOperatorInput>;
  resize?: InputMaybe<RemoteFileResizeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAssetSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryContentfulCatsArgs = {
  about?: InputMaybe<ContentfulCatsAboutTextNodeFilterInput>;
  childContentfulCatsAboutTextNode?: InputMaybe<ContentfulCatsAboutTextNodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenContentfulCatsAboutTextNode?: InputMaybe<ContentfulCatsAboutTextNodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ContentfulAssetFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  location?: InputMaybe<ContentfulCatsLocationFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulCatsSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulCatsAboutTextNodeArgs = {
  about?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sys?: InputMaybe<ContentfulCatsAboutTextNodeSysFilterInput>;
};


export type QueryContentfulContentTypeArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  displayField?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sys?: InputMaybe<ContentfulContentTypeSysFilterInput>;
};


export type QueryContentfulDogsArgs = {
  about?: InputMaybe<ContentfulDogsAboutTextNodeFilterInput>;
  childContentfulDogsAboutTextNode?: InputMaybe<ContentfulDogsAboutTextNodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenContentfulDogsAboutTextNode?: InputMaybe<ContentfulDogsAboutTextNodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ContentfulAssetFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  location?: InputMaybe<ContentfulDogsLocationFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulDogsSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulDogsAboutTextNodeArgs = {
  about?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sys?: InputMaybe<ContentfulDogsAboutTextNodeSysFilterInput>;
};


export type QueryContentfulEntryArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QueryDirectoryArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryFileArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryImageSharpArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySitePageArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};


export type QuerySitePluginArgs = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

/** Remote Interface */
export type RemoteFile = {
  filename: Scalars['String'];
  filesize?: Maybe<Scalars['Int']>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  gatsbyImage?: Maybe<Scalars['JSON']>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  mimeType: Scalars['String'];
  publicUrl: Scalars['String'];
  resize?: Maybe<RemoteFileResize>;
  width?: Maybe<Scalars['Int']>;
};


/** Remote Interface */
export type RemoteFileGatsbyImageArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  formats?: InputMaybe<Array<RemoteFileFormat>>;
  height?: InputMaybe<Scalars['Int']>;
  layout?: InputMaybe<RemoteFileLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  quality?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};


/** Remote Interface */
export type RemoteFileResizeArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export enum RemoteFileCropFocus {
  Bottom = 'BOTTOM',
  Center = 'CENTER',
  Edges = 'EDGES',
  Entropy = 'ENTROPY',
  Faces = 'FACES',
  Left = 'LEFT',
  Right = 'RIGHT',
  Top = 'TOP'
}

export enum RemoteFileFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Outside = 'OUTSIDE'
}

export enum RemoteFileFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum RemoteFileLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum RemoteFilePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE'
}

export type RemoteFileResize = {
  height?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type RemoteFileResizeFilterInput = {
  height?: InputMaybe<IntQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  jsxRuntime?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  pathPrefix?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  trailingSlash?: Maybe<Scalars['String']>;
};


export type SiteBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id'
}

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  JsxRuntime = 'jsxRuntime',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PathPrefix = 'pathPrefix',
  Polyfill = 'polyfill',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataSiteTitle = 'siteMetadata___siteTitle',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataTitle = 'siteMetadata___title',
  TrailingSlash = 'trailingSlash'
}

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunction = Node & {
  absoluteCompiledFilePath: Scalars['String'];
  children: Array<Node>;
  functionRoute: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  matchPath?: Maybe<Scalars['String']>;
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  parent?: Maybe<Node>;
  pluginName: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
};

export type SiteFunctionConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  AbsoluteCompiledFilePath = 'absoluteCompiledFilePath',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FunctionRoute = 'functionRoute',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MatchPath = 'matchPath',
  OriginalAbsoluteFilePath = 'originalAbsoluteFilePath',
  OriginalRelativeFilePath = 'originalRelativeFilePath',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PluginName = 'pluginName',
  RelativeCompiledFilePath = 'relativeCompiledFilePath'
}

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SitePage = Node & {
  children: Array<Node>;
  component: Scalars['String'];
  componentChunkName: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  internalComponentName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  path: Scalars['String'];
  pluginCreator?: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  Id = 'id',
  InternalComponentName = 'internalComponentName',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MatchPath = 'matchPath',
  PageContext = 'pageContext',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Path = 'path',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorPackageJson = 'pluginCreator___packageJson',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPluginOptions = 'pluginCreator___pluginOptions',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorVersion = 'pluginCreator___version'
}

export type SitePageFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  packageJson?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  resolve?: Maybe<Scalars['String']>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  BrowserApIs = 'browserAPIs',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  NodeApIs = 'nodeAPIs',
  PackageJson = 'packageJson',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PluginFilepath = 'pluginFilepath',
  PluginOptions = 'pluginOptions',
  Resolve = 'resolve',
  SsrApIs = 'ssrAPIs',
  Version = 'version'
}

export type SitePluginFilterInput = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  description?: Maybe<Scalars['String']>;
  siteTitle?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  description?: InputMaybe<StringQueryOperatorInput>;
  siteTitle?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
};

export type TransformOptions = {
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type ContentfulCatsAboutTextNode = Node & {
  about?: Maybe<Scalars['String']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
  sys?: Maybe<ContentfulCatsAboutTextNodeSys>;
};

export type ContentfulCatsAboutTextNodeConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulCatsAboutTextNodeEdge>;
  group: Array<ContentfulCatsAboutTextNodeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulCatsAboutTextNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulCatsAboutTextNodeConnectionDistinctArgs = {
  field: ContentfulCatsAboutTextNodeFieldsEnum;
};


export type ContentfulCatsAboutTextNodeConnectionGroupArgs = {
  field: ContentfulCatsAboutTextNodeFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulCatsAboutTextNodeConnectionMaxArgs = {
  field: ContentfulCatsAboutTextNodeFieldsEnum;
};


export type ContentfulCatsAboutTextNodeConnectionMinArgs = {
  field: ContentfulCatsAboutTextNodeFieldsEnum;
};


export type ContentfulCatsAboutTextNodeConnectionSumArgs = {
  field: ContentfulCatsAboutTextNodeFieldsEnum;
};

export type ContentfulCatsAboutTextNodeEdge = {
  next?: Maybe<ContentfulCatsAboutTextNode>;
  node: ContentfulCatsAboutTextNode;
  previous?: Maybe<ContentfulCatsAboutTextNode>;
};

export enum ContentfulCatsAboutTextNodeFieldsEnum {
  About = 'about',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SysType = 'sys___type'
}

export type ContentfulCatsAboutTextNodeFilterInput = {
  about?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sys?: InputMaybe<ContentfulCatsAboutTextNodeSysFilterInput>;
};

export type ContentfulCatsAboutTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulCatsAboutTextNodeFilterInput>;
};

export type ContentfulCatsAboutTextNodeGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulCatsAboutTextNodeEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ContentfulCatsAboutTextNodeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulCatsAboutTextNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulCatsAboutTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulCatsAboutTextNodeFieldsEnum;
};


export type ContentfulCatsAboutTextNodeGroupConnectionGroupArgs = {
  field: ContentfulCatsAboutTextNodeFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulCatsAboutTextNodeGroupConnectionMaxArgs = {
  field: ContentfulCatsAboutTextNodeFieldsEnum;
};


export type ContentfulCatsAboutTextNodeGroupConnectionMinArgs = {
  field: ContentfulCatsAboutTextNodeFieldsEnum;
};


export type ContentfulCatsAboutTextNodeGroupConnectionSumArgs = {
  field: ContentfulCatsAboutTextNodeFieldsEnum;
};

export type ContentfulCatsAboutTextNodeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulCatsAboutTextNodeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulCatsAboutTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulCatsAboutTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulDogsAboutTextNode = Node & {
  about?: Maybe<Scalars['String']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
  sys?: Maybe<ContentfulDogsAboutTextNodeSys>;
};

export type ContentfulDogsAboutTextNodeConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulDogsAboutTextNodeEdge>;
  group: Array<ContentfulDogsAboutTextNodeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulDogsAboutTextNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulDogsAboutTextNodeConnectionDistinctArgs = {
  field: ContentfulDogsAboutTextNodeFieldsEnum;
};


export type ContentfulDogsAboutTextNodeConnectionGroupArgs = {
  field: ContentfulDogsAboutTextNodeFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulDogsAboutTextNodeConnectionMaxArgs = {
  field: ContentfulDogsAboutTextNodeFieldsEnum;
};


export type ContentfulDogsAboutTextNodeConnectionMinArgs = {
  field: ContentfulDogsAboutTextNodeFieldsEnum;
};


export type ContentfulDogsAboutTextNodeConnectionSumArgs = {
  field: ContentfulDogsAboutTextNodeFieldsEnum;
};

export type ContentfulDogsAboutTextNodeEdge = {
  next?: Maybe<ContentfulDogsAboutTextNode>;
  node: ContentfulDogsAboutTextNode;
  previous?: Maybe<ContentfulDogsAboutTextNode>;
};

export enum ContentfulDogsAboutTextNodeFieldsEnum {
  About = 'about',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SysType = 'sys___type'
}

export type ContentfulDogsAboutTextNodeFilterInput = {
  about?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sys?: InputMaybe<ContentfulDogsAboutTextNodeSysFilterInput>;
};

export type ContentfulDogsAboutTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulDogsAboutTextNodeFilterInput>;
};

export type ContentfulDogsAboutTextNodeGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulDogsAboutTextNodeEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ContentfulDogsAboutTextNodeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulDogsAboutTextNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulDogsAboutTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulDogsAboutTextNodeFieldsEnum;
};


export type ContentfulDogsAboutTextNodeGroupConnectionGroupArgs = {
  field: ContentfulDogsAboutTextNodeFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulDogsAboutTextNodeGroupConnectionMaxArgs = {
  field: ContentfulDogsAboutTextNodeFieldsEnum;
};


export type ContentfulDogsAboutTextNodeGroupConnectionMinArgs = {
  field: ContentfulDogsAboutTextNodeFieldsEnum;
};


export type ContentfulDogsAboutTextNodeGroupConnectionSumArgs = {
  field: ContentfulDogsAboutTextNodeFieldsEnum;
};

export type ContentfulDogsAboutTextNodeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulDogsAboutTextNodeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulDogsAboutTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulDogsAboutTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AVIFOptions: AvifOptions;
  BlurredOptions: BlurredOptions;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BooleanQueryOperatorInput: BooleanQueryOperatorInput;
  ContentfulAsset: ResolverTypeWrapper<ContentfulAsset>;
  ContentfulAssetConnection: ResolverTypeWrapper<ContentfulAssetConnection>;
  ContentfulAssetEdge: ResolverTypeWrapper<ContentfulAssetEdge>;
  ContentfulAssetFieldsEnum: ContentfulAssetFieldsEnum;
  ContentfulAssetFile: ResolverTypeWrapper<ContentfulAssetFile>;
  ContentfulAssetFileDetails: ResolverTypeWrapper<ContentfulAssetFileDetails>;
  ContentfulAssetFileDetailsFilterInput: ContentfulAssetFileDetailsFilterInput;
  ContentfulAssetFileDetailsImage: ResolverTypeWrapper<ContentfulAssetFileDetailsImage>;
  ContentfulAssetFileDetailsImageFilterInput: ContentfulAssetFileDetailsImageFilterInput;
  ContentfulAssetFileFilterInput: ContentfulAssetFileFilterInput;
  ContentfulAssetFilterInput: ContentfulAssetFilterInput;
  ContentfulAssetGroupConnection: ResolverTypeWrapper<ContentfulAssetGroupConnection>;
  ContentfulAssetSortInput: ContentfulAssetSortInput;
  ContentfulAssetSys: ResolverTypeWrapper<ContentfulAssetSys>;
  ContentfulAssetSysFilterInput: ContentfulAssetSysFilterInput;
  ContentfulCats: ResolverTypeWrapper<ContentfulCats>;
  ContentfulCatsConnection: ResolverTypeWrapper<ContentfulCatsConnection>;
  ContentfulCatsEdge: ResolverTypeWrapper<ContentfulCatsEdge>;
  ContentfulCatsFieldsEnum: ContentfulCatsFieldsEnum;
  ContentfulCatsFilterInput: ContentfulCatsFilterInput;
  ContentfulCatsGroupConnection: ResolverTypeWrapper<ContentfulCatsGroupConnection>;
  ContentfulCatsLocation: ResolverTypeWrapper<ContentfulCatsLocation>;
  ContentfulCatsLocationFilterInput: ContentfulCatsLocationFilterInput;
  ContentfulCatsSortInput: ContentfulCatsSortInput;
  ContentfulCatsSys: ResolverTypeWrapper<ContentfulCatsSys>;
  ContentfulCatsSysContentType: ResolverTypeWrapper<ContentfulCatsSysContentType>;
  ContentfulCatsSysContentTypeFilterInput: ContentfulCatsSysContentTypeFilterInput;
  ContentfulCatsSysContentTypeSys: ResolverTypeWrapper<ContentfulCatsSysContentTypeSys>;
  ContentfulCatsSysContentTypeSysFilterInput: ContentfulCatsSysContentTypeSysFilterInput;
  ContentfulCatsSysFilterInput: ContentfulCatsSysFilterInput;
  ContentfulContentType: ResolverTypeWrapper<ContentfulContentType>;
  ContentfulContentTypeConnection: ResolverTypeWrapper<ContentfulContentTypeConnection>;
  ContentfulContentTypeEdge: ResolverTypeWrapper<ContentfulContentTypeEdge>;
  ContentfulContentTypeFieldsEnum: ContentfulContentTypeFieldsEnum;
  ContentfulContentTypeFilterInput: ContentfulContentTypeFilterInput;
  ContentfulContentTypeGroupConnection: ResolverTypeWrapper<ContentfulContentTypeGroupConnection>;
  ContentfulContentTypeSortInput: ContentfulContentTypeSortInput;
  ContentfulContentTypeSys: ResolverTypeWrapper<ContentfulContentTypeSys>;
  ContentfulContentTypeSysFilterInput: ContentfulContentTypeSysFilterInput;
  ContentfulDogs: ResolverTypeWrapper<ContentfulDogs>;
  ContentfulDogsConnection: ResolverTypeWrapper<ContentfulDogsConnection>;
  ContentfulDogsEdge: ResolverTypeWrapper<ContentfulDogsEdge>;
  ContentfulDogsFieldsEnum: ContentfulDogsFieldsEnum;
  ContentfulDogsFilterInput: ContentfulDogsFilterInput;
  ContentfulDogsGroupConnection: ResolverTypeWrapper<ContentfulDogsGroupConnection>;
  ContentfulDogsLocation: ResolverTypeWrapper<ContentfulDogsLocation>;
  ContentfulDogsLocationFilterInput: ContentfulDogsLocationFilterInput;
  ContentfulDogsSortInput: ContentfulDogsSortInput;
  ContentfulDogsSys: ResolverTypeWrapper<ContentfulDogsSys>;
  ContentfulDogsSysContentType: ResolverTypeWrapper<ContentfulDogsSysContentType>;
  ContentfulDogsSysContentTypeFilterInput: ContentfulDogsSysContentTypeFilterInput;
  ContentfulDogsSysContentTypeSys: ResolverTypeWrapper<ContentfulDogsSysContentTypeSys>;
  ContentfulDogsSysContentTypeSysFilterInput: ContentfulDogsSysContentTypeSysFilterInput;
  ContentfulDogsSysFilterInput: ContentfulDogsSysFilterInput;
  ContentfulEntry: ResolversTypes['ContentfulCats'] | ResolversTypes['ContentfulDogs'];
  ContentfulEntryConnection: ResolverTypeWrapper<ContentfulEntryConnection>;
  ContentfulEntryEdge: ResolverTypeWrapper<ContentfulEntryEdge>;
  ContentfulEntryFieldsEnum: ContentfulEntryFieldsEnum;
  ContentfulEntryFilterInput: ContentfulEntryFilterInput;
  ContentfulEntryGroupConnection: ResolverTypeWrapper<ContentfulEntryGroupConnection>;
  ContentfulEntrySortInput: ContentfulEntrySortInput;
  ContentfulImageCropFocus: ContentfulImageCropFocus;
  ContentfulReference: ResolversTypes['ContentfulAsset'] | ResolversTypes['ContentfulCats'] | ResolversTypes['ContentfulDogs'];
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateQueryOperatorInput: DateQueryOperatorInput;
  Directory: ResolverTypeWrapper<Directory>;
  DirectoryConnection: ResolverTypeWrapper<DirectoryConnection>;
  DirectoryEdge: ResolverTypeWrapper<DirectoryEdge>;
  DirectoryFieldsEnum: DirectoryFieldsEnum;
  DirectoryFilterInput: DirectoryFilterInput;
  DirectoryGroupConnection: ResolverTypeWrapper<DirectoryGroupConnection>;
  DirectorySortInput: DirectorySortInput;
  DuotoneGradient: DuotoneGradient;
  File: ResolverTypeWrapper<File>;
  FileConnection: ResolverTypeWrapper<FileConnection>;
  FileEdge: ResolverTypeWrapper<FileEdge>;
  FileFieldsEnum: FileFieldsEnum;
  FileFilterInput: FileFilterInput;
  FileGroupConnection: ResolverTypeWrapper<FileGroupConnection>;
  FileSortInput: FileSortInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  FloatQueryOperatorInput: FloatQueryOperatorInput;
  GatsbyImageFormat: GatsbyImageFormat;
  GatsbyImageLayout: GatsbyImageLayout;
  GatsbyImagePlaceholder: GatsbyImagePlaceholder;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  ImageCropFocus: ImageCropFocus;
  ImageFit: ImageFit;
  ImageFormat: ImageFormat;
  ImageLayout: ImageLayout;
  ImagePlaceholder: ImagePlaceholder;
  ImageResizingBehavior: ImageResizingBehavior;
  ImageSharp: ResolverTypeWrapper<ImageSharp>;
  ImageSharpConnection: ResolverTypeWrapper<ImageSharpConnection>;
  ImageSharpEdge: ResolverTypeWrapper<ImageSharpEdge>;
  ImageSharpFieldsEnum: ImageSharpFieldsEnum;
  ImageSharpFilterInput: ImageSharpFilterInput;
  ImageSharpFilterListInput: ImageSharpFilterListInput;
  ImageSharpFixed: ResolverTypeWrapper<ImageSharpFixed>;
  ImageSharpFixedFilterInput: ImageSharpFixedFilterInput;
  ImageSharpFluid: ResolverTypeWrapper<ImageSharpFluid>;
  ImageSharpFluidFilterInput: ImageSharpFluidFilterInput;
  ImageSharpGroupConnection: ResolverTypeWrapper<ImageSharpGroupConnection>;
  ImageSharpOriginal: ResolverTypeWrapper<ImageSharpOriginal>;
  ImageSharpOriginalFilterInput: ImageSharpOriginalFilterInput;
  ImageSharpResize: ResolverTypeWrapper<ImageSharpResize>;
  ImageSharpResizeFilterInput: ImageSharpResizeFilterInput;
  ImageSharpSortInput: ImageSharpSortInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IntQueryOperatorInput: IntQueryOperatorInput;
  Internal: ResolverTypeWrapper<Internal>;
  InternalFilterInput: InternalFilterInput;
  JPGOptions: JpgOptions;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONQueryOperatorInput: JsonQueryOperatorInput;
  Node: ResolversTypes['ContentfulAsset'] | ResolversTypes['ContentfulCats'] | ResolversTypes['ContentfulContentType'] | ResolversTypes['ContentfulDogs'] | ResolversTypes['Directory'] | ResolversTypes['File'] | ResolversTypes['ImageSharp'] | ResolversTypes['Site'] | ResolversTypes['SiteBuildMetadata'] | ResolversTypes['SiteFunction'] | ResolversTypes['SitePage'] | ResolversTypes['SitePlugin'] | ResolversTypes['contentfulCatsAboutTextNode'] | ResolversTypes['contentfulDogsAboutTextNode'];
  NodeFilterInput: NodeFilterInput;
  NodeFilterListInput: NodeFilterListInput;
  PNGOptions: PngOptions;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Potrace: Potrace;
  PotraceTurnPolicy: PotraceTurnPolicy;
  Query: ResolverTypeWrapper<{}>;
  RemoteFile: ResolversTypes['ContentfulAsset'];
  RemoteFileCropFocus: RemoteFileCropFocus;
  RemoteFileFit: RemoteFileFit;
  RemoteFileFormat: RemoteFileFormat;
  RemoteFileLayout: RemoteFileLayout;
  RemoteFilePlaceholder: RemoteFilePlaceholder;
  RemoteFileResize: ResolverTypeWrapper<RemoteFileResize>;
  RemoteFileResizeFilterInput: RemoteFileResizeFilterInput;
  Site: ResolverTypeWrapper<Site>;
  SiteBuildMetadata: ResolverTypeWrapper<SiteBuildMetadata>;
  SiteBuildMetadataConnection: ResolverTypeWrapper<SiteBuildMetadataConnection>;
  SiteBuildMetadataEdge: ResolverTypeWrapper<SiteBuildMetadataEdge>;
  SiteBuildMetadataFieldsEnum: SiteBuildMetadataFieldsEnum;
  SiteBuildMetadataFilterInput: SiteBuildMetadataFilterInput;
  SiteBuildMetadataGroupConnection: ResolverTypeWrapper<SiteBuildMetadataGroupConnection>;
  SiteBuildMetadataSortInput: SiteBuildMetadataSortInput;
  SiteConnection: ResolverTypeWrapper<SiteConnection>;
  SiteEdge: ResolverTypeWrapper<SiteEdge>;
  SiteFieldsEnum: SiteFieldsEnum;
  SiteFilterInput: SiteFilterInput;
  SiteFunction: ResolverTypeWrapper<SiteFunction>;
  SiteFunctionConnection: ResolverTypeWrapper<SiteFunctionConnection>;
  SiteFunctionEdge: ResolverTypeWrapper<SiteFunctionEdge>;
  SiteFunctionFieldsEnum: SiteFunctionFieldsEnum;
  SiteFunctionFilterInput: SiteFunctionFilterInput;
  SiteFunctionGroupConnection: ResolverTypeWrapper<SiteFunctionGroupConnection>;
  SiteFunctionSortInput: SiteFunctionSortInput;
  SiteGroupConnection: ResolverTypeWrapper<SiteGroupConnection>;
  SitePage: ResolverTypeWrapper<SitePage>;
  SitePageConnection: ResolverTypeWrapper<SitePageConnection>;
  SitePageEdge: ResolverTypeWrapper<SitePageEdge>;
  SitePageFieldsEnum: SitePageFieldsEnum;
  SitePageFilterInput: SitePageFilterInput;
  SitePageGroupConnection: ResolverTypeWrapper<SitePageGroupConnection>;
  SitePageSortInput: SitePageSortInput;
  SitePlugin: ResolverTypeWrapper<SitePlugin>;
  SitePluginConnection: ResolverTypeWrapper<SitePluginConnection>;
  SitePluginEdge: ResolverTypeWrapper<SitePluginEdge>;
  SitePluginFieldsEnum: SitePluginFieldsEnum;
  SitePluginFilterInput: SitePluginFilterInput;
  SitePluginGroupConnection: ResolverTypeWrapper<SitePluginGroupConnection>;
  SitePluginSortInput: SitePluginSortInput;
  SiteSiteMetadata: ResolverTypeWrapper<SiteSiteMetadata>;
  SiteSiteMetadataFilterInput: SiteSiteMetadataFilterInput;
  SiteSortInput: SiteSortInput;
  SortOrderEnum: SortOrderEnum;
  String: ResolverTypeWrapper<Scalars['String']>;
  StringQueryOperatorInput: StringQueryOperatorInput;
  TransformOptions: TransformOptions;
  WebPOptions: WebPOptions;
  contentfulCatsAboutTextNode: ResolverTypeWrapper<ContentfulCatsAboutTextNode>;
  contentfulCatsAboutTextNodeConnection: ResolverTypeWrapper<ContentfulCatsAboutTextNodeConnection>;
  contentfulCatsAboutTextNodeEdge: ResolverTypeWrapper<ContentfulCatsAboutTextNodeEdge>;
  contentfulCatsAboutTextNodeFieldsEnum: ContentfulCatsAboutTextNodeFieldsEnum;
  contentfulCatsAboutTextNodeFilterInput: ContentfulCatsAboutTextNodeFilterInput;
  contentfulCatsAboutTextNodeFilterListInput: ContentfulCatsAboutTextNodeFilterListInput;
  contentfulCatsAboutTextNodeGroupConnection: ResolverTypeWrapper<ContentfulCatsAboutTextNodeGroupConnection>;
  contentfulCatsAboutTextNodeSortInput: ContentfulCatsAboutTextNodeSortInput;
  contentfulCatsAboutTextNodeSys: ResolverTypeWrapper<ContentfulCatsAboutTextNodeSys>;
  contentfulCatsAboutTextNodeSysFilterInput: ContentfulCatsAboutTextNodeSysFilterInput;
  contentfulDogsAboutTextNode: ResolverTypeWrapper<ContentfulDogsAboutTextNode>;
  contentfulDogsAboutTextNodeConnection: ResolverTypeWrapper<ContentfulDogsAboutTextNodeConnection>;
  contentfulDogsAboutTextNodeEdge: ResolverTypeWrapper<ContentfulDogsAboutTextNodeEdge>;
  contentfulDogsAboutTextNodeFieldsEnum: ContentfulDogsAboutTextNodeFieldsEnum;
  contentfulDogsAboutTextNodeFilterInput: ContentfulDogsAboutTextNodeFilterInput;
  contentfulDogsAboutTextNodeFilterListInput: ContentfulDogsAboutTextNodeFilterListInput;
  contentfulDogsAboutTextNodeGroupConnection: ResolverTypeWrapper<ContentfulDogsAboutTextNodeGroupConnection>;
  contentfulDogsAboutTextNodeSortInput: ContentfulDogsAboutTextNodeSortInput;
  contentfulDogsAboutTextNodeSys: ResolverTypeWrapper<ContentfulDogsAboutTextNodeSys>;
  contentfulDogsAboutTextNodeSysFilterInput: ContentfulDogsAboutTextNodeSysFilterInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AVIFOptions: AvifOptions;
  BlurredOptions: BlurredOptions;
  Boolean: Scalars['Boolean'];
  BooleanQueryOperatorInput: BooleanQueryOperatorInput;
  ContentfulAsset: ContentfulAsset;
  ContentfulAssetConnection: ContentfulAssetConnection;
  ContentfulAssetEdge: ContentfulAssetEdge;
  ContentfulAssetFile: ContentfulAssetFile;
  ContentfulAssetFileDetails: ContentfulAssetFileDetails;
  ContentfulAssetFileDetailsFilterInput: ContentfulAssetFileDetailsFilterInput;
  ContentfulAssetFileDetailsImage: ContentfulAssetFileDetailsImage;
  ContentfulAssetFileDetailsImageFilterInput: ContentfulAssetFileDetailsImageFilterInput;
  ContentfulAssetFileFilterInput: ContentfulAssetFileFilterInput;
  ContentfulAssetFilterInput: ContentfulAssetFilterInput;
  ContentfulAssetGroupConnection: ContentfulAssetGroupConnection;
  ContentfulAssetSortInput: ContentfulAssetSortInput;
  ContentfulAssetSys: ContentfulAssetSys;
  ContentfulAssetSysFilterInput: ContentfulAssetSysFilterInput;
  ContentfulCats: ContentfulCats;
  ContentfulCatsConnection: ContentfulCatsConnection;
  ContentfulCatsEdge: ContentfulCatsEdge;
  ContentfulCatsFilterInput: ContentfulCatsFilterInput;
  ContentfulCatsGroupConnection: ContentfulCatsGroupConnection;
  ContentfulCatsLocation: ContentfulCatsLocation;
  ContentfulCatsLocationFilterInput: ContentfulCatsLocationFilterInput;
  ContentfulCatsSortInput: ContentfulCatsSortInput;
  ContentfulCatsSys: ContentfulCatsSys;
  ContentfulCatsSysContentType: ContentfulCatsSysContentType;
  ContentfulCatsSysContentTypeFilterInput: ContentfulCatsSysContentTypeFilterInput;
  ContentfulCatsSysContentTypeSys: ContentfulCatsSysContentTypeSys;
  ContentfulCatsSysContentTypeSysFilterInput: ContentfulCatsSysContentTypeSysFilterInput;
  ContentfulCatsSysFilterInput: ContentfulCatsSysFilterInput;
  ContentfulContentType: ContentfulContentType;
  ContentfulContentTypeConnection: ContentfulContentTypeConnection;
  ContentfulContentTypeEdge: ContentfulContentTypeEdge;
  ContentfulContentTypeFilterInput: ContentfulContentTypeFilterInput;
  ContentfulContentTypeGroupConnection: ContentfulContentTypeGroupConnection;
  ContentfulContentTypeSortInput: ContentfulContentTypeSortInput;
  ContentfulContentTypeSys: ContentfulContentTypeSys;
  ContentfulContentTypeSysFilterInput: ContentfulContentTypeSysFilterInput;
  ContentfulDogs: ContentfulDogs;
  ContentfulDogsConnection: ContentfulDogsConnection;
  ContentfulDogsEdge: ContentfulDogsEdge;
  ContentfulDogsFilterInput: ContentfulDogsFilterInput;
  ContentfulDogsGroupConnection: ContentfulDogsGroupConnection;
  ContentfulDogsLocation: ContentfulDogsLocation;
  ContentfulDogsLocationFilterInput: ContentfulDogsLocationFilterInput;
  ContentfulDogsSortInput: ContentfulDogsSortInput;
  ContentfulDogsSys: ContentfulDogsSys;
  ContentfulDogsSysContentType: ContentfulDogsSysContentType;
  ContentfulDogsSysContentTypeFilterInput: ContentfulDogsSysContentTypeFilterInput;
  ContentfulDogsSysContentTypeSys: ContentfulDogsSysContentTypeSys;
  ContentfulDogsSysContentTypeSysFilterInput: ContentfulDogsSysContentTypeSysFilterInput;
  ContentfulDogsSysFilterInput: ContentfulDogsSysFilterInput;
  ContentfulEntry: ResolversParentTypes['ContentfulCats'] | ResolversParentTypes['ContentfulDogs'];
  ContentfulEntryConnection: ContentfulEntryConnection;
  ContentfulEntryEdge: ContentfulEntryEdge;
  ContentfulEntryFilterInput: ContentfulEntryFilterInput;
  ContentfulEntryGroupConnection: ContentfulEntryGroupConnection;
  ContentfulEntrySortInput: ContentfulEntrySortInput;
  ContentfulReference: ResolversParentTypes['ContentfulAsset'] | ResolversParentTypes['ContentfulCats'] | ResolversParentTypes['ContentfulDogs'];
  Date: Scalars['Date'];
  DateQueryOperatorInput: DateQueryOperatorInput;
  Directory: Directory;
  DirectoryConnection: DirectoryConnection;
  DirectoryEdge: DirectoryEdge;
  DirectoryFilterInput: DirectoryFilterInput;
  DirectoryGroupConnection: DirectoryGroupConnection;
  DirectorySortInput: DirectorySortInput;
  DuotoneGradient: DuotoneGradient;
  File: File;
  FileConnection: FileConnection;
  FileEdge: FileEdge;
  FileFilterInput: FileFilterInput;
  FileGroupConnection: FileGroupConnection;
  FileSortInput: FileSortInput;
  Float: Scalars['Float'];
  FloatQueryOperatorInput: FloatQueryOperatorInput;
  ID: Scalars['ID'];
  ImageSharp: ImageSharp;
  ImageSharpConnection: ImageSharpConnection;
  ImageSharpEdge: ImageSharpEdge;
  ImageSharpFilterInput: ImageSharpFilterInput;
  ImageSharpFilterListInput: ImageSharpFilterListInput;
  ImageSharpFixed: ImageSharpFixed;
  ImageSharpFixedFilterInput: ImageSharpFixedFilterInput;
  ImageSharpFluid: ImageSharpFluid;
  ImageSharpFluidFilterInput: ImageSharpFluidFilterInput;
  ImageSharpGroupConnection: ImageSharpGroupConnection;
  ImageSharpOriginal: ImageSharpOriginal;
  ImageSharpOriginalFilterInput: ImageSharpOriginalFilterInput;
  ImageSharpResize: ImageSharpResize;
  ImageSharpResizeFilterInput: ImageSharpResizeFilterInput;
  ImageSharpSortInput: ImageSharpSortInput;
  Int: Scalars['Int'];
  IntQueryOperatorInput: IntQueryOperatorInput;
  Internal: Internal;
  InternalFilterInput: InternalFilterInput;
  JPGOptions: JpgOptions;
  JSON: Scalars['JSON'];
  JSONQueryOperatorInput: JsonQueryOperatorInput;
  Node: ResolversParentTypes['ContentfulAsset'] | ResolversParentTypes['ContentfulCats'] | ResolversParentTypes['ContentfulContentType'] | ResolversParentTypes['ContentfulDogs'] | ResolversParentTypes['Directory'] | ResolversParentTypes['File'] | ResolversParentTypes['ImageSharp'] | ResolversParentTypes['Site'] | ResolversParentTypes['SiteBuildMetadata'] | ResolversParentTypes['SiteFunction'] | ResolversParentTypes['SitePage'] | ResolversParentTypes['SitePlugin'] | ResolversParentTypes['contentfulCatsAboutTextNode'] | ResolversParentTypes['contentfulDogsAboutTextNode'];
  NodeFilterInput: NodeFilterInput;
  NodeFilterListInput: NodeFilterListInput;
  PNGOptions: PngOptions;
  PageInfo: PageInfo;
  Potrace: Potrace;
  Query: {};
  RemoteFile: ResolversParentTypes['ContentfulAsset'];
  RemoteFileResize: RemoteFileResize;
  RemoteFileResizeFilterInput: RemoteFileResizeFilterInput;
  Site: Site;
  SiteBuildMetadata: SiteBuildMetadata;
  SiteBuildMetadataConnection: SiteBuildMetadataConnection;
  SiteBuildMetadataEdge: SiteBuildMetadataEdge;
  SiteBuildMetadataFilterInput: SiteBuildMetadataFilterInput;
  SiteBuildMetadataGroupConnection: SiteBuildMetadataGroupConnection;
  SiteBuildMetadataSortInput: SiteBuildMetadataSortInput;
  SiteConnection: SiteConnection;
  SiteEdge: SiteEdge;
  SiteFilterInput: SiteFilterInput;
  SiteFunction: SiteFunction;
  SiteFunctionConnection: SiteFunctionConnection;
  SiteFunctionEdge: SiteFunctionEdge;
  SiteFunctionFilterInput: SiteFunctionFilterInput;
  SiteFunctionGroupConnection: SiteFunctionGroupConnection;
  SiteFunctionSortInput: SiteFunctionSortInput;
  SiteGroupConnection: SiteGroupConnection;
  SitePage: SitePage;
  SitePageConnection: SitePageConnection;
  SitePageEdge: SitePageEdge;
  SitePageFilterInput: SitePageFilterInput;
  SitePageGroupConnection: SitePageGroupConnection;
  SitePageSortInput: SitePageSortInput;
  SitePlugin: SitePlugin;
  SitePluginConnection: SitePluginConnection;
  SitePluginEdge: SitePluginEdge;
  SitePluginFilterInput: SitePluginFilterInput;
  SitePluginGroupConnection: SitePluginGroupConnection;
  SitePluginSortInput: SitePluginSortInput;
  SiteSiteMetadata: SiteSiteMetadata;
  SiteSiteMetadataFilterInput: SiteSiteMetadataFilterInput;
  SiteSortInput: SiteSortInput;
  String: Scalars['String'];
  StringQueryOperatorInput: StringQueryOperatorInput;
  TransformOptions: TransformOptions;
  WebPOptions: WebPOptions;
  contentfulCatsAboutTextNode: ContentfulCatsAboutTextNode;
  contentfulCatsAboutTextNodeConnection: ContentfulCatsAboutTextNodeConnection;
  contentfulCatsAboutTextNodeEdge: ContentfulCatsAboutTextNodeEdge;
  contentfulCatsAboutTextNodeFilterInput: ContentfulCatsAboutTextNodeFilterInput;
  contentfulCatsAboutTextNodeFilterListInput: ContentfulCatsAboutTextNodeFilterListInput;
  contentfulCatsAboutTextNodeGroupConnection: ContentfulCatsAboutTextNodeGroupConnection;
  contentfulCatsAboutTextNodeSortInput: ContentfulCatsAboutTextNodeSortInput;
  contentfulCatsAboutTextNodeSys: ContentfulCatsAboutTextNodeSys;
  contentfulCatsAboutTextNodeSysFilterInput: ContentfulCatsAboutTextNodeSysFilterInput;
  contentfulDogsAboutTextNode: ContentfulDogsAboutTextNode;
  contentfulDogsAboutTextNodeConnection: ContentfulDogsAboutTextNodeConnection;
  contentfulDogsAboutTextNodeEdge: ContentfulDogsAboutTextNodeEdge;
  contentfulDogsAboutTextNodeFilterInput: ContentfulDogsAboutTextNodeFilterInput;
  contentfulDogsAboutTextNodeFilterListInput: ContentfulDogsAboutTextNodeFilterListInput;
  contentfulDogsAboutTextNodeGroupConnection: ContentfulDogsAboutTextNodeGroupConnection;
  contentfulDogsAboutTextNodeSortInput: ContentfulDogsAboutTextNodeSortInput;
  contentfulDogsAboutTextNodeSys: ContentfulDogsAboutTextNodeSys;
  contentfulDogsAboutTextNodeSysFilterInput: ContentfulDogsAboutTextNodeSysFilterInput;
};

export type ChildOfDirectiveArgs = {
  mimeTypes?: Array<Scalars['String']>;
  types?: Array<Scalars['String']>;
};

export type ChildOfDirectiveResolver<Result, Parent, ContextType = any, Args = ChildOfDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type DateformatDirectiveArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type DateformatDirectiveResolver<Result, Parent, ContextType = any, Args = DateformatDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type DontInferDirectiveArgs = { };

export type DontInferDirectiveResolver<Result, Parent, ContextType = any, Args = DontInferDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type FileByRelativePathDirectiveArgs = {
  from?: Maybe<Scalars['String']>;
};

export type FileByRelativePathDirectiveResolver<Result, Parent, ContextType = any, Args = FileByRelativePathDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type InferDirectiveArgs = { };

export type InferDirectiveResolver<Result, Parent, ContextType = any, Args = InferDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveArgs = {
  by?: Scalars['String'];
  from?: Maybe<Scalars['String']>;
  on?: Maybe<Scalars['String']>;
};

export type LinkDirectiveResolver<Result, Parent, ContextType = any, Args = LinkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MimeTypesDirectiveArgs = {
  types?: Array<Scalars['String']>;
};

export type MimeTypesDirectiveResolver<Result, Parent, ContextType = any, Args = MimeTypesDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type NodeInterfaceDirectiveArgs = { };

export type NodeInterfaceDirectiveResolver<Result, Parent, ContextType = any, Args = NodeInterfaceDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ProxyDirectiveArgs = {
  from: Scalars['String'];
  fromNode?: Scalars['Boolean'];
};

export type ProxyDirectiveResolver<Result, Parent, ContextType = any, Args = ProxyDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ContentfulAssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulAsset'] = ResolversParentTypes['ContentfulAsset']> = {
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  contentful_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, Partial<ContentfulAssetCreatedAtArgs>>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  file?: Resolver<Maybe<ResolversTypes['ContentfulAssetFile']>, ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  filesize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gatsbyImage?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<ContentfulAssetGatsbyImageArgs, 'breakpoints' | 'fit' | 'formats' | 'layout' | 'outputPixelDensities' | 'placeholder' | 'quality'>>;
  gatsbyImageData?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<ContentfulAssetGatsbyImageDataArgs, 'cornerRadius' | 'formats' | 'jpegProgressive' | 'quality'>>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  mimeType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node_locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  placeholderUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publicUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  resize?: Resolver<Maybe<ResolversTypes['RemoteFileResize']>, ParentType, ContextType, RequireFields<ContentfulAssetResizeArgs, 'fit' | 'format' | 'quality'>>;
  spaceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sys?: Resolver<Maybe<ResolversTypes['ContentfulAssetSys']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, Partial<ContentfulAssetUpdatedAtArgs>>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulAssetConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulAssetConnection'] = ResolversParentTypes['ContentfulAssetConnection']> = {
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ContentfulAssetConnectionDistinctArgs, 'field'>>;
  edges?: Resolver<Array<ResolversTypes['ContentfulAssetEdge']>, ParentType, ContextType>;
  group?: Resolver<Array<ResolversTypes['ContentfulAssetGroupConnection']>, ParentType, ContextType, RequireFields<ContentfulAssetConnectionGroupArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulAssetConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulAssetConnectionMinArgs, 'field'>>;
  nodes?: Resolver<Array<ResolversTypes['ContentfulAsset']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulAssetConnectionSumArgs, 'field'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulAssetEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulAssetEdge'] = ResolversParentTypes['ContentfulAssetEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['ContentfulAsset']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ContentfulAsset'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['ContentfulAsset']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulAssetFileResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulAssetFile'] = ResolversParentTypes['ContentfulAssetFile']> = {
  contentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['ContentfulAssetFileDetails']>, ParentType, ContextType>;
  fileName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulAssetFileDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulAssetFileDetails'] = ResolversParentTypes['ContentfulAssetFileDetails']> = {
  image?: Resolver<Maybe<ResolversTypes['ContentfulAssetFileDetailsImage']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulAssetFileDetailsImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulAssetFileDetailsImage'] = ResolversParentTypes['ContentfulAssetFileDetailsImage']> = {
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulAssetGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulAssetGroupConnection'] = ResolversParentTypes['ContentfulAssetGroupConnection']> = {
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ContentfulAssetGroupConnectionDistinctArgs, 'field'>>;
  edges?: Resolver<Array<ResolversTypes['ContentfulAssetEdge']>, ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Array<ResolversTypes['ContentfulAssetGroupConnection']>, ParentType, ContextType, RequireFields<ContentfulAssetGroupConnectionGroupArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulAssetGroupConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulAssetGroupConnectionMinArgs, 'field'>>;
  nodes?: Resolver<Array<ResolversTypes['ContentfulAsset']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulAssetGroupConnectionSumArgs, 'field'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulAssetSysResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulAssetSys'] = ResolversParentTypes['ContentfulAssetSys']> = {
  revision?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulCatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulCats'] = ResolversParentTypes['ContentfulCats']> = {
  about?: Resolver<Maybe<ResolversTypes['contentfulCatsAboutTextNode']>, ParentType, ContextType>;
  childContentfulCatsAboutTextNode?: Resolver<Maybe<ResolversTypes['contentfulCatsAboutTextNode']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  childrenContentfulCatsAboutTextNode?: Resolver<Maybe<Array<Maybe<ResolversTypes['contentfulCatsAboutTextNode']>>>, ParentType, ContextType>;
  contentful_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, Partial<ContentfulCatsCreatedAtArgs>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['ContentfulAsset']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['ContentfulCatsLocation']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  node_locale?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  spaceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sys?: Resolver<Maybe<ResolversTypes['ContentfulCatsSys']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, Partial<ContentfulCatsUpdatedAtArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulCatsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulCatsConnection'] = ResolversParentTypes['ContentfulCatsConnection']> = {
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ContentfulCatsConnectionDistinctArgs, 'field'>>;
  edges?: Resolver<Array<ResolversTypes['ContentfulCatsEdge']>, ParentType, ContextType>;
  group?: Resolver<Array<ResolversTypes['ContentfulCatsGroupConnection']>, ParentType, ContextType, RequireFields<ContentfulCatsConnectionGroupArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulCatsConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulCatsConnectionMinArgs, 'field'>>;
  nodes?: Resolver<Array<ResolversTypes['ContentfulCats']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulCatsConnectionSumArgs, 'field'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulCatsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulCatsEdge'] = ResolversParentTypes['ContentfulCatsEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['ContentfulCats']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ContentfulCats'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['ContentfulCats']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulCatsGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulCatsGroupConnection'] = ResolversParentTypes['ContentfulCatsGroupConnection']> = {
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ContentfulCatsGroupConnectionDistinctArgs, 'field'>>;
  edges?: Resolver<Array<ResolversTypes['ContentfulCatsEdge']>, ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Array<ResolversTypes['ContentfulCatsGroupConnection']>, ParentType, ContextType, RequireFields<ContentfulCatsGroupConnectionGroupArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulCatsGroupConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulCatsGroupConnectionMinArgs, 'field'>>;
  nodes?: Resolver<Array<ResolversTypes['ContentfulCats']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulCatsGroupConnectionSumArgs, 'field'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulCatsLocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulCatsLocation'] = ResolversParentTypes['ContentfulCatsLocation']> = {
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulCatsSysResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulCatsSys'] = ResolversParentTypes['ContentfulCatsSys']> = {
  contentType?: Resolver<Maybe<ResolversTypes['ContentfulCatsSysContentType']>, ParentType, ContextType>;
  revision?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulCatsSysContentTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulCatsSysContentType'] = ResolversParentTypes['ContentfulCatsSysContentType']> = {
  sys?: Resolver<Maybe<ResolversTypes['ContentfulCatsSysContentTypeSys']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulCatsSysContentTypeSysResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulCatsSysContentTypeSys'] = ResolversParentTypes['ContentfulCatsSysContentTypeSys']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulContentTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulContentType'] = ResolversParentTypes['ContentfulContentType']> = {
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayField?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  sys?: Resolver<Maybe<ResolversTypes['ContentfulContentTypeSys']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulContentTypeConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulContentTypeConnection'] = ResolversParentTypes['ContentfulContentTypeConnection']> = {
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ContentfulContentTypeConnectionDistinctArgs, 'field'>>;
  edges?: Resolver<Array<ResolversTypes['ContentfulContentTypeEdge']>, ParentType, ContextType>;
  group?: Resolver<Array<ResolversTypes['ContentfulContentTypeGroupConnection']>, ParentType, ContextType, RequireFields<ContentfulContentTypeConnectionGroupArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulContentTypeConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulContentTypeConnectionMinArgs, 'field'>>;
  nodes?: Resolver<Array<ResolversTypes['ContentfulContentType']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulContentTypeConnectionSumArgs, 'field'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulContentTypeEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulContentTypeEdge'] = ResolversParentTypes['ContentfulContentTypeEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['ContentfulContentType']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ContentfulContentType'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['ContentfulContentType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulContentTypeGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulContentTypeGroupConnection'] = ResolversParentTypes['ContentfulContentTypeGroupConnection']> = {
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ContentfulContentTypeGroupConnectionDistinctArgs, 'field'>>;
  edges?: Resolver<Array<ResolversTypes['ContentfulContentTypeEdge']>, ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Array<ResolversTypes['ContentfulContentTypeGroupConnection']>, ParentType, ContextType, RequireFields<ContentfulContentTypeGroupConnectionGroupArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulContentTypeGroupConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulContentTypeGroupConnectionMinArgs, 'field'>>;
  nodes?: Resolver<Array<ResolversTypes['ContentfulContentType']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulContentTypeGroupConnectionSumArgs, 'field'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulContentTypeSysResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulContentTypeSys'] = ResolversParentTypes['ContentfulContentTypeSys']> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulDogsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulDogs'] = ResolversParentTypes['ContentfulDogs']> = {
  about?: Resolver<Maybe<ResolversTypes['contentfulDogsAboutTextNode']>, ParentType, ContextType>;
  childContentfulDogsAboutTextNode?: Resolver<Maybe<ResolversTypes['contentfulDogsAboutTextNode']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  childrenContentfulDogsAboutTextNode?: Resolver<Maybe<Array<Maybe<ResolversTypes['contentfulDogsAboutTextNode']>>>, ParentType, ContextType>;
  contentful_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, Partial<ContentfulDogsCreatedAtArgs>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['ContentfulAsset']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['ContentfulDogsLocation']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  node_locale?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  spaceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sys?: Resolver<Maybe<ResolversTypes['ContentfulDogsSys']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, Partial<ContentfulDogsUpdatedAtArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulDogsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulDogsConnection'] = ResolversParentTypes['ContentfulDogsConnection']> = {
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ContentfulDogsConnectionDistinctArgs, 'field'>>;
  edges?: Resolver<Array<ResolversTypes['ContentfulDogsEdge']>, ParentType, ContextType>;
  group?: Resolver<Array<ResolversTypes['ContentfulDogsGroupConnection']>, ParentType, ContextType, RequireFields<ContentfulDogsConnectionGroupArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulDogsConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulDogsConnectionMinArgs, 'field'>>;
  nodes?: Resolver<Array<ResolversTypes['ContentfulDogs']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulDogsConnectionSumArgs, 'field'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulDogsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulDogsEdge'] = ResolversParentTypes['ContentfulDogsEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['ContentfulDogs']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ContentfulDogs'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['ContentfulDogs']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulDogsGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulDogsGroupConnection'] = ResolversParentTypes['ContentfulDogsGroupConnection']> = {
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ContentfulDogsGroupConnectionDistinctArgs, 'field'>>;
  edges?: Resolver<Array<ResolversTypes['ContentfulDogsEdge']>, ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Array<ResolversTypes['ContentfulDogsGroupConnection']>, ParentType, ContextType, RequireFields<ContentfulDogsGroupConnectionGroupArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulDogsGroupConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulDogsGroupConnectionMinArgs, 'field'>>;
  nodes?: Resolver<Array<ResolversTypes['ContentfulDogs']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulDogsGroupConnectionSumArgs, 'field'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulDogsLocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulDogsLocation'] = ResolversParentTypes['ContentfulDogsLocation']> = {
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulDogsSysResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulDogsSys'] = ResolversParentTypes['ContentfulDogsSys']> = {
  contentType?: Resolver<Maybe<ResolversTypes['ContentfulDogsSysContentType']>, ParentType, ContextType>;
  revision?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulDogsSysContentTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulDogsSysContentType'] = ResolversParentTypes['ContentfulDogsSysContentType']> = {
  sys?: Resolver<Maybe<ResolversTypes['ContentfulDogsSysContentTypeSys']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulDogsSysContentTypeSysResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulDogsSysContentTypeSys'] = ResolversParentTypes['ContentfulDogsSysContentTypeSys']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulEntry'] = ResolversParentTypes['ContentfulEntry']> = {
  __resolveType: TypeResolveFn<'ContentfulCats' | 'ContentfulDogs', ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  contentful_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  node_locale?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
};

export type ContentfulEntryConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulEntryConnection'] = ResolversParentTypes['ContentfulEntryConnection']> = {
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ContentfulEntryConnectionDistinctArgs, 'field'>>;
  edges?: Resolver<Array<ResolversTypes['ContentfulEntryEdge']>, ParentType, ContextType>;
  group?: Resolver<Array<ResolversTypes['ContentfulEntryGroupConnection']>, ParentType, ContextType, RequireFields<ContentfulEntryConnectionGroupArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulEntryConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulEntryConnectionMinArgs, 'field'>>;
  nodes?: Resolver<Array<ResolversTypes['ContentfulEntry']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulEntryConnectionSumArgs, 'field'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulEntryEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulEntryEdge'] = ResolversParentTypes['ContentfulEntryEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['ContentfulEntry']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ContentfulEntry'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['ContentfulEntry']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulEntryGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulEntryGroupConnection'] = ResolversParentTypes['ContentfulEntryGroupConnection']> = {
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ContentfulEntryGroupConnectionDistinctArgs, 'field'>>;
  edges?: Resolver<Array<ResolversTypes['ContentfulEntryEdge']>, ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Array<ResolversTypes['ContentfulEntryGroupConnection']>, ParentType, ContextType, RequireFields<ContentfulEntryGroupConnectionGroupArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulEntryGroupConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulEntryGroupConnectionMinArgs, 'field'>>;
  nodes?: Resolver<Array<ResolversTypes['ContentfulEntry']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulEntryGroupConnectionSumArgs, 'field'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulReferenceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulReference'] = ResolversParentTypes['ContentfulReference']> = {
  __resolveType: TypeResolveFn<'ContentfulAsset' | 'ContentfulCats' | 'ContentfulDogs', ParentType, ContextType>;
  contentful_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type DirectoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Directory'] = ResolversParentTypes['Directory']> = {
  absolutePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  accessTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, Partial<DirectoryAccessTimeArgs>>;
  atime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, Partial<DirectoryAtimeArgs>>;
  atimeMs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  base?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  birthTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, Partial<DirectoryBirthTimeArgs>>;
  birthtime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  birthtimeMs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  changeTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, Partial<DirectoryChangeTimeArgs>>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  ctime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, Partial<DirectoryCtimeArgs>>;
  ctimeMs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  dev?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dir?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ext?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  extension?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ino?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  mode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  modifiedTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, Partial<DirectoryModifiedTimeArgs>>;
  mtime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, Partial<DirectoryMtimeArgs>>;
  mtimeMs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nlink?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  prettySize?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rdev?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relativeDirectory?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  relativePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  root?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sourceInstanceName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DirectoryConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DirectoryConnection'] = ResolversParentTypes['DirectoryConnection']> = {
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<DirectoryConnectionDistinctArgs, 'field'>>;
  edges?: Resolver<Array<ResolversTypes['DirectoryEdge']>, ParentType, ContextType>;
  group?: Resolver<Array<ResolversTypes['DirectoryGroupConnection']>, ParentType, ContextType, RequireFields<DirectoryConnectionGroupArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<DirectoryConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<DirectoryConnectionMinArgs, 'field'>>;
  nodes?: Resolver<Array<ResolversTypes['Directory']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<DirectoryConnectionSumArgs, 'field'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DirectoryEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['DirectoryEdge'] = ResolversParentTypes['DirectoryEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['Directory']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Directory'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['Directory']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DirectoryGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DirectoryGroupConnection'] = ResolversParentTypes['DirectoryGroupConnection']> = {
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<DirectoryGroupConnectionDistinctArgs, 'field'>>;
  edges?: Resolver<Array<ResolversTypes['DirectoryEdge']>, ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Array<ResolversTypes['DirectoryGroupConnection']>, ParentType, ContextType, RequireFields<DirectoryGroupConnectionGroupArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<DirectoryGroupConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<DirectoryGroupConnectionMinArgs, 'field'>>;
  nodes?: Resolver<Array<ResolversTypes['Directory']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<DirectoryGroupConnectionSumArgs, 'field'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  absolutePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  accessTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, Partial<FileAccessTimeArgs>>;
  atime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, Partial<FileAtimeArgs>>;
  atimeMs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  base?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  birthTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, Partial<FileBirthTimeArgs>>;
  birthtime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  birthtimeMs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  blksize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  blocks?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  changeTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, Partial<FileChangeTimeArgs>>;
  childImageSharp?: Resolver<Maybe<ResolversTypes['ImageSharp']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  childrenImageSharp?: Resolver<Maybe<Array<Maybe<ResolversTypes['ImageSharp']>>>, ParentType, ContextType>;
  ctime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, Partial<FileCtimeArgs>>;
  ctimeMs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  dev?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dir?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ext?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  extension?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ino?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  mode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  modifiedTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, Partial<FileModifiedTimeArgs>>;
  mtime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, Partial<FileMtimeArgs>>;
  mtimeMs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nlink?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  prettySize?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  publicURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rdev?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relativeDirectory?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  relativePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  root?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sourceInstanceName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FileConnection'] = ResolversParentTypes['FileConnection']> = {
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<FileConnectionDistinctArgs, 'field'>>;
  edges?: Resolver<Array<ResolversTypes['FileEdge']>, ParentType, ContextType>;
  group?: Resolver<Array<ResolversTypes['FileGroupConnection']>, ParentType, ContextType, RequireFields<FileConnectionGroupArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<FileConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<FileConnectionMinArgs, 'field'>>;
  nodes?: Resolver<Array<ResolversTypes['File']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<FileConnectionSumArgs, 'field'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['FileEdge'] = ResolversParentTypes['FileEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['File'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FileGroupConnection'] = ResolversParentTypes['FileGroupConnection']> = {
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<FileGroupConnectionDistinctArgs, 'field'>>;
  edges?: Resolver<Array<ResolversTypes['FileEdge']>, ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Array<ResolversTypes['FileGroupConnection']>, ParentType, ContextType, RequireFields<FileGroupConnectionGroupArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<FileGroupConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<FileGroupConnectionMinArgs, 'field'>>;
  nodes?: Resolver<Array<ResolversTypes['File']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<FileGroupConnectionSumArgs, 'field'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageSharp'] = ResolversParentTypes['ImageSharp']> = {
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  fixed?: Resolver<Maybe<ResolversTypes['ImageSharpFixed']>, ParentType, ContextType, RequireFields<ImageSharpFixedArgs, 'background' | 'cropFocus' | 'fit' | 'grayscale' | 'jpegProgressive' | 'pngCompressionSpeed' | 'rotate' | 'toFormat' | 'toFormatBase64' | 'trim'>>;
  fluid?: Resolver<Maybe<ResolversTypes['ImageSharpFluid']>, ParentType, ContextType, RequireFields<ImageSharpFluidArgs, 'background' | 'cropFocus' | 'fit' | 'grayscale' | 'jpegProgressive' | 'pngCompressionSpeed' | 'rotate' | 'sizes' | 'srcSetBreakpoints' | 'toFormat' | 'toFormatBase64' | 'trim'>>;
  gatsbyImageData?: Resolver<ResolversTypes['JSON'], ParentType, ContextType, RequireFields<ImageSharpGatsbyImageDataArgs, 'layout'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  original?: Resolver<Maybe<ResolversTypes['ImageSharpOriginal']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  resize?: Resolver<Maybe<ResolversTypes['ImageSharpResize']>, ParentType, ContextType, RequireFields<ImageSharpResizeArgs, 'background' | 'base64' | 'cropFocus' | 'fit' | 'grayscale' | 'jpegProgressive' | 'pngCompressionLevel' | 'pngCompressionSpeed' | 'rotate' | 'toFormat' | 'trim'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageSharpConnection'] = ResolversParentTypes['ImageSharpConnection']> = {
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ImageSharpConnectionDistinctArgs, 'field'>>;
  edges?: Resolver<Array<ResolversTypes['ImageSharpEdge']>, ParentType, ContextType>;
  group?: Resolver<Array<ResolversTypes['ImageSharpGroupConnection']>, ParentType, ContextType, RequireFields<ImageSharpConnectionGroupArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ImageSharpConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ImageSharpConnectionMinArgs, 'field'>>;
  nodes?: Resolver<Array<ResolversTypes['ImageSharp']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ImageSharpConnectionSumArgs, 'field'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageSharpEdge'] = ResolversParentTypes['ImageSharpEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['ImageSharp']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ImageSharp'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['ImageSharp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpFixedResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageSharpFixed'] = ResolversParentTypes['ImageSharpFixed']> = {
  aspectRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  base64?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  originalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  src?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcSet?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcSetWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  srcWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tracedSVG?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpFluidResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageSharpFluid'] = ResolversParentTypes['ImageSharpFluid']> = {
  aspectRatio?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  base64?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  originalImg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  originalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  presentationHeight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  presentationWidth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sizes?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  src?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcSet?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcSetWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  srcWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tracedSVG?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageSharpGroupConnection'] = ResolversParentTypes['ImageSharpGroupConnection']> = {
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ImageSharpGroupConnectionDistinctArgs, 'field'>>;
  edges?: Resolver<Array<ResolversTypes['ImageSharpEdge']>, ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Array<ResolversTypes['ImageSharpGroupConnection']>, ParentType, ContextType, RequireFields<ImageSharpGroupConnectionGroupArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ImageSharpGroupConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ImageSharpGroupConnectionMinArgs, 'field'>>;
  nodes?: Resolver<Array<ResolversTypes['ImageSharp']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ImageSharpGroupConnectionSumArgs, 'field'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpOriginalResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageSharpOriginal'] = ResolversParentTypes['ImageSharpOriginal']> = {
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpResizeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageSharpResize'] = ResolversParentTypes['ImageSharpResize']> = {
  aspectRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  originalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tracedSVG?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InternalResolvers<ContextType = any, ParentType extends ResolversParentTypes['Internal'] = ResolversParentTypes['Internal']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentDigest?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fieldOwners?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  ignoreType?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  mediaType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'ContentfulAsset' | 'ContentfulCats' | 'ContentfulContentType' | 'ContentfulDogs' | 'Directory' | 'File' | 'ImageSharp' | 'Site' | 'SiteBuildMetadata' | 'SiteFunction' | 'SitePage' | 'SitePlugin' | 'contentfulCatsAboutTextNode' | 'contentfulDogsAboutTextNode', ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  currentPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  itemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pageCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  perPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  allContentfulAsset?: Resolver<ResolversTypes['ContentfulAssetConnection'], ParentType, ContextType, Partial<QueryAllContentfulAssetArgs>>;
  allContentfulCats?: Resolver<ResolversTypes['ContentfulCatsConnection'], ParentType, ContextType, Partial<QueryAllContentfulCatsArgs>>;
  allContentfulCatsAboutTextNode?: Resolver<ResolversTypes['contentfulCatsAboutTextNodeConnection'], ParentType, ContextType, Partial<QueryAllContentfulCatsAboutTextNodeArgs>>;
  allContentfulContentType?: Resolver<ResolversTypes['ContentfulContentTypeConnection'], ParentType, ContextType, Partial<QueryAllContentfulContentTypeArgs>>;
  allContentfulDogs?: Resolver<ResolversTypes['ContentfulDogsConnection'], ParentType, ContextType, Partial<QueryAllContentfulDogsArgs>>;
  allContentfulDogsAboutTextNode?: Resolver<ResolversTypes['contentfulDogsAboutTextNodeConnection'], ParentType, ContextType, Partial<QueryAllContentfulDogsAboutTextNodeArgs>>;
  allContentfulEntry?: Resolver<ResolversTypes['ContentfulEntryConnection'], ParentType, ContextType, Partial<QueryAllContentfulEntryArgs>>;
  allDirectory?: Resolver<ResolversTypes['DirectoryConnection'], ParentType, ContextType, Partial<QueryAllDirectoryArgs>>;
  allFile?: Resolver<ResolversTypes['FileConnection'], ParentType, ContextType, Partial<QueryAllFileArgs>>;
  allImageSharp?: Resolver<ResolversTypes['ImageSharpConnection'], ParentType, ContextType, Partial<QueryAllImageSharpArgs>>;
  allSite?: Resolver<ResolversTypes['SiteConnection'], ParentType, ContextType, Partial<QueryAllSiteArgs>>;
  allSiteBuildMetadata?: Resolver<ResolversTypes['SiteBuildMetadataConnection'], ParentType, ContextType, Partial<QueryAllSiteBuildMetadataArgs>>;
  allSiteFunction?: Resolver<ResolversTypes['SiteFunctionConnection'], ParentType, ContextType, Partial<QueryAllSiteFunctionArgs>>;
  allSitePage?: Resolver<ResolversTypes['SitePageConnection'], ParentType, ContextType, Partial<QueryAllSitePageArgs>>;
  allSitePlugin?: Resolver<ResolversTypes['SitePluginConnection'], ParentType, ContextType, Partial<QueryAllSitePluginArgs>>;
  contentfulAsset?: Resolver<Maybe<ResolversTypes['ContentfulAsset']>, ParentType, ContextType, Partial<QueryContentfulAssetArgs>>;
  contentfulCats?: Resolver<Maybe<ResolversTypes['ContentfulCats']>, ParentType, ContextType, Partial<QueryContentfulCatsArgs>>;
  contentfulCatsAboutTextNode?: Resolver<Maybe<ResolversTypes['contentfulCatsAboutTextNode']>, ParentType, ContextType, Partial<QueryContentfulCatsAboutTextNodeArgs>>;
  contentfulContentType?: Resolver<Maybe<ResolversTypes['ContentfulContentType']>, ParentType, ContextType, Partial<QueryContentfulContentTypeArgs>>;
  contentfulDogs?: Resolver<Maybe<ResolversTypes['ContentfulDogs']>, ParentType, ContextType, Partial<QueryContentfulDogsArgs>>;
  contentfulDogsAboutTextNode?: Resolver<Maybe<ResolversTypes['contentfulDogsAboutTextNode']>, ParentType, ContextType, Partial<QueryContentfulDogsAboutTextNodeArgs>>;
  contentfulEntry?: Resolver<Maybe<ResolversTypes['ContentfulEntry']>, ParentType, ContextType, Partial<QueryContentfulEntryArgs>>;
  directory?: Resolver<Maybe<ResolversTypes['Directory']>, ParentType, ContextType, Partial<QueryDirectoryArgs>>;
  file?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, Partial<QueryFileArgs>>;
  imageSharp?: Resolver<Maybe<ResolversTypes['ImageSharp']>, ParentType, ContextType, Partial<QueryImageSharpArgs>>;
  site?: Resolver<Maybe<ResolversTypes['Site']>, ParentType, ContextType, Partial<QuerySiteArgs>>;
  siteBuildMetadata?: Resolver<Maybe<ResolversTypes['SiteBuildMetadata']>, ParentType, ContextType, Partial<QuerySiteBuildMetadataArgs>>;
  siteFunction?: Resolver<Maybe<ResolversTypes['SiteFunction']>, ParentType, ContextType, Partial<QuerySiteFunctionArgs>>;
  sitePage?: Resolver<Maybe<ResolversTypes['SitePage']>, ParentType, ContextType, Partial<QuerySitePageArgs>>;
  sitePlugin?: Resolver<Maybe<ResolversTypes['SitePlugin']>, ParentType, ContextType, Partial<QuerySitePluginArgs>>;
};

export type RemoteFileResolvers<ContextType = any, ParentType extends ResolversParentTypes['RemoteFile'] = ResolversParentTypes['RemoteFile']> = {
  __resolveType: TypeResolveFn<'ContentfulAsset', ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  filesize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gatsbyImage?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<RemoteFileGatsbyImageArgs, 'breakpoints' | 'fit' | 'formats' | 'layout' | 'outputPixelDensities' | 'placeholder' | 'quality'>>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mimeType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  publicUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  resize?: Resolver<Maybe<ResolversTypes['RemoteFileResize']>, ParentType, ContextType, RequireFields<RemoteFileResizeArgs, 'fit' | 'format' | 'quality'>>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type RemoteFileResizeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RemoteFileResize'] = ResolversParentTypes['RemoteFileResize']> = {
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Site'] = ResolversParentTypes['Site']> = {
  buildTime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, Partial<SiteBuildTimeArgs>>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  jsxRuntime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  pathPrefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  polyfill?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  siteMetadata?: Resolver<Maybe<ResolversTypes['SiteSiteMetadata']>, ParentType, ContextType>;
  trailingSlash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteBuildMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteBuildMetadata'] = ResolversParentTypes['SiteBuildMetadata']> = {
  buildTime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, Partial<SiteBuildMetadataBuildTimeArgs>>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteBuildMetadataConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteBuildMetadataConnection'] = ResolversParentTypes['SiteBuildMetadataConnection']> = {
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SiteBuildMetadataConnectionDistinctArgs, 'field'>>;
  edges?: Resolver<Array<ResolversTypes['SiteBuildMetadataEdge']>, ParentType, ContextType>;
  group?: Resolver<Array<ResolversTypes['SiteBuildMetadataGroupConnection']>, ParentType, ContextType, RequireFields<SiteBuildMetadataConnectionGroupArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteBuildMetadataConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteBuildMetadataConnectionMinArgs, 'field'>>;
  nodes?: Resolver<Array<ResolversTypes['SiteBuildMetadata']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteBuildMetadataConnectionSumArgs, 'field'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteBuildMetadataEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteBuildMetadataEdge'] = ResolversParentTypes['SiteBuildMetadataEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['SiteBuildMetadata']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SiteBuildMetadata'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['SiteBuildMetadata']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteBuildMetadataGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteBuildMetadataGroupConnection'] = ResolversParentTypes['SiteBuildMetadataGroupConnection']> = {
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SiteBuildMetadataGroupConnectionDistinctArgs, 'field'>>;
  edges?: Resolver<Array<ResolversTypes['SiteBuildMetadataEdge']>, ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Array<ResolversTypes['SiteBuildMetadataGroupConnection']>, ParentType, ContextType, RequireFields<SiteBuildMetadataGroupConnectionGroupArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteBuildMetadataGroupConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteBuildMetadataGroupConnectionMinArgs, 'field'>>;
  nodes?: Resolver<Array<ResolversTypes['SiteBuildMetadata']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteBuildMetadataGroupConnectionSumArgs, 'field'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteConnection'] = ResolversParentTypes['SiteConnection']> = {
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SiteConnectionDistinctArgs, 'field'>>;
  edges?: Resolver<Array<ResolversTypes['SiteEdge']>, ParentType, ContextType>;
  group?: Resolver<Array<ResolversTypes['SiteGroupConnection']>, ParentType, ContextType, RequireFields<SiteConnectionGroupArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteConnectionMinArgs, 'field'>>;
  nodes?: Resolver<Array<ResolversTypes['Site']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteConnectionSumArgs, 'field'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteEdge'] = ResolversParentTypes['SiteEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['Site']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Site'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['Site']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteFunctionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteFunction'] = ResolversParentTypes['SiteFunction']> = {
  absoluteCompiledFilePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  functionRoute?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  matchPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  originalAbsoluteFilePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  originalRelativeFilePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  pluginName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  relativeCompiledFilePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteFunctionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteFunctionConnection'] = ResolversParentTypes['SiteFunctionConnection']> = {
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SiteFunctionConnectionDistinctArgs, 'field'>>;
  edges?: Resolver<Array<ResolversTypes['SiteFunctionEdge']>, ParentType, ContextType>;
  group?: Resolver<Array<ResolversTypes['SiteFunctionGroupConnection']>, ParentType, ContextType, RequireFields<SiteFunctionConnectionGroupArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteFunctionConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteFunctionConnectionMinArgs, 'field'>>;
  nodes?: Resolver<Array<ResolversTypes['SiteFunction']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteFunctionConnectionSumArgs, 'field'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteFunctionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteFunctionEdge'] = ResolversParentTypes['SiteFunctionEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['SiteFunction']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SiteFunction'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['SiteFunction']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteFunctionGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteFunctionGroupConnection'] = ResolversParentTypes['SiteFunctionGroupConnection']> = {
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SiteFunctionGroupConnectionDistinctArgs, 'field'>>;
  edges?: Resolver<Array<ResolversTypes['SiteFunctionEdge']>, ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Array<ResolversTypes['SiteFunctionGroupConnection']>, ParentType, ContextType, RequireFields<SiteFunctionGroupConnectionGroupArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteFunctionGroupConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteFunctionGroupConnectionMinArgs, 'field'>>;
  nodes?: Resolver<Array<ResolversTypes['SiteFunction']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteFunctionGroupConnectionSumArgs, 'field'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteGroupConnection'] = ResolversParentTypes['SiteGroupConnection']> = {
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SiteGroupConnectionDistinctArgs, 'field'>>;
  edges?: Resolver<Array<ResolversTypes['SiteEdge']>, ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Array<ResolversTypes['SiteGroupConnection']>, ParentType, ContextType, RequireFields<SiteGroupConnectionGroupArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteGroupConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteGroupConnectionMinArgs, 'field'>>;
  nodes?: Resolver<Array<ResolversTypes['Site']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteGroupConnectionSumArgs, 'field'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePageResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePage'] = ResolversParentTypes['SitePage']> = {
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  component?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  componentChunkName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  internalComponentName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  matchPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pageContext?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pluginCreator?: Resolver<Maybe<ResolversTypes['SitePlugin']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePageConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePageConnection'] = ResolversParentTypes['SitePageConnection']> = {
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SitePageConnectionDistinctArgs, 'field'>>;
  edges?: Resolver<Array<ResolversTypes['SitePageEdge']>, ParentType, ContextType>;
  group?: Resolver<Array<ResolversTypes['SitePageGroupConnection']>, ParentType, ContextType, RequireFields<SitePageConnectionGroupArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePageConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePageConnectionMinArgs, 'field'>>;
  nodes?: Resolver<Array<ResolversTypes['SitePage']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePageConnectionSumArgs, 'field'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePageEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePageEdge'] = ResolversParentTypes['SitePageEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['SitePage']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SitePage'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['SitePage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePageGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePageGroupConnection'] = ResolversParentTypes['SitePageGroupConnection']> = {
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SitePageGroupConnectionDistinctArgs, 'field'>>;
  edges?: Resolver<Array<ResolversTypes['SitePageEdge']>, ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Array<ResolversTypes['SitePageGroupConnection']>, ParentType, ContextType, RequireFields<SitePageGroupConnectionGroupArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePageGroupConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePageGroupConnectionMinArgs, 'field'>>;
  nodes?: Resolver<Array<ResolversTypes['SitePage']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePageGroupConnectionSumArgs, 'field'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePlugin'] = ResolversParentTypes['SitePlugin']> = {
  browserAPIs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodeAPIs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  packageJson?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  pluginFilepath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pluginOptions?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  resolve?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ssrAPIs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginConnection'] = ResolversParentTypes['SitePluginConnection']> = {
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SitePluginConnectionDistinctArgs, 'field'>>;
  edges?: Resolver<Array<ResolversTypes['SitePluginEdge']>, ParentType, ContextType>;
  group?: Resolver<Array<ResolversTypes['SitePluginGroupConnection']>, ParentType, ContextType, RequireFields<SitePluginConnectionGroupArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePluginConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePluginConnectionMinArgs, 'field'>>;
  nodes?: Resolver<Array<ResolversTypes['SitePlugin']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePluginConnectionSumArgs, 'field'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginEdge'] = ResolversParentTypes['SitePluginEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['SitePlugin']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SitePlugin'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['SitePlugin']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginGroupConnection'] = ResolversParentTypes['SitePluginGroupConnection']> = {
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SitePluginGroupConnectionDistinctArgs, 'field'>>;
  edges?: Resolver<Array<ResolversTypes['SitePluginEdge']>, ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Array<ResolversTypes['SitePluginGroupConnection']>, ParentType, ContextType, RequireFields<SitePluginGroupConnectionGroupArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePluginGroupConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePluginGroupConnectionMinArgs, 'field'>>;
  nodes?: Resolver<Array<ResolversTypes['SitePlugin']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePluginGroupConnectionSumArgs, 'field'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteSiteMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteSiteMetadata'] = ResolversParentTypes['SiteSiteMetadata']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  siteTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulCatsAboutTextNodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['contentfulCatsAboutTextNode'] = ResolversParentTypes['contentfulCatsAboutTextNode']> = {
  about?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  sys?: Resolver<Maybe<ResolversTypes['contentfulCatsAboutTextNodeSys']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulCatsAboutTextNodeConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['contentfulCatsAboutTextNodeConnection'] = ResolversParentTypes['contentfulCatsAboutTextNodeConnection']> = {
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ContentfulCatsAboutTextNodeConnectionDistinctArgs, 'field'>>;
  edges?: Resolver<Array<ResolversTypes['contentfulCatsAboutTextNodeEdge']>, ParentType, ContextType>;
  group?: Resolver<Array<ResolversTypes['contentfulCatsAboutTextNodeGroupConnection']>, ParentType, ContextType, RequireFields<ContentfulCatsAboutTextNodeConnectionGroupArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulCatsAboutTextNodeConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulCatsAboutTextNodeConnectionMinArgs, 'field'>>;
  nodes?: Resolver<Array<ResolversTypes['contentfulCatsAboutTextNode']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulCatsAboutTextNodeConnectionSumArgs, 'field'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulCatsAboutTextNodeEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['contentfulCatsAboutTextNodeEdge'] = ResolversParentTypes['contentfulCatsAboutTextNodeEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['contentfulCatsAboutTextNode']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['contentfulCatsAboutTextNode'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['contentfulCatsAboutTextNode']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulCatsAboutTextNodeGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['contentfulCatsAboutTextNodeGroupConnection'] = ResolversParentTypes['contentfulCatsAboutTextNodeGroupConnection']> = {
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ContentfulCatsAboutTextNodeGroupConnectionDistinctArgs, 'field'>>;
  edges?: Resolver<Array<ResolversTypes['contentfulCatsAboutTextNodeEdge']>, ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Array<ResolversTypes['contentfulCatsAboutTextNodeGroupConnection']>, ParentType, ContextType, RequireFields<ContentfulCatsAboutTextNodeGroupConnectionGroupArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulCatsAboutTextNodeGroupConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulCatsAboutTextNodeGroupConnectionMinArgs, 'field'>>;
  nodes?: Resolver<Array<ResolversTypes['contentfulCatsAboutTextNode']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulCatsAboutTextNodeGroupConnectionSumArgs, 'field'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulCatsAboutTextNodeSysResolvers<ContextType = any, ParentType extends ResolversParentTypes['contentfulCatsAboutTextNodeSys'] = ResolversParentTypes['contentfulCatsAboutTextNodeSys']> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulDogsAboutTextNodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['contentfulDogsAboutTextNode'] = ResolversParentTypes['contentfulDogsAboutTextNode']> = {
  about?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  sys?: Resolver<Maybe<ResolversTypes['contentfulDogsAboutTextNodeSys']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulDogsAboutTextNodeConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['contentfulDogsAboutTextNodeConnection'] = ResolversParentTypes['contentfulDogsAboutTextNodeConnection']> = {
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ContentfulDogsAboutTextNodeConnectionDistinctArgs, 'field'>>;
  edges?: Resolver<Array<ResolversTypes['contentfulDogsAboutTextNodeEdge']>, ParentType, ContextType>;
  group?: Resolver<Array<ResolversTypes['contentfulDogsAboutTextNodeGroupConnection']>, ParentType, ContextType, RequireFields<ContentfulDogsAboutTextNodeConnectionGroupArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulDogsAboutTextNodeConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulDogsAboutTextNodeConnectionMinArgs, 'field'>>;
  nodes?: Resolver<Array<ResolversTypes['contentfulDogsAboutTextNode']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulDogsAboutTextNodeConnectionSumArgs, 'field'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulDogsAboutTextNodeEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['contentfulDogsAboutTextNodeEdge'] = ResolversParentTypes['contentfulDogsAboutTextNodeEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['contentfulDogsAboutTextNode']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['contentfulDogsAboutTextNode'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['contentfulDogsAboutTextNode']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulDogsAboutTextNodeGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['contentfulDogsAboutTextNodeGroupConnection'] = ResolversParentTypes['contentfulDogsAboutTextNodeGroupConnection']> = {
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ContentfulDogsAboutTextNodeGroupConnectionDistinctArgs, 'field'>>;
  edges?: Resolver<Array<ResolversTypes['contentfulDogsAboutTextNodeEdge']>, ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Array<ResolversTypes['contentfulDogsAboutTextNodeGroupConnection']>, ParentType, ContextType, RequireFields<ContentfulDogsAboutTextNodeGroupConnectionGroupArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulDogsAboutTextNodeGroupConnectionMaxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulDogsAboutTextNodeGroupConnectionMinArgs, 'field'>>;
  nodes?: Resolver<Array<ResolversTypes['contentfulDogsAboutTextNode']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ContentfulDogsAboutTextNodeGroupConnectionSumArgs, 'field'>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulDogsAboutTextNodeSysResolvers<ContextType = any, ParentType extends ResolversParentTypes['contentfulDogsAboutTextNodeSys'] = ResolversParentTypes['contentfulDogsAboutTextNodeSys']> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  ContentfulAsset?: ContentfulAssetResolvers<ContextType>;
  ContentfulAssetConnection?: ContentfulAssetConnectionResolvers<ContextType>;
  ContentfulAssetEdge?: ContentfulAssetEdgeResolvers<ContextType>;
  ContentfulAssetFile?: ContentfulAssetFileResolvers<ContextType>;
  ContentfulAssetFileDetails?: ContentfulAssetFileDetailsResolvers<ContextType>;
  ContentfulAssetFileDetailsImage?: ContentfulAssetFileDetailsImageResolvers<ContextType>;
  ContentfulAssetGroupConnection?: ContentfulAssetGroupConnectionResolvers<ContextType>;
  ContentfulAssetSys?: ContentfulAssetSysResolvers<ContextType>;
  ContentfulCats?: ContentfulCatsResolvers<ContextType>;
  ContentfulCatsConnection?: ContentfulCatsConnectionResolvers<ContextType>;
  ContentfulCatsEdge?: ContentfulCatsEdgeResolvers<ContextType>;
  ContentfulCatsGroupConnection?: ContentfulCatsGroupConnectionResolvers<ContextType>;
  ContentfulCatsLocation?: ContentfulCatsLocationResolvers<ContextType>;
  ContentfulCatsSys?: ContentfulCatsSysResolvers<ContextType>;
  ContentfulCatsSysContentType?: ContentfulCatsSysContentTypeResolvers<ContextType>;
  ContentfulCatsSysContentTypeSys?: ContentfulCatsSysContentTypeSysResolvers<ContextType>;
  ContentfulContentType?: ContentfulContentTypeResolvers<ContextType>;
  ContentfulContentTypeConnection?: ContentfulContentTypeConnectionResolvers<ContextType>;
  ContentfulContentTypeEdge?: ContentfulContentTypeEdgeResolvers<ContextType>;
  ContentfulContentTypeGroupConnection?: ContentfulContentTypeGroupConnectionResolvers<ContextType>;
  ContentfulContentTypeSys?: ContentfulContentTypeSysResolvers<ContextType>;
  ContentfulDogs?: ContentfulDogsResolvers<ContextType>;
  ContentfulDogsConnection?: ContentfulDogsConnectionResolvers<ContextType>;
  ContentfulDogsEdge?: ContentfulDogsEdgeResolvers<ContextType>;
  ContentfulDogsGroupConnection?: ContentfulDogsGroupConnectionResolvers<ContextType>;
  ContentfulDogsLocation?: ContentfulDogsLocationResolvers<ContextType>;
  ContentfulDogsSys?: ContentfulDogsSysResolvers<ContextType>;
  ContentfulDogsSysContentType?: ContentfulDogsSysContentTypeResolvers<ContextType>;
  ContentfulDogsSysContentTypeSys?: ContentfulDogsSysContentTypeSysResolvers<ContextType>;
  ContentfulEntry?: ContentfulEntryResolvers<ContextType>;
  ContentfulEntryConnection?: ContentfulEntryConnectionResolvers<ContextType>;
  ContentfulEntryEdge?: ContentfulEntryEdgeResolvers<ContextType>;
  ContentfulEntryGroupConnection?: ContentfulEntryGroupConnectionResolvers<ContextType>;
  ContentfulReference?: ContentfulReferenceResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Directory?: DirectoryResolvers<ContextType>;
  DirectoryConnection?: DirectoryConnectionResolvers<ContextType>;
  DirectoryEdge?: DirectoryEdgeResolvers<ContextType>;
  DirectoryGroupConnection?: DirectoryGroupConnectionResolvers<ContextType>;
  File?: FileResolvers<ContextType>;
  FileConnection?: FileConnectionResolvers<ContextType>;
  FileEdge?: FileEdgeResolvers<ContextType>;
  FileGroupConnection?: FileGroupConnectionResolvers<ContextType>;
  ImageSharp?: ImageSharpResolvers<ContextType>;
  ImageSharpConnection?: ImageSharpConnectionResolvers<ContextType>;
  ImageSharpEdge?: ImageSharpEdgeResolvers<ContextType>;
  ImageSharpFixed?: ImageSharpFixedResolvers<ContextType>;
  ImageSharpFluid?: ImageSharpFluidResolvers<ContextType>;
  ImageSharpGroupConnection?: ImageSharpGroupConnectionResolvers<ContextType>;
  ImageSharpOriginal?: ImageSharpOriginalResolvers<ContextType>;
  ImageSharpResize?: ImageSharpResizeResolvers<ContextType>;
  Internal?: InternalResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Node?: NodeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RemoteFile?: RemoteFileResolvers<ContextType>;
  RemoteFileResize?: RemoteFileResizeResolvers<ContextType>;
  Site?: SiteResolvers<ContextType>;
  SiteBuildMetadata?: SiteBuildMetadataResolvers<ContextType>;
  SiteBuildMetadataConnection?: SiteBuildMetadataConnectionResolvers<ContextType>;
  SiteBuildMetadataEdge?: SiteBuildMetadataEdgeResolvers<ContextType>;
  SiteBuildMetadataGroupConnection?: SiteBuildMetadataGroupConnectionResolvers<ContextType>;
  SiteConnection?: SiteConnectionResolvers<ContextType>;
  SiteEdge?: SiteEdgeResolvers<ContextType>;
  SiteFunction?: SiteFunctionResolvers<ContextType>;
  SiteFunctionConnection?: SiteFunctionConnectionResolvers<ContextType>;
  SiteFunctionEdge?: SiteFunctionEdgeResolvers<ContextType>;
  SiteFunctionGroupConnection?: SiteFunctionGroupConnectionResolvers<ContextType>;
  SiteGroupConnection?: SiteGroupConnectionResolvers<ContextType>;
  SitePage?: SitePageResolvers<ContextType>;
  SitePageConnection?: SitePageConnectionResolvers<ContextType>;
  SitePageEdge?: SitePageEdgeResolvers<ContextType>;
  SitePageGroupConnection?: SitePageGroupConnectionResolvers<ContextType>;
  SitePlugin?: SitePluginResolvers<ContextType>;
  SitePluginConnection?: SitePluginConnectionResolvers<ContextType>;
  SitePluginEdge?: SitePluginEdgeResolvers<ContextType>;
  SitePluginGroupConnection?: SitePluginGroupConnectionResolvers<ContextType>;
  SiteSiteMetadata?: SiteSiteMetadataResolvers<ContextType>;
  contentfulCatsAboutTextNode?: ContentfulCatsAboutTextNodeResolvers<ContextType>;
  contentfulCatsAboutTextNodeConnection?: ContentfulCatsAboutTextNodeConnectionResolvers<ContextType>;
  contentfulCatsAboutTextNodeEdge?: ContentfulCatsAboutTextNodeEdgeResolvers<ContextType>;
  contentfulCatsAboutTextNodeGroupConnection?: ContentfulCatsAboutTextNodeGroupConnectionResolvers<ContextType>;
  contentfulCatsAboutTextNodeSys?: ContentfulCatsAboutTextNodeSysResolvers<ContextType>;
  contentfulDogsAboutTextNode?: ContentfulDogsAboutTextNodeResolvers<ContextType>;
  contentfulDogsAboutTextNodeConnection?: ContentfulDogsAboutTextNodeConnectionResolvers<ContextType>;
  contentfulDogsAboutTextNodeEdge?: ContentfulDogsAboutTextNodeEdgeResolvers<ContextType>;
  contentfulDogsAboutTextNodeGroupConnection?: ContentfulDogsAboutTextNodeGroupConnectionResolvers<ContextType>;
  contentfulDogsAboutTextNodeSys?: ContentfulDogsAboutTextNodeSysResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  childOf?: ChildOfDirectiveResolver<any, any, ContextType>;
  dateformat?: DateformatDirectiveResolver<any, any, ContextType>;
  dontInfer?: DontInferDirectiveResolver<any, any, ContextType>;
  fileByRelativePath?: FileByRelativePathDirectiveResolver<any, any, ContextType>;
  infer?: InferDirectiveResolver<any, any, ContextType>;
  link?: LinkDirectiveResolver<any, any, ContextType>;
  mimeTypes?: MimeTypesDirectiveResolver<any, any, ContextType>;
  nodeInterface?: NodeInterfaceDirectiveResolver<any, any, ContextType>;
  proxy?: ProxyDirectiveResolver<any, any, ContextType>;
};
