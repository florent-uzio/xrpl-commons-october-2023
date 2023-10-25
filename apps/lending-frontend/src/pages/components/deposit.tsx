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
import { useWeb3 } from "../../shared/contexts"

type DepositForm = {
  amount: string
}

/**
 * Component that renders a Card and the input to deposit XRP into the contract.
 *
 * @returns
 */
export const Deposit = () => {
  const { register, handleSubmit } = useForm<DepositForm>()

  const { contract } = useWeb3()

  const onSubmit: SubmitHandler<DepositForm> = async ({ amount }) => {
    // todo: code the deposit function
    if (!contract) return
    await contract.deposit({ value: ethers.parseEther(amount) })
  }

  return (
    <Card>
      <CardHeader>
        <Heading size="md">Deposit</Heading>
        <Text>Credit your account with some XRP</Text>
      </CardHeader>
      <CardBody>
        <Image
          borderRadius="2xl"
          maxW="400px"
          src="https://images.unsplash.com/photo-1607863680151-1da3e60691bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
          alt="Deposit"
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
            <Button mt="2" size="sm" type="submit">
              Deposit
            </Button>
          </FormControl>
        </form>
      </CardBody>
    </Card>
  )
}
