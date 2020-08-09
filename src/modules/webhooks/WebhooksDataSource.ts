import { RESTDataSourceWithAuth } from '../../data-sources/RESTDataSourceWithAuth'
import { Webhook, DeleteWebhookPayload, CreateWebhookInput } from '../schema'

export class WebhooksDataSource extends RESTDataSourceWithAuth {
  constructor(baseURL: string) {
    super()
    this.baseURL = baseURL
  }

  async getWebhooks(): Promise<Webhook[]> {
    const webhooks = await this.get('webhooks')
    return webhooks.data ?? null
  }

  async getWebhook(id: string): Promise<Webhook> {
    const webhook = await this.get(`webhooks/${id}`)
    return webhook.data ?? null
  }

  async createWebhook(
    createWebhookInput: CreateWebhookInput
  ): Promise<Webhook> {
    const newWebhook = await this.post('webhooks', {
      data: createWebhookInput,
    })
    return newWebhook.data ?? null
  }

  async deleteWebhook(id: string): Promise<DeleteWebhookPayload> {
    await this.delete(`webhooks/${id}`)
    return {
      id,
    }
  }
}
