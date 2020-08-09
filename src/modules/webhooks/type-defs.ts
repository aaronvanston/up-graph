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
    request: WebhookLogRequest!
    response: WebhookLogResponse
    deliveryStatus: WebhookDeliveryStatus!
    createdAt: DateTime!
  }

  type WebhookLogRequest {
    body: String!
  }

  type WebhookLogResponse {
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
`
