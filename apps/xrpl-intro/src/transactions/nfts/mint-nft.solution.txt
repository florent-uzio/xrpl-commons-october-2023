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

  // extract properties we will use below
  const { URI, Flags, ...rest } = txn

  // Construct the base transaction
  const nfTokenMint: NFTokenMint = {
    TransactionType: "NFTokenMint",
    Account: wallet.address,
    Flags: Flags ?? NFTokenMintFlags.tfTransferable,
    URI: URI ? convertStringToHex(URI) : "",
    ...rest,
  }

  const response = await client.submitAndWait(nfTokenMint, {
    autofill: true,
    wallet,
  })

  if (showLogs) {
    console.log(response)
  }

  return response
}
