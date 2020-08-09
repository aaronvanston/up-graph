import { RESTDataSourceWithAuth } from '../../data-sources/RESTDataSourceWithAuth'

export class AccountsDataSource extends RESTDataSourceWithAuth {
  constructor(baseURL: string) {
    super()
    this.baseURL = baseURL
  }

  async getAccounts() {
    const accounts = await this.get('accounts')
    return accounts.data ?? null
  }

  async getAccount(id: string) {
    const account = await this.get(`accounts/${id}`)
    return account.data ?? null
  }
}
