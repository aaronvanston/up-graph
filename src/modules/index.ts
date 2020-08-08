import { GraphQLModule } from '@graphql-modules/core'
import { CommonModule } from './common'
import { PingModule } from './ping'

export const MainModule = new GraphQLModule({
  imports: [CommonModule, PingModule],
})
