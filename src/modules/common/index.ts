import { GraphQLModule } from '@graphql-modules/core'

import { resolvers } from './resolvers'
import { typeDefs } from './type-defs'

export const CommonModule = new GraphQLModule({
  typeDefs,
  resolvers,
})
