import { gql } from 'apollo-server-koa'

export const typeDefs = gql`
  type Query {
    version: String!
  }
  type Mutation {
    _empty: String
  }
`
