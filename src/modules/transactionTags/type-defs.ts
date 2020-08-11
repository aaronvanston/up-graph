import { gql } from 'apollo-server-koa'

export const typeDefs = gql`
  type Tag {
    type: String!
    id: String!
  }
`
