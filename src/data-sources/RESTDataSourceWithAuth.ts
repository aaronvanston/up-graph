import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest'

export abstract class RESTDataSourceWithAuth extends RESTDataSource {
  protected willSendRequest(request: RequestOptions) {
    const { headers } = this.context.request

    request.headers.set('authorization', headers.authorization)

    // Parse body of delete request if its a string.
    // This is a workaround for `apollo-datasource-rest` as it does not
    // support a body obejct for delete requests.
    if (typeof request.body === 'string' && request.method === 'DELETE') {
      request.body = JSON.parse(request.body)
    }
  }
}
