import { RESTDataSourceWithAuth } from '../../data-sources/RESTDataSourceWithAuth'
import { Account, Transaction } from '../schema'

export class AccountsDataSource extends RESTDataSourceWithAuth {
  constructor(baseURL: string) {
    super()
    this.baseURL = baseURL
  }

  async getAccounts(): Promise<Account[]> {
    const accounts = await this.get('accounts')
    return accounts.data ?? null
  }

  async getAccount(id: string): Promise<Account> {
    const account = await this.get(`accounts/${id}`)
    return account.data ?? null
  }

  async getAccountTransactions(id: string): Promise<Transaction[]> {
    const transactions = await this.get(`accounts/${id}/transactions`)
    return transactions.data ?? null
  }
}
