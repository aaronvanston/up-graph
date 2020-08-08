import { DataSource } from 'apollo-datasource'
import { PingDataSource } from './modules/data-sources'

export interface GraphDataSources {
  ping: PingDataSource

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
