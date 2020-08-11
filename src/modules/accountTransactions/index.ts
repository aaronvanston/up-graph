import { GraphQLModule } from '@graphql-modules/core'

import { GraphRequestContext } from '../../types'
import { CommonModule } from '../common'
import { DatetimeModule } from '../datetime'
import { MoneyModule } from '../money'
import { TransactionTagsModule } from '../transactionTags'

import { typeDefs } from './type-defs'

export const AccountTransactionsModule = new GraphQLModule({
  context: (session: GraphRequestContext): GraphRequestContext => session,
  imports: [CommonModule, DatetimeModule, MoneyModule, TransactionTagsModule],
  typeDefs,
})
