import { Resolvers } from '../schema'

export const resolvers: Resolvers = {
  Query: {
    transaction: (_parent, { id }, { dataSources }) =>
      dataSources.transactions.getTransaction(id),
    transactions: (_parent, _args, { dataSources }) =>
      dataSources.transactions.getTransactions(),
  },
  Mutation: {
    createTransactionTags: (_parent, { input }, { dataSources }) =>
      dataSources.transactions.addTransactionTags(input),
    deleteTransactionTags: (_parent, { input }, { dataSources }) =>
      dataSources.transactions.removeTransactionTags(input),
  },
}