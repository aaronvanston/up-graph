import { gql } from 'apollo-server-koa'

export const typeDefs = gql`
  extend type Query {
    transactions: [Transaction]!
    transaction(id: String!): Transaction
  }

  extend type Mutation {
    createTransactionTags(input: TransactionTagsInput!): TransactionTagsPayload!
    deleteTransactionTags(input: TransactionTagsInput!): TransactionTagsPayload!
  }

  extend type Account {
    transactions: [Transaction]!
  }
`
