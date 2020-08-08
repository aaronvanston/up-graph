import { Resolvers } from '../schema'

export const resolvers: Resolvers = {
  Query: {
    tags: (_parent, _args, { dataSources }) => dataSources.tags.getTags(),
  },
}
