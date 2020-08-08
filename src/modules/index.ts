import { GraphQLModule } from '@graphql-modules/core'

import { CommonModule } from './common'
import { PingModule } from './ping'
import { TagsModule } from './tags'

export const MainModule = new GraphQLModule({
  imports: [CommonModule, PingModule, TagsModule],
})
