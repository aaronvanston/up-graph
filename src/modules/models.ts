import { Transaction } from './schema'

export type TransactionModel = Omit<Transaction, 'account'> & {
  relationships?: {
    account: {
      data: {
        id: string
      }
    }
  }
}

export type TransactionModelResponse = {
  data: TransactionModel
}

export type TransactionsModelResponse = {
  data: TransactionModel[]
}
