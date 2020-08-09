import { RESTDataSourceWithAuth } from '../../data-sources/RESTDataSourceWithAuth'

export class TransactionsDataSource extends RESTDataSourceWithAuth {
  constructor(baseURL: string) {
    super()
    this.baseURL = baseURL
  }

  async getTransactions() {
    const transactions = await this.get('transactions')
    return transactions.data ?? null
  }

  async getTransaction(id: string) {
    const transaction = await this.get(`transactions/${id}`)
    return transaction.data ?? null
  }
}
