import { ApolloServer } from 'apollo-server-koa'

import { PingDataSource } from './modules/data-sources'
import { config } from './config'
import { GraphDataSources } from './types'
import { MainModule } from './modules'
import { createContext } from './context'

const dataSources = (): GraphDataSources => ({
  ping: new PingDataSource(config.dataSources.up),
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