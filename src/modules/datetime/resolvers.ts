import { GraphQLDate, GraphQLDateTime } from 'graphql-iso-date'

export const resolvers = {
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,
}
