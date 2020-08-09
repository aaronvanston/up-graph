import { GraphQLModule } from '@graphql-modules/core'

import { AccountsModule } from './accounts'
import { CommonModule } from './common'
import { DatetimeModule } from './datetime'
import { MoneyModule } from './money'
import { PingModule } from './ping'
import { TagsModule } from './tags'
import { TransactionsModule } from './transactions'

export const MainModule = new GraphQLModule({
  imports: [
    AccountsModule,
    CommonModule,
    DatetimeModule,
    MoneyModule,
    PingModule,
    TagsModule,
    TransactionsModule,
  ],
})
