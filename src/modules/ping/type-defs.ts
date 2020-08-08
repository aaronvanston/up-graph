import { gql } from 'apollo-server-koa'

export const typeDefs = gql`
  extend type Query {
    ping: Ping
  }

  type Ping {
    meta: Meta!
  }

  type Meta {
    id: String!
    statusEmoji: String!
  }
`
