import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Decimal: { input: number; output: number; }
  GlobalID: { input: string; output: string; }
};

/** Brand(id, created_at, modified_at, name) */
export type Brand = Node & {
  __typename?: 'Brand';
  /** The Globally Unique ID of this object */
  id: Scalars['GlobalID']['output'];
  name: Scalars['String']['output'];
};

/** Brand(id, created_at, modified_at, name) */
export type BrandFilter = {
  AND?: InputMaybe<BrandFilter>;
  NOT?: InputMaybe<BrandFilter>;
  OR?: InputMaybe<BrandFilter>;
  name?: InputMaybe<StrFilterLookup>;
};

export type BrandOrder = {
  name?: InputMaybe<Ordering>;
};

export type ContextUserError = {
  __typename?: 'ContextUserError';
  message: Scalars['String']['output'];
};

export type ContextUserSuccess = {
  __typename?: 'ContextUserSuccess';
  user: UserType;
};

export type ContextUserSuccessContextUserError = ContextUserError | ContextUserSuccess;

export type CountSubscription = {
  __typename?: 'CountSubscription';
  count: Scalars['Int']['output'];
};


export type CountSubscriptionCountArgs = {
  target?: Scalars['Int']['input'];
};

export type DecimalFilterLookup = {
  contains?: InputMaybe<Scalars['Decimal']['input']>;
  endsWith?: InputMaybe<Scalars['Decimal']['input']>;
  exact?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  iContains?: InputMaybe<Scalars['Decimal']['input']>;
  iEndsWith?: InputMaybe<Scalars['Decimal']['input']>;
  iExact?: InputMaybe<Scalars['Decimal']['input']>;
  iRegex?: InputMaybe<Scalars['String']['input']>;
  iStartsWith?: InputMaybe<Scalars['Decimal']['input']>;
  inList?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  range?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['Decimal']['input']>;
};

export type DeleteCookieTokenError = {
  __typename?: 'DeleteCookieTokenError';
  message: Scalars['String']['output'];
};

export type DeleteCookieTokenPayload = DeleteCookieTokenError | DeleteCookieTokenSuccess;

export type DeleteCookieTokenSuccess = {
  __typename?: 'DeleteCookieTokenSuccess';
  message: Scalars['String']['output'];
};

export type GlobalIdFilterLookup = {
  contains?: InputMaybe<Scalars['GlobalID']['input']>;
  endsWith?: InputMaybe<Scalars['GlobalID']['input']>;
  exact?: InputMaybe<Scalars['GlobalID']['input']>;
  gt?: InputMaybe<Scalars['GlobalID']['input']>;
  gte?: InputMaybe<Scalars['GlobalID']['input']>;
  iContains?: InputMaybe<Scalars['GlobalID']['input']>;
  iEndsWith?: InputMaybe<Scalars['GlobalID']['input']>;
  iExact?: InputMaybe<Scalars['GlobalID']['input']>;
  iRegex?: InputMaybe<Scalars['String']['input']>;
  iStartsWith?: InputMaybe<Scalars['GlobalID']['input']>;
  inList?: InputMaybe<Array<Scalars['GlobalID']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['GlobalID']['input']>;
  lte?: InputMaybe<Scalars['GlobalID']['input']>;
  range?: InputMaybe<Array<Scalars['GlobalID']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['GlobalID']['input']>;
};

