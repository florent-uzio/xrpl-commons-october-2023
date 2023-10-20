import { Transaction, multisign } from "xrpl"
import { getXrplClient } from "../client"
import { TxnOptions } from "../models"

type SignProps = Pick<TxnOptions, "wallet" | "showLogs"> & {
  txn: Transaction
  isMultisign?: boolean
  signers?: number
}

const client = getXrplClient()

/**
 * Helper to sign a transaction for a single or multi signature scenario.
 *
 * @returns A Signature object.
 */
export const sign = async ({ txn, isMultisign, showLogs = true, signers, wallet }: SignProps) => {
  if (signers && signers > 32) {
    throw new Error("signers must be between 1 and 32")
  }

  const prepared = await client.autofill(txn, signers)

  const signature = wallet.sign(prepared, isMultisign)

  if (showLogs) {
    console.log(signature)
  }

  return signature
}

/**
 * Helper to concatenate the signatures for a multisign transaction and submit the concatenation to the XRPL.
 *
 * @param {string[]} signatures All the signatures gathered for the multisign transaction.
 */
export const concatSignaturesAndSubmit = async (signatures: string[]) => {
  const multiSignatures = multisign(signatures)

  const response = await client.submitAndWait(multiSignatures)

  console.log(response)
}
