import { RESTDataSourceWithAuth } from '../../data-sources/RESTDataSourceWithAuth'
import { TagsResponse, Tag } from '../schema'

export class TagsDataSource extends RESTDataSourceWithAuth {
  constructor(baseURL: string) {
    super()
    this.baseURL = baseURL
  }

  async getTags(): Promise<Tag[]> {
    const tags = await this.get<TagsResponse>('tags')

    return tags.data ?? null
  }
}
