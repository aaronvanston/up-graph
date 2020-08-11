import { GraphQLModule } from '@graphql-modules/core'

import { GraphRequestContext } from '../../types'

import { AccountsModule } from '../accounts'
import { AccountTransactionsModule } from '../accountTransactions'
import { CommonModule } from '../common'
import { DatetimeModule } from '../datetime'
import { MoneyModule } from '../money'
import { TransactionTagsModule } from '../transactionTags'

import { resolvers } from './resolvers'
import { typeDefs } from './type-defs'

export const TransactionsModule = new GraphQLModule({
  context: (session: GraphRequestContext): GraphRequestContext => session,
  imports: [
    AccountsModule,
    AccountTransactionsModule,
    CommonModule,
    DatetimeModule,
    MoneyModule,
    TransactionTagsModule,
  ],
  typeDefs,
  resolvers,
})
