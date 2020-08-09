import { DataSource } from 'apollo-datasource'
import {
  AccountsDataSource,
  PingDataSource,
  TagsDataSource,
  TransactionsDataSource,
} from './modules/data-sources'

export interface GraphDataSources {
  accounts: AccountsDataSource
  ping: PingDataSource
  tags: TagsDataSource
  transactions: TransactionsDataSource

  [name: string]: DataSource<GraphRequestContext>
}

export interface GraphRequestHeaders {
  authorization?: string
  [index: string]: string | undefined
}

export interface GraphRequest {
  headers: GraphRequestHeaders
}

export interface GraphRequestContext {
  request: GraphRequest
  dataSources: GraphDataSources
}
