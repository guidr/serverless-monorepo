export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type GQLCountry = {
  readonly __typename?: 'Country',
  readonly code: Scalars['ID'],
  readonly name: Scalars['String'],
  readonly flag?: Maybe<Scalars['String']>,
};

export type GQLQuery = {
  readonly __typename?: 'Query',
  readonly getCountry?: Maybe<GQLCountry>,
  readonly listCountries?: Maybe<ReadonlyArray<Maybe<GQLCountry>>>,
  readonly hello: Scalars['String'],
  readonly getUser?: Maybe<GQLUser>,
  readonly listUsers?: Maybe<ReadonlyArray<Maybe<GQLUser>>>,
};


export type GQLQueryGetCountryArgs = {
  code: Scalars['ID']
};


export type GQLQueryGetUserArgs = {
  id: Scalars['ID']
};


export type GQLQueryListUsersArgs = {
  query?: Maybe<Scalars['String']>
};

export type GQLUser = {
  readonly __typename?: 'User',
  readonly id: Scalars['ID'],
  readonly name: Scalars['String'],
  readonly country: GQLCountry,
};
