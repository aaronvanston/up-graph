import { GraphRequest, GraphRequestContext } from '../types'

export const createContext = ({
  ctx,
}: {
  ctx?: { request: GraphRequest }
}): Partial<GraphRequestContext> => {
  if (!ctx) {
    return {}
  }

  const { request } = ctx
  return { request }
}
