import { GraphQLModule } from '@graphql-modules/core'

import { AccountsModule } from './accounts'
import { AccountTransactionsModule } from './accountTransactions'
import { CommonModule } from './common'
import { DatetimeModule } from './datetime'
import { MoneyModule } from './money'
import { PingModule } from './ping'
import { TagsModule } from './tags'
import { TransactionsModule } from './transactions'
import { TransactionTagsModule } from './transactionTags'
import { WebhooksModule } from './webhooks'

export const MainModule = new GraphQLModule({
  imports: [
    AccountsModule,
    AccountTransactionsModule,
    CommonModule,
    DatetimeModule,
    MoneyModule,
    PingModule,
    TagsModule,
    TransactionsModule,
    TransactionTagsModule,
    WebhooksModule,
  ],
})
