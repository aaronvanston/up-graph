import { gql } from 'apollo-server-koa'

export const typeDefs = gql`
  extend type Query {
    webhooks: [Webhook]!
    webhook(id: String!): Webhook
  }

  type Webhook {
    type: String!
    id: String!
    attributes: WebhookAttributes!
  }

  type WebhookAttributes {
    url: String!
    description: String!
    secretKey: String!
    createdAt: DateTime!
  }
`
