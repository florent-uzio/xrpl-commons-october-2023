import { useMemo } from "react"
import { SimpleBank__factory } from "../../contracts"
import SimpleBankJson from "../../contracts/contract-address.json"
import { useWeb3 } from "../contexts"

export const useContract = () => {
  const { state } = useWeb3()

  return useMemo(
    () => state.signer && SimpleBank__factory.connect(SimpleBankJson.address, state.signer),
    [state.signer],
  )
}
