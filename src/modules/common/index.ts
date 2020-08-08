import { GraphQLModule } from '@graphql-modules/core'
import { gql } from 'apollo-server-koa'

import { config } from '../../config'

const resolvers = {
  Query: {
    version: () => config.version,
  },
}

const typeDefs = gql`
  type Query {
    version: String!
  }
  type Mutation {
    _empty: String
  }
`

export const CommonModule = new GraphQLModule({
  typeDefs,
  resolvers,
})
