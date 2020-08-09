import { GraphQLModule } from '@graphql-modules/core'

import { AccountsModule } from './accounts'
import { CommonModule } from './common'
import { DatetimeModule } from './datetime'
import { PingModule } from './ping'
import { TagsModule } from './tags'

export const MainModule = new GraphQLModule({
  imports: [
    AccountsModule,
    CommonModule,
    DatetimeModule,
    PingModule,
    TagsModule,
  ],
})
