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
    balance: AccountBalance!
    createdAt: DateTime!
  }

  type AccountBalance {
    currencyCode: String!
    value: String!
    valueInBaseUnits: Int!
  }

  enum AccountType {
    TRANSACTIONAL
    SAVER
  }
`
