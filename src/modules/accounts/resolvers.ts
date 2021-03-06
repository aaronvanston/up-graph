import { Resolvers } from '../schema'

export const resolvers: Resolvers = {
  Query: {
    account: (_parent, { id }, { dataSources }) =>
      dataSources.accounts.getAccount(id),
    accounts: (_parent, _args, { dataSources }) =>
      dataSources.accounts.getAccounts(),
    accountTransactions: (_parent, { id }, { dataSources }) =>
      dataSources.transactions.geTransactionsByAccount(id),
  },
  Account: {
    transactions: (parent, _args, { dataSources }) =>
      dataSources.transactions.geTransactionsByAccount(parent.id),
  },
}
