import { RESTDataSourceWithAuth } from '../../data-sources/RESTDataSourceWithAuth'
import { Transaction } from '../schema'

export class TransactionsDataSource extends RESTDataSourceWithAuth {
  constructor(baseURL: string) {
    super()
    this.baseURL = baseURL
  }

  async getTransactions(): Promise<Transaction[]> {
    const transactions = await this.get('transactions')
    return transactions.data ?? null
  }

  async getTransaction(id: string): Promise<Transaction> {
    const transaction = await this.get(`transactions/${id}`)
    return transaction.data ?? null
  }
}
