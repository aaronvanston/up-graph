import { GraphQLModule } from '@graphql-modules/core'

import { GraphRequestContext } from '../../types'
import { CommonModule } from '../common'
import { DatetimeModule } from '../datetime'
import { MoneyModule } from '../money'
import { TagsModule } from '../tags'

import { resolvers } from './resolvers'
import { typeDefs } from './type-defs'

export const TransactionsModule = new GraphQLModule({
  context: (session: GraphRequestContext): GraphRequestContext => session,
  imports: [CommonModule, DatetimeModule, MoneyModule, TagsModule],
  typeDefs,
  resolvers,
})