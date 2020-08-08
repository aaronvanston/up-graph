import { RESTDataSource } from 'apollo-datasource-rest'

export class PingDataSource extends RESTDataSource {
  constructor(baseURL: string) {
    super()
    this.baseURL = baseURL
  }

  async getPing() {
    return this.get('util/ping')
  }
}