export type LoginError = {
  __typename?: 'LoginError';
  message: Scalars['String']['output'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginPayload = LoginError | LoginSuccess;

export type LoginSuccess = {
  __typename?: 'LoginSuccess';
  accessToken: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUserGenerric: UserType;
  createUsersInBulk: Array<UserType>;
  deleteCookieToken: DeleteCookieTokenPayload;
  deleteUserGeneric: UserType;
  login: LoginPayload;
  refreshToken: RefreshTokenPayload;
  register: RegisterPayload;
  updateProductsInBulkWithFiltersGeneric: Array<Product>;
  updateUserGeneric: UserType;
  /** Doesn't handle multiple verifications for same user, but let's be honest, it's not needed. */
  verifyUser: VerifyUserSuccessVerifyUserError;
};


export type MutationCreateUserGenerricArgs = {
  data: UserInput;
};


export type MutationCreateUsersInBulkArgs = {
  data: Array<UserInput>;
};


export type MutationDeleteUserGenericArgs = {
  data: NodeInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationUpdateProductsInBulkWithFiltersGenericArgs = {
  data: ProductInputPartial;
  filters?: InputMaybe<ProductFilter>;
};


export type MutationUpdateUserGenericArgs = {
  data: UserInputPartial;
};


export type MutationVerifyUserArgs = {
  input: VerifyUserInput;
};

/** An object with a Globally Unique ID */
export type Node = {
  /** The Globally Unique ID of this object */
  id: Scalars['GlobalID']['output'];
};

/** Input of an object that implements the `Node` interface. */
export type NodeInput = {
  id: Scalars['GlobalID']['input'];
};

export enum Ordering {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Information to aid in pagination. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** Product(id, created_at, modified_at, name, description, brand, price) */
export type Product = Node & {
  __typename?: 'Product';
  brand?: Maybe<Brand>;
  /** The Globally Unique ID of this object */
  id: Scalars['GlobalID']['output'];
  images: Array<ProductImage>;
  name: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type ProductConnection = {
  __typename?: 'ProductConnection';
  /** Contains the nodes in this connection */
  edges: Array<ProductEdge>;
  /** Pagination data for this connection */
  pageInfo: PageInfo;
  /** Total quantity of existing nodes. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection. */
export type ProductEdge = {
  __typename?: 'ProductEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Product;
};

/** Product(id, created_at, modified_at, name, description, brand, price) */
export type ProductFilter = {
  AND?: InputMaybe<ProductFilter>;
  NOT?: InputMaybe<ProductFilter>;
  OR?: InputMaybe<ProductFilter>;
  brand?: InputMaybe<BrandFilter>;
  description?: InputMaybe<StrFilterLookup>;
  id?: InputMaybe<GlobalIdFilterLookup>;
  name?: InputMaybe<StrFilterLookup>;
  price?: InputMaybe<DecimalFilterLookup>;
};

/** Product image model. */
export type ProductImage = Node & {
  __typename?: 'ProductImage';
  /** The Globally Unique ID of this object */
  id: Scalars['GlobalID']['output'];
  image?: Maybe<Scalars['String']['output']>;
};

/** Product(id, created_at, modified_at, name, description, brand, price) */
export type ProductInputPartial = {
  brand?: InputMaybe<NodeInput>;
  id: Scalars['GlobalID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ProductOrder = {
  brand?: InputMaybe<BrandOrder>;
  description?: InputMaybe<Ordering>;
  name?: InputMaybe<Ordering>;
  price?: InputMaybe<Ordering>;
};

export type Query = {
  __typename?: 'Query';
  contextUser: ContextUserSuccessContextUserError;
  customProductConnection: ProductConnection;
  product: Product;
  productConnection: ProductConnection;
  productList: ProductConnection;
  user?: Maybe<UserType>;
  userConnection: UserTypeConnection;
};


export type QueryCustomProductConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<ProductFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ProductOrder>;
};


export type QueryProductArgs = {
  id: Scalars['GlobalID']['input'];
};


export type QueryProductConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<ProductFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ProductOrder>;
};


export type QueryUserArgs = {
  id: Scalars['GlobalID']['input'];
};


export type QueryUserConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type RefreshTokenError = {
  __typename?: 'RefreshTokenError';
  message: Scalars['String']['output'];
};

export type RefreshTokenPayload = RefreshTokenError | RefreshTokenSuccess;

export type RefreshTokenSuccess = {
  __typename?: 'RefreshTokenSuccess';
  accessToken: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type RegisterError = {
  __typename?: 'RegisterError';
  message: Scalars['String']['output'];
};

export type RegisterInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type RegisterPayload = RegisterError | RegisterSuccess;

export type RegisterSuccess = {
  __typename?: 'RegisterSuccess';
  message: Scalars['String']['output'];
};

export type StrFilterLookup = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  exact?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  iContains?: InputMaybe<Scalars['String']['input']>;
  iEndsWith?: InputMaybe<Scalars['String']['input']>;
  iExact?: InputMaybe<Scalars['String']['input']>;
  iRegex?: InputMaybe<Scalars['String']['input']>;
  iStartsWith?: InputMaybe<Scalars['String']['input']>;
  inList?: InputMaybe<Array<Scalars['String']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  range?: InputMaybe<Array<Scalars['String']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** User(last_login, id, created_at, modified_at, first_name, last_name, email, password, role, is_active, is_verified) */
export type UserInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

/** User(last_login, id, created_at, modified_at, first_name, last_name, email, password, role, is_active, is_verified) */
export type UserInputPartial = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['GlobalID']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export enum UserRoleChoices {
  Anonymous = 'ANONYMOUS',
  User = 'USER'
}

/** User(last_login, id, created_at, modified_at, first_name, last_name, email, password, role, is_active, is_verified) */
export type UserType = Node & {
  __typename?: 'UserType';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  /** The Globally Unique ID of this object */
  id: Scalars['GlobalID']['output'];
  isActive: Scalars['Boolean']['output'];
  isVerified: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
  role: UserRoleChoices;
};

/** A connection to a list of items. */
export type UserTypeConnection = {
  __typename?: 'UserTypeConnection';
  /** Contains the nodes in this connection */
  edges: Array<UserTypeEdge>;
  /** Pagination data for this connection */
  pageInfo: PageInfo;
  /** Total quantity of existing nodes. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection. */
export type UserTypeEdge = {
  __typename?: 'UserTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: UserType;
};

export type VerifyUserError = {
  __typename?: 'VerifyUserError';
  message: Scalars['String']['output'];
};

export type VerifyUserInput = {
  verificationToken: Scalars['String']['input'];
};

export type VerifyUserSuccess = {
  __typename?: 'VerifyUserSuccess';
  message: Scalars['String']['output'];
};

export type VerifyUserSuccessVerifyUserError = VerifyUserError | VerifyUserSuccess;
