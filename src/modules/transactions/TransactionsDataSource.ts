import * as qs from 'qs'
import { RESTDataSourceWithAuth } from '../../data-sources/RESTDataSourceWithAuth'
import { TransactionTagsInput, TagTransactionFilterInput } from '../schema'
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

  async getTransactions(
    filter: TagTransactionFilterInput
  ): Promise<TransactionModel[]> {
    const filterString = qs.stringify({ filter }, { encode: false })
    const transactions = await this.get<TransactionsModelResponse>(
      'transactions',
      filterString
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
  ): Promise<TransactionModel> {
    const { id, tags } = createTransactionTagsInput
    await this.post(`transactions/${id}/relationships/tags`, {
      data: tags,
    })

    return this.getTransaction(id)
  }

  async removeTransactionTags(
    deleteTransactionTagsInput: TransactionTagsInput
  ): Promise<TransactionModel> {
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
    return this.getTransaction(id)
  }
}
