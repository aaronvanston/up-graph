import { RESTDataSourceWithAuth } from '../../data-sources/RESTDataSourceWithAuth'
import { Ping } from '../schema'

export class PingDataSource extends RESTDataSourceWithAuth {
  constructor(baseURL: string) {
    super()
    this.baseURL = baseURL
  }

  async getPing(): Promise<Ping> {
    return this.get<Ping>('util/ping')
  }
}
