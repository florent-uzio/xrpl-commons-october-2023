import { AccountNFTsRequest } from "xrpl"
import { getXrplClient } from "../../client"

const client = getXrplClient()

export const accountNfts = async (props: AccountNFTsRequest) => {
  const response = await client.request(props)
  console.log(JSON.stringify(response, null, 2))
}
