import { RESTDataSourceWithAuth } from '../../data-sources/RESTDataSourceWithAuth'

export class PingDataSource extends RESTDataSourceWithAuth {
  constructor(baseURL: string) {
    super()
    this.baseURL = baseURL
  }

  async getPing() {
    return this.get('util/ping')
  }
}
