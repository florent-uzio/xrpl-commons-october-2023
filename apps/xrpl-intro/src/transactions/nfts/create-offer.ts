import { NFTokenCreateOffer } from "xrpl"
import { getXrplClient } from "../../client"
import { TransactionPropsForSingleSign } from "../../models"

const client = getXrplClient()

/**
 * Create an NFT Offer.
 * Important:
 * - For a SELL offer, define "Flags: NFTokenCreateOfferFlags.tfSellNFToken" and the Owner field must not be defined.
 * - For a BUY offer, "Flags" must be undefined and the Owner field must be set.
 *
 * @returns A TxResponse<NFTokenCreateOffer>.
 */

export const createOffer = async ({
  txn,
  wallet,
  showLogs = true,
}: TransactionPropsForSingleSign<NFTokenCreateOffer>) => {
  console.log("******* LET'S CREATE AN NFT OFFER *******")
  console.log()

  // todo: code the create NFT offer function

  // Prepare the transaction
  const transaction: NFTokenCreateOffer = {
    Account: wallet.address,
    TransactionType: "NFTokenCreateOffer",
    ...txn,
  }

  // Sign, submit and wait
  const response = await client.submitAndWait(transaction, {
    autofill: true,
    wallet,
  })

  console.log(response)
}
