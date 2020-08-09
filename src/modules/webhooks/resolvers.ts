import { Resolvers } from '../schema'

export const resolvers: Resolvers = {
  Query: {
    webhook: (_parent, { id }, { dataSources }) =>
      dataSources.webhooks.getWebhook(id),
    webhookLogs: (_parent, { id }, { dataSources }) =>
      dataSources.webhooks.getWebhookLogs(id),
    webhookPing: (_parent, { id }, { dataSources }) =>
      dataSources.webhooks.pingWebhook(id),
    webhooks: (_parent, _args, { dataSources }) =>
      dataSources.webhooks.getWebhooks(),
  },
  Mutation: {
    createWebhook: (_parent, { input }, { dataSources }) =>
      dataSources.webhooks.createWebhook(input),
    deleteWebhook: (_parent, { input }, { dataSources }) =>
      dataSources.webhooks.deleteWebhook(input.id),
  },

  Webhook: {
    logs: (parent, _args, { dataSources }) =>
      dataSources.webhooks.getWebhookLogs(parent.id),
  },
}
