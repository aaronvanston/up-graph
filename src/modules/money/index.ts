import { GraphQLModule } from '@graphql-modules/core'

import { typeDefs } from './type-defs'

export const MoneyModule = new GraphQLModule({
  typeDefs,
})
