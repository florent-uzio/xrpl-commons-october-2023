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

type RepayForm = {
  amount: string
}

/**
 * Component to allow the user to repay his entier loan.
 */
export const Repay = () => {
  const { register, handleSubmit } = useForm<RepayForm>()
  const { contract } = useWeb3()

  // call the contract to repay the loan
  const onSubmit: SubmitHandler<RepayForm> = async ({ amount }) => {
    if (!contract) return

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
            //isDisabled={!isAuthenticated || watch("amount") === ""}
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
