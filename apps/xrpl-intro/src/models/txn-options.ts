import { Wallet } from "xrpl"

export type TxnOptions = {
  wallet: Wallet
  showLogs?: boolean
} & ( // if multi-signing, then we must include the signatures to submit the transaction
  | { isMultisign?: true; signatures: string[] }
  // If single signing, the function we define in each transaction file will handle the signing part
  | { isMultisign?: false; signatures?: never }
)
