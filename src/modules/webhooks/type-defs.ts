import { gql } from 'apollo-server-koa'

export const typeDefs = gql`
  extend type Query {
    webhooks: [Webhook]!
    webhook(id: String!): Webhook
    webhookLogs(id: String!): [WebhookLog]!
    webhookPing(id: String!): WebhookEvent!
  }

  extend type Mutation {
    createWebhook(input: CreateWebhookInput!): Webhook!
    deleteWebhook(input: DeleteWebhookInput!): DeleteWebhookPayload!
  }

  type Webhook {
    type: String!
    id: String!
    attributes: WebhookAttributes!
    logs: [WebhookLog]!
  }

  type WebhookAttributes {
    url: String!
    description: String!
    secretKey: String
    createdAt: DateTime!
  }

  type WebhookLog {
    type: String!
    id: String!
    attributes: WebhookLogAttributes!
  }

  type WebhookLogAttributes {
    request: WebhookLogAttributeRequest!
    response: WebhookLogAttributeResponse
    deliveryStatus: WebhookDeliveryStatus!
    createdAt: DateTime!
  }

  type WebhookLogAttributeRequest {
    body: String!
  }

  type WebhookLogAttributeResponse {
    statusCode: Int!
    body: String!
  }

  enum WebhookDeliveryStatus {
    DELIVERED
    UNDELIVERABLE
    BAD_RESPONSE_CODE
  }

  type WebhookEvent {
    type: String!
    id: String!
    attributes: WebhookEventAttributes!
  }

  type WebhookEventAttributes {
    eventType: WebhookEventType!
    createdAt: DateTime!
  }

  enum WebhookEventType {
    TRANSACTION_CREATED
    TRANSACTION_SETTLED
    TRANSACTION_DELETED
    PING
  }

  input CreateWebhookInput {
    attributes: CreateWebhook_AttributesInput
  }

  input CreateWebhook_AttributesInput {
    url: String!
    description: String!
  }

  input DeleteWebhookInput {
    id: String!
  }

  type DeleteWebhookPayload {
    id: String!
  }

  type WebhooksResponse {
    data: [Webhook]!
  }

  type WebhookResponse {
    data: Webhook
  }

  type WebhookLogsResponse {
    data: [WebhookLog]!
  }

  type WebhookPingResponse {
    data: WebhookEvent
  }
`
