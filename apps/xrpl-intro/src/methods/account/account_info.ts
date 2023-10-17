import { AccountInfoRequest } from "xrpl"
import { getXrplClient } from "../../client"

const client = getXrplClient()

export const accountInfo = async (props: AccountInfoRequest) => {
  const response = await client.request(props)
  console.log(JSON.stringify(response, null, 2))
}
