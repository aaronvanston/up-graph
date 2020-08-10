import { gql } from 'apollo-server-koa'

export const typeDefs = gql`
  extend type Query {
    accounts: [Account]
    account(id: String!): Account
    accountTransactions(id: String!): [Transaction]!
  }

  type Account {
    type: String!
    id: String!
    attributes: AccountAttributes!
    transactions: [Transaction]!
  }

  type AccountAttributes {
    displayName: String!
    accountType: AccountType
    balance: MoneyObject!
    createdAt: DateTime!
  }

  enum AccountType {
    TRANSACTIONAL
    SAVER
  }

  extend type Transaction {
    account: Account!
  }

  type AccountsResponse {
    data: [Account]!
  }

  type AccountResponse {
    data: Account
  }
`
