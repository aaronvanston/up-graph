import { Resolvers } from '../schema'

export const resolvers: Resolvers = {
  Query: {
    account: (_parent, { id }, { dataSources }) =>
      dataSources.accounts.getAccount(id),
    accounts: (_parent, _args, { dataSources }) =>
      dataSources.accounts.getAccounts(),
    accountTransactions: (_parent, { id }, { dataSources }) =>
      dataSources.accounts.getAccountTransactions(id),
  },
  Account: {
    transactions: (parent, _args, { dataSources }) =>
      dataSources.accounts.getAccountTransactions(parent.id),
  },
}
