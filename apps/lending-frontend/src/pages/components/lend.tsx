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
  useToast,
} from "@chakra-ui/react"
import { ethers } from "ethers"
import { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { TypedListener } from "../../contracts/common"
import { useWeb3 } from "../../shared/contexts"
import { useContract } from "../../shared/hooks"

type LendForm = {
  amount: string
}

/**
 * Component that allows a user to request a loan from the bank.
 *
 * @returns A JSX.Element
 */
export const Lend = () => {
  const { register, handleSubmit, watch } = useForm<LendForm>()
  const contract = useContract()
  const {
    state: { isAuthenticated },
  } = useWeb3()
  const toast = useToast()

  // call the contract to issue a loan
  const onSubmit: SubmitHandler<LendForm> = async ({ amount }) => {
    if (!contract) return
    const convertedAmount = ethers.parseEther(amount)
    await contract.loan(ethers.toBigInt(convertedAmount))
  }

  useEffect(() => {
    if (!contract) return
    const event = contract.getEvent("Loaned")

    const showToast: TypedListener<typeof event> = (user, amount) => {
      toast({
        title: "Loan Issued Successfully",
        description: `${ethers.formatUnits(amount.toString(), "ether")} XRP borrowed to ${user}`,
        status: "success",
        isClosable: true,
      })
    }

    // show a toast upon receipt of the Deposited event
    contract.on(event, showToast)

    return () => {
      contract.removeListener(event, showToast)
    }
  }, [contract])

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
            isDisabled={!isAuthenticated || watch("amount") === ""}
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
