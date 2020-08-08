import { RESTDataSourceWithAuth } from '../../data-sources/RESTDataSourceWithAuth'

export class TagsDataSource extends RESTDataSourceWithAuth {
  constructor(baseURL: string) {
    super()
    this.baseURL = baseURL
  }

  async getTags() {
    const tags = await this.get('tags')

    return tags.data ?? null
  }
}
