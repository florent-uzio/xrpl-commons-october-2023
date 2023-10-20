import { EscrowCreate, NFTokenCreateOffer, NFTokenCreateOfferFlags, Transaction } from "xrpl"
import { TxnOptions } from "./txn-options"

export type TransactionPropsForMultiSign = TxnOptions & {
  isMultisign: true
}

// Props for the NFTokenCreateOffer transaction type
type NFTokenCreateOfferProps = Omit<NFTokenCreateOffer, "TransactionType" | "Account"> &
  (
    | { Flags: NFTokenCreateOfferFlags.tfSellNFToken; Owner?: never }
    | { Flags?: undefined; Owner: string }
  )

// Props for the EscrowCreate transaction type
type EscrowCreateProps = Omit<EscrowCreate, "TransactionType" | "Account"> &
  (
    | ({ CancelAfter: number } & (
        | { FinishAfter?: number; Condition: string }
        | { FinishAfter: number; Condition?: string }
      ))
    | { CancelAfter?: number; FinishAfter: number }
  )

export type TransactionPropsForSingleSign<T extends Transaction> = TxnOptions & {
  isMultisign?: false
  txn: T extends NFTokenCreateOffer
    ? NFTokenCreateOfferProps
    : T extends EscrowCreate
    ? EscrowCreateProps
    : Omit<T, "TransactionType" | "Account">
}
