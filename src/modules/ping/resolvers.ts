import { Resolvers } from '../schema'

export const resolvers: Resolvers = {
  Query: {
    ping: (_parent, _args, { dataSources }) => dataSources.ping.getPing(),
  },
}
