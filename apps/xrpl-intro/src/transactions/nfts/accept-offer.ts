import { NFTokenAcceptOffer } from "xrpl"
import { getXrplClient } from "../../client"
import { TransactionPropsForSingleSign } from "../../models"

const client = getXrplClient()

export const acceptOffer = async ({
  txn,
  wallet,
  showLogs = true,
}: TransactionPropsForSingleSign<NFTokenAcceptOffer>) => {
  console.log("******* LET'S ACCEPT AN NFT OFFER *******")
  console.log()

  // Step 1
  const transaction: NFTokenAcceptOffer = {
    Account: wallet.address,
    TransactionType: "NFTokenAcceptOffer",
    ...txn,
  }

  // Step 2
  const result = await client.submitAndWait(transaction, {
    autofill: true,
    wallet,
  })

  console.log(result)

  return result
}
