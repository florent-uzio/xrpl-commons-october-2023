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
import SimpleBank from "../../contracts/contract-address.json"
import { useWeb3 } from "../../shared/contexts"

type LendForm = {
  amount: string
}

export const Lend = () => {
  const { register, handleSubmit, watch } = useForm<LendForm>()
  const { currentAccount } = useWeb3()

  const onSubmit: SubmitHandler<LendForm> = async ({ amount }) => {
    const provider = new ethers.BrowserProvider(window.ethereum)

    const signer = await provider.getSigner()

    const contract = SimpleBank__factory.connect(SimpleBank.address, signer)

    const convertedAmount = ethers.parseEther(amount)
    await contract.loan(ethers.toBigInt(convertedAmount))
  }

  return (
    <Card>
      <CardHeader>
        <Heading size="md">Request Loan</Heading>
        <Text>Ask for a loan to the bank</Text>
      </CardHeader>
      <CardBody>
        <Image
          borderRadius="2xl"
          maxW="400px"
          src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
          alt="Lend"
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl mt="8">
            <FormLabel>Amount</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Text>XRP</Text>
              </InputLeftElement>
              <Input {...register("amount")} type="number" step=".01" />
            </InputGroup>
          </FormControl>

          <Button
            isDisabled={currentAccount === "" || watch("amount") === ""}
            mt="4"
            size="sm"
            type="submit"
          >
            Send
          </Button>
        </form>
      </CardBody>
    </Card>
  )
}
