import { NFTokenCreateOffer, NFTokenCreateOfferFlags, Transaction } from "xrpl"
import { TxnOptions } from "./txn-options"

export type TransactionPropsForMultiSign = TxnOptions & {
  isMultisign: true
}

// Props for the NFTokenCreateOffer transaction type
type NFTokenCreateOfferProps<T extends Transaction> = Omit<T, "TransactionType" | "Account"> &
  (
    | { Flags: NFTokenCreateOfferFlags.tfSellNFToken; Owner?: never }
    | { Flags?: undefined; Owner: string }
  )

export type TransactionPropsForSingleSign<T extends Transaction> = TxnOptions & {
  isMultisign?: false
  txn: T extends NFTokenCreateOffer
    ? NFTokenCreateOfferProps<T>
    : Omit<T, "TransactionType" | "Account">
}
