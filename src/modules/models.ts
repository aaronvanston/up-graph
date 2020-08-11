import { Transaction, Tag } from './schema'

export type TransactionModel = Omit<
  Transaction,
  'account' | 'tags' | '__typename'
> & {
  relationships?: {
    account: {
      data: {
        id: string
      }
    }
    tags: {
      data: TagModel[]
    }
  }
}

export type TransactionModelResponse = {
  data: TransactionModel
}

export type TransactionsModelResponse = {
  data: TransactionModel[]
}

export type TagModel = Pick<Tag, 'id' | 'type'>
