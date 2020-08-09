import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphRequestContext } from '../types';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: Date;
  DateTime: Date;
};

export type Query = {
  __typename?: 'Query';
  version: Scalars['String'];
  accounts?: Maybe<Array<Maybe<Account>>>;
  account?: Maybe<Account>;
  ping?: Maybe<Ping>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  transactions?: Maybe<Array<Maybe<Transaction>>>;
  transaction?: Maybe<Transaction>;
  webhooks: Array<Maybe<Webhook>>;
  webhook?: Maybe<Webhook>;
  webhookLogs: Array<Maybe<WebhookLog>>;
  webhookPing: WebhookEvent;
};


export type QueryAccountArgs = {
  id: Scalars['String'];
};


export type QueryTransactionArgs = {
  id: Scalars['String'];
};


export type QueryWebhookArgs = {
  id: Scalars['String'];
};


export type QueryWebhookLogsArgs = {
  id: Scalars['String'];
};


export type QueryWebhookPingArgs = {
  id: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
  createWebhook: Webhook;
  deleteWebhook?: Maybe<DeleteWebhookPayload>;
};


export type MutationCreateWebhookArgs = {
  input: CreateWebhookInput;
};


export type MutationDeleteWebhookArgs = {
  input: DeleteWebhookInput;
};



export type MoneyObject = {
  __typename?: 'MoneyObject';
  currencyCode: Scalars['String'];
  value: Scalars['String'];
  valueInBaseUnits: Scalars['Int'];
};

export type Account = {
  __typename?: 'Account';
  type: Scalars['String'];
  id: Scalars['String'];
  attributes: AccountAttributes;
};

export type AccountAttributes = {
  __typename?: 'AccountAttributes';
  displayName: Scalars['String'];
  accountType?: Maybe<AccountType>;
  balance: MoneyObject;
  createdAt: Scalars['DateTime'];
};

export enum AccountType {
  Transactional = 'TRANSACTIONAL',
  Saver = 'SAVER'
}

export type Ping = {
  __typename?: 'Ping';
  meta: Meta;
};

export type Meta = {
  __typename?: 'Meta';
  id: Scalars['String'];
  statusEmoji: Scalars['String'];
};

export type Tag = {
  __typename?: 'Tag';
  type: Scalars['String'];
  id: Scalars['String'];
};

export type Transaction = {
  __typename?: 'Transaction';
  type: Scalars['String'];
  id: Scalars['String'];
  attributes?: Maybe<TransactionAttributes>;
};

export type TransactionAttributes = {
  __typename?: 'TransactionAttributes';
  status: TransactionStatus;
  rawText?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  holdInfo?: Maybe<HoldInfo>;
  roundUp?: Maybe<RoundUp>;
  cashback?: Maybe<Cashback>;
  amount: MoneyObject;
  foreignAmount?: Maybe<MoneyObject>;
  settledAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
};

export enum TransactionStatus {
  Held = 'HELD',
  Settled = 'SETTLED'
}

export type HoldInfo = {
  __typename?: 'HoldInfo';
  amount: MoneyObject;
  foreignAmount?: Maybe<MoneyObject>;
};

export type RoundUp = {
  __typename?: 'RoundUp';
  amount: MoneyObject;
  boostPortion?: Maybe<MoneyObject>;
};

export type Cashback = {
  __typename?: 'Cashback';
  description: Scalars['String'];
  amount: MoneyObject;
};

export type Webhook = {
  __typename?: 'Webhook';
  type: Scalars['String'];
  id: Scalars['String'];
  attributes: WebhookAttributes;
};

export type WebhookAttributes = {
  __typename?: 'WebhookAttributes';
  url: Scalars['String'];
  description: Scalars['String'];
  secretKey?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
};

export type WebhookLog = {
  __typename?: 'WebhookLog';
  type: Scalars['String'];
  id: Scalars['String'];
  attributes: WebhookLogAttributes;
};

export type WebhookLogAttributes = {
  __typename?: 'WebhookLogAttributes';
  request: WebhookLogRequest;
  response?: Maybe<WebhookLogResponse>;
  deliveryStatus: WebhookDeliveryStatus;
  createdAt: Scalars['DateTime'];
};

export type WebhookLogRequest = {
  __typename?: 'WebhookLogRequest';
  body: Scalars['String'];
};

