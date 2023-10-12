import { Transaction } from "xrpl"
import { TxnOptions } from "./txn-options"

export type TransactionPropsForMultiSign = TxnOptions & {
  isMultisign: true
}

export type TransactionPropsForSingleSign<T extends Transaction> = TxnOptions & {
  isMultisign?: false
  txn: Omit<T, "TransactionType" | "Account">
}
