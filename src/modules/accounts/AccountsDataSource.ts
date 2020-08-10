import { RESTDataSourceWithAuth } from '../../data-sources/RESTDataSourceWithAuth'
import { Account, AccountResponse, AccountsResponse } from '../schema'

export class AccountsDataSource extends RESTDataSourceWithAuth {
  constructor(baseURL: string) {
    super()
    this.baseURL = baseURL
  }

  async getAccounts(): Promise<Account[]> {
    const accounts = await this.get<AccountsResponse>('accounts')
    return accounts.data ?? null
  }

  async getAccount(id: string): Promise<Account> {
    const account = await this.get<AccountResponse>(`accounts/${id}`)
    return account.data ?? null
  }
}
