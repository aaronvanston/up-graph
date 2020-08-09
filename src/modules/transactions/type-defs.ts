import { gql } from 'apollo-server-koa'

export const typeDefs = gql`
  extend type Query {
    transactions: [Transaction]
    transaction(id: String!): Transaction
  }

  type Transaction {
    type: String!
    id: String!
    attributes: TransactionAttributes
  }

  type TransactionAttributes {
    status: TransactionStatus!
    rawText: String
    description: String!
    message: String
    holdInfo: HoldInfo
    roundUp: RoundUp
    cashback: Cashback
    amount: MoneyObject!
    foreignAmount: MoneyObject
    settledAt: DateTime
    createdAt: DateTime!
  }

  enum TransactionStatus {
    HELD
    SETTLED
  }

  type HoldInfo {
    amount: MoneyObject!
    foreignAmount: MoneyObject
  }

  type RoundUp {
    amount: MoneyObject!
    boostPortion: MoneyObject
  }

  type Cashback {
    description: String!
    amount: MoneyObject!
  }
`
