import { Resolvers } from '../schema'

export const resolvers: Resolvers = {
  Query: {
    transaction: (_parent, { id }, { dataSources }) =>
      dataSources.transactions.getTransaction(id),
    transactions: (_parent, _args, { dataSources }) =>
      dataSources.transactions.getTransactions(),
  },
}
