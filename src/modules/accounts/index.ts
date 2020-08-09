import { GraphQLModule } from '@graphql-modules/core'

import { GraphRequestContext } from '../../types'
import { CommonModule } from '../common'
import { DatetimeModule } from '../datetime'

import { resolvers } from './resolvers'
import { typeDefs } from './type-defs'

export const AccountsModule = new GraphQLModule({
  context: (session: GraphRequestContext): GraphRequestContext => session,
  imports: [CommonModule, DatetimeModule],
  typeDefs,
  resolvers,
})
