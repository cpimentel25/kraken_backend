import { GraphQLResolveInfo } from 'graphql';
import { MyContext } from '../index';
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
};

export type Guest = {
  __typename?: 'Guest';
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** Fetches an array of Rosters Guests */
  allRosterByGuest?: Maybe<Array<Maybe<Roster>>>;
  /** Fetches an array of Rosters */
  rosters?: Maybe<Array<Maybe<Roster>>>;
  rostersByGuests?: Maybe<Array<Maybe<Roster>>>;
};


export type QueryAllRosterByGuestArgs = {
  id: Scalars['ID'];
};


export type QueryRostersArgs = {
  createdBy: Scalars['ID'];
};

export type Roster = {
  __typename?: 'Roster';
  /** Created roster by */
  createdBy?: Maybe<Scalars['String']>;
  /** Array of Guests roster */
  guests?: Maybe<Array<Maybe<Guest>>>;
  /** Id of roster */
  id: Scalars['ID'];
  /** Title of roster */
  title?: Maybe<Scalars['String']>;
  /** Array of value roster */
  values?: Maybe<Array<Maybe<Value>>>;
};

export type Value = {
  __typename?: 'Value';
  categorie?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  value?: Maybe<Scalars['Int']>;
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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Guest: ResolverTypeWrapper<Guest>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Query: ResolverTypeWrapper<{}>;
  Roster: ResolverTypeWrapper<Roster>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Value: ResolverTypeWrapper<Value>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Guest: Guest;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Query: {};
  Roster: Roster;
  String: Scalars['String'];
  Value: Value;
};

export type GuestResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Guest'] = ResolversParentTypes['Guest']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  allRosterByGuest?: Resolver<Maybe<Array<Maybe<ResolversTypes['Roster']>>>, ParentType, ContextType, RequireFields<QueryAllRosterByGuestArgs, 'id'>>;
  rosters?: Resolver<Maybe<Array<Maybe<ResolversTypes['Roster']>>>, ParentType, ContextType, RequireFields<QueryRostersArgs, 'createdBy'>>;
  rostersByGuests?: Resolver<Maybe<Array<Maybe<ResolversTypes['Roster']>>>, ParentType, ContextType>;
};

export type RosterResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Roster'] = ResolversParentTypes['Roster']> = {
  createdBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  guests?: Resolver<Maybe<Array<Maybe<ResolversTypes['Guest']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['Value']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ValueResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Value'] = ResolversParentTypes['Value']> = {
  categorie?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = MyContext> = {
  Guest?: GuestResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Roster?: RosterResolvers<ContextType>;
  Value?: ValueResolvers<ContextType>;
};

