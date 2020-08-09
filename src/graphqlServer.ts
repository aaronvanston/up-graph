import { ApolloServer } from 'apollo-server-koa'

import {
  AccountsDataSource,
  PingDataSource,
  TagsDataSource,
  TransactionsDataSource,
  WebhooksDataSource,
} from './modules/data-sources'
import { config } from './config'
import { GraphDataSources } from './types'
import { MainModule } from './modules'
import { createContext } from './context'

const dataSources = (): GraphDataSources => ({
  accounts: new AccountsDataSource(config.dataSources.up),
  ping: new PingDataSource(config.dataSources.up),
  tags: new TagsDataSource(config.dataSources.up),
  transactions: new TransactionsDataSource(config.dataSources.up),
  webhooks: new WebhooksDataSource(config.dataSources.up),
})

const { schema } = MainModule

export const graphqlServer = new ApolloServer({
  schema,
  context: createContext,
  introspection: true,
  playground: true,
  debug: true,
  tracing: true,
  dataSources,
})
