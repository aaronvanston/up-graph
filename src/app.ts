import * as Koa from 'koa'

import { graphqlServer } from './graphqlServer'

const app = new Koa()

graphqlServer.applyMiddleware({
  app,
})

export default app
