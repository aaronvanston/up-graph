import { gql } from 'apollo-server-koa'

export const typeDefs = gql`
  extend type Query {
    tags: [Tag]
  }

  type Tag {
    type: String!
    id: String!
  }
`
