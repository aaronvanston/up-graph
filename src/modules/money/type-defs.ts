import { gql } from 'apollo-server-koa'

export const typeDefs = gql`
  type MoneyObject {
    currencyCode: String!
    value: String!
    valueInBaseUnits: Int!
  }
`
