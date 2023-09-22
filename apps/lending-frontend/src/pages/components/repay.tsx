import {
  Button,
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react"
import { ethers } from "ethers"
import { SubmitHandler, useForm } from "react-hook-form"
import { SimpleBank__factory } from "../../contracts"
import SimpleBankJson from "../../contracts/contract-address.json"
import { useWeb3 } from "../../shared/contexts"

type RepayForm = {
  amount: string
}

export const Repay = () => {
  const { register, handleSubmit, watch } = useForm<RepayForm>()
  const { currentAccount } = useWeb3()

  const onSubmit: SubmitHandler<RepayForm> = async ({ amount }) => {
    const provider = new ethers.BrowserProvider(window.ethereum)

    const signer = await provider.getSigner()

    const contract = SimpleBank__factory.connect(SimpleBankJson.address, signer)

    await contract.repayLoan({ value: ethers.parseEther(amount) })
  }

  return (
    <Card>
      <CardHeader>
        <Heading size="md">Repay</Heading>
        <Text>Repay your loan</Text>
      </CardHeader>
      <CardBody>
        <Image
          borderRadius="2xl"
          maxW="400px"
          src="https://images.mktw.net/im-507790?width=700&height=467"
          alt="Lend"
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl mt="8">
            <FormLabel>Amount</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Text>XRP</Text>
              </InputLeftElement>
              <Input {...register("amount")} type="number" step=".00001" />
            </InputGroup>
          </FormControl>

          <Button
            isDisabled={currentAccount === "" || watch("amount") === ""}
            mt="4"
            size="sm"
            type="submit"
          >
            Repay
          </Button>
        </form>
      </CardBody>
    </Card>
  )
}
