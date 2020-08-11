import { gql } from 'apollo-server-koa'

export const typeDefs = gql`
  extend type Query {
    tags: [Tag]!
  }

  type TagsResponse {
    data: [Tag]!
  }

  extend type Tag {
    transactions: [Transaction]!
  }
`
