import { GraphQLModule } from '@graphql-modules/core'

import { GraphRequestContext } from '../../types'
import { CommonModule } from '../common'

import { resolvers } from './resolvers'
import { typeDefs } from './type-defs'

export const TagsModule = new GraphQLModule({
  context: (session: GraphRequestContext): GraphRequestContext => session,
  imports: [CommonModule],
  typeDefs,
  resolvers,
})
