import { RESTDataSourceWithAuth } from '../../data-sources/RESTDataSourceWithAuth'
import {
  Webhook,
  DeleteWebhookPayload,
  CreateWebhookInput,
  WebhookEvent,
  WebhookLog,
  WebhooksResponse,
  WebhookResponse,
  WebhookLogsResponse,
  WebhookPingResponse,
} from '../schema'

export class WebhooksDataSource extends RESTDataSourceWithAuth {
  constructor(baseURL: string) {
    super()
    this.baseURL = baseURL
  }

  async getWebhooks(): Promise<Webhook[]> {
    const webhooks = await this.get<WebhooksResponse>('webhooks')
    return webhooks.data ?? null
  }

  async getWebhook(id: string): Promise<Webhook> {
    const webhook = await this.get<WebhookResponse>(`webhooks/${id}`)
    return webhook.data ?? null
  }

  async getWebhookLogs(id: string): Promise<WebhookLog[]> {
    const webhookLogs = await this.get<WebhookLogsResponse>(
      `webhooks/${id}/logs`
    )
    return webhookLogs.data ?? null
  }

  async pingWebhook(id: string): Promise<WebhookEvent> {
    const webhookEvent = await this.post<WebhookPingResponse>(
      `webhooks/${id}/ping`
    )
    return webhookEvent.data ?? null
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
