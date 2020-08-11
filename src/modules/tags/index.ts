import { GraphQLModule } from '@graphql-modules/core'

import { GraphRequestContext } from '../../types'
import { CommonModule } from '../common'
import { TransactionTagsModule } from '../transactionTags'

import { resolvers } from './resolvers'
import { typeDefs } from './type-defs'
import { AccountTransactionsModule } from '../accountTransactions'

export const TagsModule = new GraphQLModule({
  context: (session: GraphRequestContext): GraphRequestContext => session,
  imports: [CommonModule, TransactionTagsModule, AccountTransactionsModule],
  typeDefs,
  resolvers,
})
