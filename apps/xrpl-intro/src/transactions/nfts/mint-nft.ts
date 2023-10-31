import { NFTokenMint, NFTokenMintFlags, convertStringToHex } from "xrpl"
import { getXrplClient } from "../../client"
import { TransactionPropsForSingleSign } from "../../models"

const client = getXrplClient()

export const mintNft = async ({
  wallet,
  txn,
  showLogs = true,
}: TransactionPropsForSingleSign<NFTokenMint>) => {
  console.log("LET'S MINT AN NFT")

  const { URI, Flags, ...rest } = txn

  // Step 1
  const transaction: NFTokenMint = {
    Account: wallet.address,
    TransactionType: "NFTokenMint",
    Flags: txn.Flags ?? NFTokenMintFlags.tfTransferable,
    URI: URI ? convertStringToHex(URI) : "",
    ...rest,
  }

  // Step 2 - Sign and Submit

  const response = await client.submitAndWait(transaction, {
    autofill: true,
    wallet,
  })

  if (showLogs) {
    console.log(response)
  }

  return response
}
