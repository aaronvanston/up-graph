import { RESTDataSourceWithAuth } from '../../data-sources/RESTDataSourceWithAuth'
import { TransactionTagsInput, TransactionTagsPayload } from '../schema'
import {
  TransactionModel,
  TransactionModelResponse,
  TransactionsModelResponse,
} from '../models'

export class TransactionsDataSource extends RESTDataSourceWithAuth {
  constructor(baseURL: string) {
    super()
    this.baseURL = baseURL
  }

  async getTransactions(): Promise<TransactionModel[]> {
    const transactions = await this.get<TransactionsModelResponse>(
      'transactions'
    )
    return transactions.data ?? null
  }

  async getTransaction(id: string): Promise<TransactionModel> {
    const transaction = await this.get<TransactionModelResponse>(
      `transactions/${id}`
    )
    return transaction.data ?? null
  }

  async geTransactionsByAccount(id: string): Promise<TransactionModel[]> {
    const transactions = await this.get<TransactionsModelResponse>(
      `accounts/${id}/transactions`
    )
    return transactions.data ?? null
  }

  async addTransactionTags(
    createTransactionTagsInput: TransactionTagsInput
  ): Promise<TransactionTagsPayload> {
    const { id, tags } = createTransactionTagsInput
    await this.post(`transactions/${id}/relationships/tags`, {
      data: tags,
    })
    return { tags }
  }

  async removeTransactionTags(
    deleteTransactionTagsInput: TransactionTagsInput
  ): Promise<TransactionTagsPayload> {
    const { id, tags } = deleteTransactionTagsInput

    // Issue with apollo-datasource-rest means DELETE requests cannot include
    // a body. Using the 3rd arugment for this.delete, init we can send it
    // through. Within RESTDataSourceWithAuth, pasing back the body into a
    // JSON Object
    await this.delete(`transactions/${id}/relationships/tags`, undefined, {
      body: JSON.stringify({
        data: tags,
      }),
    })
    return { tags }
  }
}
