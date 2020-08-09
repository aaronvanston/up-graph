import { Resolvers } from '../schema'

export const resolvers: Resolvers = {
  Query: {
    webhook: (_parent, { id }, { dataSources }) =>
      dataSources.webhooks.getWebhook(id),
    webhooks: (_parent, _args, { dataSources }) =>
      dataSources.webhooks.getWebhooks(),
  },
  Mutation: {
    createWebhook: (_parent, { input }, { dataSources }) =>
      dataSources.webhooks.createWebhook(input),
    deleteWebhook: (_parent, { input }, { dataSources }) =>
      dataSources.webhooks.deleteWebhook(input.id),
  },
}