export type WebhookLogResponse = {
  __typename?: 'WebhookLogResponse';
  statusCode: Scalars['Int'];
  body: Scalars['String'];
};

export enum WebhookDeliveryStatus {
  Delivered = 'DELIVERED',
  Undeliverable = 'UNDELIVERABLE',
  BadResponseCode = 'BAD_RESPONSE_CODE'
}

export type WebhookEvent = {
  __typename?: 'WebhookEvent';
  type: Scalars['String'];
  id: Scalars['String'];
  attributes: WebhookEventAttributes;
};

export type WebhookEventAttributes = {
  __typename?: 'WebhookEventAttributes';
  eventType: WebhookEventType;
  createdAt: Scalars['DateTime'];
};

export enum WebhookEventType {
  TransactionCreated = 'TRANSACTION_CREATED',
  TransactionSettled = 'TRANSACTION_SETTLED',
  TransactionDeleted = 'TRANSACTION_DELETED',
  Ping = 'PING'
}

export type CreateWebhookInput = {
  attributes?: Maybe<CreateWebhookAttributesInput>;
};

export type CreateWebhookAttributesInput = {
  url: Scalars['String'];
  description: Scalars['String'];
};

export type DeleteWebhookInput = {
  id: Scalars['String'];
};

export type DeleteWebhookPayload = {
  __typename?: 'DeleteWebhookPayload';
  id: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

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

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

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
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Mutation: ResolverTypeWrapper<{}>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  MoneyObject: ResolverTypeWrapper<MoneyObject>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Account: ResolverTypeWrapper<Account>;
  AccountAttributes: ResolverTypeWrapper<AccountAttributes>;
  AccountType: AccountType;
  Ping: ResolverTypeWrapper<Ping>;
  Meta: ResolverTypeWrapper<Meta>;
  Tag: ResolverTypeWrapper<Tag>;
  Transaction: ResolverTypeWrapper<Transaction>;
  TransactionAttributes: ResolverTypeWrapper<TransactionAttributes>;
  TransactionStatus: TransactionStatus;
  HoldInfo: ResolverTypeWrapper<HoldInfo>;
  RoundUp: ResolverTypeWrapper<RoundUp>;
  Cashback: ResolverTypeWrapper<Cashback>;
  Webhook: ResolverTypeWrapper<Webhook>;
  WebhookAttributes: ResolverTypeWrapper<WebhookAttributes>;
  WebhookLog: ResolverTypeWrapper<WebhookLog>;
  WebhookLogAttributes: ResolverTypeWrapper<WebhookLogAttributes>;
  WebhookLogRequest: ResolverTypeWrapper<WebhookLogRequest>;
  WebhookLogResponse: ResolverTypeWrapper<WebhookLogResponse>;
  WebhookDeliveryStatus: WebhookDeliveryStatus;
  WebhookEvent: ResolverTypeWrapper<WebhookEvent>;
  WebhookEventAttributes: ResolverTypeWrapper<WebhookEventAttributes>;
  WebhookEventType: WebhookEventType;
  CreateWebhookInput: CreateWebhookInput;
  CreateWebhook_AttributesInput: CreateWebhookAttributesInput;
  DeleteWebhookInput: DeleteWebhookInput;
  DeleteWebhookPayload: ResolverTypeWrapper<DeleteWebhookPayload>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  String: Scalars['String'];
  Mutation: {};
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  MoneyObject: MoneyObject;
  Int: Scalars['Int'];
  Account: Account;
  AccountAttributes: AccountAttributes;
  Ping: Ping;
  Meta: Meta;
  Tag: Tag;
  Transaction: Transaction;
  TransactionAttributes: TransactionAttributes;
  HoldInfo: HoldInfo;
  RoundUp: RoundUp;
  Cashback: Cashback;
  Webhook: Webhook;
  WebhookAttributes: WebhookAttributes;
  WebhookLog: WebhookLog;
  WebhookLogAttributes: WebhookLogAttributes;
  WebhookLogRequest: WebhookLogRequest;
  WebhookLogResponse: WebhookLogResponse;
  WebhookEvent: WebhookEvent;
  WebhookEventAttributes: WebhookEventAttributes;
  CreateWebhookInput: CreateWebhookInput;
  CreateWebhook_AttributesInput: CreateWebhookAttributesInput;
  DeleteWebhookInput: DeleteWebhookInput;
  DeleteWebhookPayload: DeleteWebhookPayload;
  Boolean: Scalars['Boolean'];
};

