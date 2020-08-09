import { RESTDataSourceWithAuth } from '../../data-sources/RESTDataSourceWithAuth'

export class WebhooksDataSource extends RESTDataSourceWithAuth {
  constructor(baseURL: string) {
    super()
    this.baseURL = baseURL
  }

  async getWebhooks() {
    const webhooks = await this.get('webhooks')
    return webhooks.data ?? null
  }

  async getWebhook(id: string) {
    const webhook = await this.get(`webhooks/${id}`)
    return webhook.data ?? null
  }
}
