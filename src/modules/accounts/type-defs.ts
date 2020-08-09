import { gql } from 'apollo-server-koa'

export const typeDefs = gql`
  extend type Query {
    accounts: [Account]
    account(id: String!): Account
  }

  type Account {
    type: String!
    id: String!
    attributes: AccountAttributes!
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
`
