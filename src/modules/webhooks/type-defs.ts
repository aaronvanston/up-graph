import { gql } from 'apollo-server-koa'

export const typeDefs = gql`
  extend type Query {
    webhooks: [Webhook]!
    webhook(id: String!): Webhook
  }

  extend type Mutation {
    createWebhook(input: CreateWebhookInput!): Webhook!
    deleteWebhook(input: DeleteWebhookInput!): DeleteWebhookPayload
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