export type QueryResolvers<ContextType = GraphRequestContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  version?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  accounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Account']>>>, ParentType, ContextType>;
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryAccountArgs, 'id'>>;
  ping?: Resolver<Maybe<ResolversTypes['Ping']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType>;
  transactions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Transaction']>>>, ParentType, ContextType>;
  transaction?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<QueryTransactionArgs, 'id'>>;
  webhooks?: Resolver<Array<Maybe<ResolversTypes['Webhook']>>, ParentType, ContextType>;
  webhook?: Resolver<Maybe<ResolversTypes['Webhook']>, ParentType, ContextType, RequireFields<QueryWebhookArgs, 'id'>>;
  webhookLogs?: Resolver<Array<Maybe<ResolversTypes['WebhookLog']>>, ParentType, ContextType, RequireFields<QueryWebhookLogsArgs, 'id'>>;
  webhookPing?: Resolver<ResolversTypes['WebhookEvent'], ParentType, ContextType, RequireFields<QueryWebhookPingArgs, 'id'>>;
};

export type MutationResolvers<ContextType = GraphRequestContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createWebhook?: Resolver<ResolversTypes['Webhook'], ParentType, ContextType, RequireFields<MutationCreateWebhookArgs, 'input'>>;
  deleteWebhook?: Resolver<Maybe<ResolversTypes['DeleteWebhookPayload']>, ParentType, ContextType, RequireFields<MutationDeleteWebhookArgs, 'input'>>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MoneyObjectResolvers<ContextType = GraphRequestContext, ParentType extends ResolversParentTypes['MoneyObject'] = ResolversParentTypes['MoneyObject']> = {
  currencyCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  valueInBaseUnits?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type AccountResolvers<ContextType = GraphRequestContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = {
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  attributes?: Resolver<ResolversTypes['AccountAttributes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type AccountAttributesResolvers<ContextType = GraphRequestContext, ParentType extends ResolversParentTypes['AccountAttributes'] = ResolversParentTypes['AccountAttributes']> = {
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  accountType?: Resolver<Maybe<ResolversTypes['AccountType']>, ParentType, ContextType>;
  balance?: Resolver<ResolversTypes['MoneyObject'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PingResolvers<ContextType = GraphRequestContext, ParentType extends ResolversParentTypes['Ping'] = ResolversParentTypes['Ping']> = {
  meta?: Resolver<ResolversTypes['Meta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MetaResolvers<ContextType = GraphRequestContext, ParentType extends ResolversParentTypes['Meta'] = ResolversParentTypes['Meta']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  statusEmoji?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TagResolvers<ContextType = GraphRequestContext, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = {
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TransactionResolvers<ContextType = GraphRequestContext, ParentType extends ResolversParentTypes['Transaction'] = ResolversParentTypes['Transaction']> = {
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  attributes?: Resolver<Maybe<ResolversTypes['TransactionAttributes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TransactionAttributesResolvers<ContextType = GraphRequestContext, ParentType extends ResolversParentTypes['TransactionAttributes'] = ResolversParentTypes['TransactionAttributes']> = {
  status?: Resolver<ResolversTypes['TransactionStatus'], ParentType, ContextType>;
  rawText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  holdInfo?: Resolver<Maybe<ResolversTypes['HoldInfo']>, ParentType, ContextType>;
  roundUp?: Resolver<Maybe<ResolversTypes['RoundUp']>, ParentType, ContextType>;
  cashback?: Resolver<Maybe<ResolversTypes['Cashback']>, ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['MoneyObject'], ParentType, ContextType>;
  foreignAmount?: Resolver<Maybe<ResolversTypes['MoneyObject']>, ParentType, ContextType>;
  settledAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type HoldInfoResolvers<ContextType = GraphRequestContext, ParentType extends ResolversParentTypes['HoldInfo'] = ResolversParentTypes['HoldInfo']> = {
  amount?: Resolver<ResolversTypes['MoneyObject'], ParentType, ContextType>;
  foreignAmount?: Resolver<Maybe<ResolversTypes['MoneyObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type RoundUpResolvers<ContextType = GraphRequestContext, ParentType extends ResolversParentTypes['RoundUp'] = ResolversParentTypes['RoundUp']> = {
  amount?: Resolver<ResolversTypes['MoneyObject'], ParentType, ContextType>;
  boostPortion?: Resolver<Maybe<ResolversTypes['MoneyObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CashbackResolvers<ContextType = GraphRequestContext, ParentType extends ResolversParentTypes['Cashback'] = ResolversParentTypes['Cashback']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['MoneyObject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type WebhookResolvers<ContextType = GraphRequestContext, ParentType extends ResolversParentTypes['Webhook'] = ResolversParentTypes['Webhook']> = {
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  attributes?: Resolver<ResolversTypes['WebhookAttributes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type WebhookAttributesResolvers<ContextType = GraphRequestContext, ParentType extends ResolversParentTypes['WebhookAttributes'] = ResolversParentTypes['WebhookAttributes']> = {
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  secretKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type WebhookLogResolvers<ContextType = GraphRequestContext, ParentType extends ResolversParentTypes['WebhookLog'] = ResolversParentTypes['WebhookLog']> = {
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  attributes?: Resolver<ResolversTypes['WebhookLogAttributes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type WebhookLogAttributesResolvers<ContextType = GraphRequestContext, ParentType extends ResolversParentTypes['WebhookLogAttributes'] = ResolversParentTypes['WebhookLogAttributes']> = {
  request?: Resolver<ResolversTypes['WebhookLogRequest'], ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['WebhookLogResponse']>, ParentType, ContextType>;
  deliveryStatus?: Resolver<ResolversTypes['WebhookDeliveryStatus'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type WebhookLogRequestResolvers<ContextType = GraphRequestContext, ParentType extends ResolversParentTypes['WebhookLogRequest'] = ResolversParentTypes['WebhookLogRequest']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type WebhookLogResponseResolvers<ContextType = GraphRequestContext, ParentType extends ResolversParentTypes['WebhookLogResponse'] = ResolversParentTypes['WebhookLogResponse']> = {
  statusCode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type WebhookEventResolvers<ContextType = GraphRequestContext, ParentType extends ResolversParentTypes['WebhookEvent'] = ResolversParentTypes['WebhookEvent']> = {
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  attributes?: Resolver<ResolversTypes['WebhookEventAttributes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type WebhookEventAttributesResolvers<ContextType = GraphRequestContext, ParentType extends ResolversParentTypes['WebhookEventAttributes'] = ResolversParentTypes['WebhookEventAttributes']> = {
  eventType?: Resolver<ResolversTypes['WebhookEventType'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type DeleteWebhookPayloadResolvers<ContextType = GraphRequestContext, ParentType extends ResolversParentTypes['DeleteWebhookPayload'] = ResolversParentTypes['DeleteWebhookPayload']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = GraphRequestContext> = {
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  MoneyObject?: MoneyObjectResolvers<ContextType>;
  Account?: AccountResolvers<ContextType>;
  AccountAttributes?: AccountAttributesResolvers<ContextType>;
  Ping?: PingResolvers<ContextType>;
  Meta?: MetaResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  Transaction?: TransactionResolvers<ContextType>;
  TransactionAttributes?: TransactionAttributesResolvers<ContextType>;
  HoldInfo?: HoldInfoResolvers<ContextType>;
  RoundUp?: RoundUpResolvers<ContextType>;
  Cashback?: CashbackResolvers<ContextType>;
  Webhook?: WebhookResolvers<ContextType>;
  WebhookAttributes?: WebhookAttributesResolvers<ContextType>;
  WebhookLog?: WebhookLogResolvers<ContextType>;
  WebhookLogAttributes?: WebhookLogAttributesResolvers<ContextType>;
  WebhookLogRequest?: WebhookLogRequestResolvers<ContextType>;
  WebhookLogResponse?: WebhookLogResponseResolvers<ContextType>;
  WebhookEvent?: WebhookEventResolvers<ContextType>;
  WebhookEventAttributes?: WebhookEventAttributesResolvers<ContextType>;
  DeleteWebhookPayload?: DeleteWebhookPayloadResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = GraphRequestContext> = Resolvers<ContextType>;
