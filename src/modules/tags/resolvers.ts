import { Resolvers } from '../schema'

export const resolvers: Resolvers = {
  Query: {
    tags: (_parent, _args, { dataSources }) => dataSources.tags.getTags(),
  },
  Tag: {
    transactions: (parent, _args, { dataSources }) =>
      dataSources.transactions.getTransactions({
        tag: parent.id,
      }),
  },
}
