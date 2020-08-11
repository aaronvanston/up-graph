import { gql } from 'apollo-server-koa'

export const typeDefs = gql`
  extend type Query {
    transactions(filter: TagTransactionFilterInput): [Transaction]!
    transaction(id: String!): Transaction
  }

  extend type Mutation {
    createTransactionTags(input: TransactionTagsInput!): Transaction!
    deleteTransactionTags(input: TransactionTagsInput!): Transaction!
  }

  extend type Account {
    transactions: [Transaction]!
  }

  extend type Transaction {
    tags: [Tag]!
  }

  input TagTransactionFilterInput {
    tag: String
    until: DateTime
    since: DateTime
  }
`
