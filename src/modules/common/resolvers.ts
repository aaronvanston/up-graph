import { config } from '../../config'

export const resolvers = {
  Query: {
    version: () => config.version,
  },
}
