import { Resolvers } from '../schema'

export const resolvers: Resolvers = {
  Query: {
    transaction: (_parent, { id }, { dataSources }) =>
      dataSources.transactions.getTransaction(id),
    transactions: (_parent, { filter }, { dataSources }) =>
      dataSources.transactions.getTransactions(filter),
  },
  Mutation: {
    createTransactionTags: (_parent, { input }, { dataSources }) =>
      dataSources.transactions.addTransactionTags(input),
    deleteTransactionTags: (_parent, { input }, { dataSources }) =>
      dataSources.transactions.removeTransactionTags(input),
  },

  Transaction: {
    account: async (parent, _args, { dataSources }) =>
      dataSources.accounts.getAccount(parent.relationships.account.data.id),
  },
}
