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

type RepayForm = {
  amount: string
}

/**
 * Component to allow the user to repay his entier loan.
 */
export const Repay = () => {
  const { register, handleSubmit, watch } = useForm<RepayForm>()
  const contract = useContract()
  const {
    state: { isAuthenticated },
  } = useWeb3()
  const toast = useToast()

  // call the contract to repay the loan
  const onSubmit: SubmitHandler<RepayForm> = async ({ amount }) => {
    if (!contract) return
    await contract.repayLoan({ value: ethers.parseEther(amount) })
  }

  useEffect(() => {
    if (!contract) return
    const event = contract.getEvent("LoanRepaid")

    const showToast: TypedListener<typeof event> = (user, amount) => {
      toast({
        title: "Loan Repaid Successfully",
        description: `${ethers.formatUnits(amount.toString(), "ether")} XRP repaid to ${user}`,
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
            isDisabled={!isAuthenticated || watch("amount") === ""}
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
