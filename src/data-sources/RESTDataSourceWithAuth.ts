import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest'

export abstract class RESTDataSourceWithAuth extends RESTDataSource {
  protected willSendRequest(request: RequestOptions) {
    const { headers } = this.context.request

    request.headers.set('authorization', headers.authorization)
  }
}
