/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Lending, LendingInterface } from "../Lending";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMyBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "interestRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "lend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lentAmounts",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "lender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "repay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    name: "setInterestRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506005600281905550610a9b806100286000396000f3fe6080604052600436106100865760003560e01c80635f84f302116100595780635f84f302146101455780637c3a00fd1461016e5780638e5084e914610199578063a2fb342d146101d6578063d0e30db0146101ff57610086565b806322867d781461008b57806327e235e3146100b45780632e1a7d4d146100f15780634c7389091461011a575b600080fd5b34801561009757600080fd5b506100b260048036038101906100ad919061077f565b610209565b005b3480156100c057600080fd5b506100db60048036038101906100d691906107bf565b61033a565b6040516100e891906107fb565b60405180910390f35b3480156100fd57600080fd5b5061011860048036038101906101139190610816565b610352565b005b34801561012657600080fd5b5061012f610472565b60405161013c91906107fb565b60405180910390f35b34801561015157600080fd5b5061016c60048036038101906101679190610816565b6104b8565b005b34801561017a57600080fd5b506101836104c2565b60405161019091906107fb565b60405180910390f35b3480156101a557600080fd5b506101c060048036038101906101bb91906107bf565b6104c8565b6040516101cd91906107fb565b60405180910390f35b3480156101e257600080fd5b506101fd60048036038101906101f8919061077f565b6104e0565b005b61020761068f565b005b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561028b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610282906108a0565b60405180910390fd5b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546102da91906108ef565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461032f9190610923565b925050819055505050565b60006020528060005260406000206000915090505481565b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156103d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ca906109a3565b60405180910390fd5b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461042191906108ef565b925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561046e573d6000803e3d6000fd5b5050565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b8060028190555050565b60025481565b60016020528060005260406000206000915090505481565b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610561576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610558906109a3565b60405180910390fd5b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546105af91906108ef565b9250508190555080600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546106059190610923565b92505081905550600060646002548361061e91906109c3565b6106289190610a34565b905080826106369190610923565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546106839190610923565b92505081905550505050565b346000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546106dd9190610923565b92505081905550565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610716826106eb565b9050919050565b6107268161070b565b811461073157600080fd5b50565b6000813590506107438161071d565b92915050565b6000819050919050565b61075c81610749565b811461076757600080fd5b50565b60008135905061077981610753565b92915050565b60008060408385031215610796576107956106e6565b5b60006107a485828601610734565b92505060206107b58582860161076a565b9150509250929050565b6000602082840312156107d5576107d46106e6565b5b60006107e384828501610734565b91505092915050565b6107f581610749565b82525050565b600060208201905061081060008301846107ec565b92915050565b60006020828403121561082c5761082b6106e6565b5b600061083a8482850161076a565b91505092915050565b600082825260208201905092915050565b7f496e73756666696369656e7420626f72726f77656420616d6f756e7400000000600082015250565b600061088a601c83610843565b915061089582610854565b602082019050919050565b600060208201905081810360008301526108b98161087d565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006108fa82610749565b915061090583610749565b925082820390508181111561091d5761091c6108c0565b5b92915050565b600061092e82610749565b915061093983610749565b9250828201905080821115610951576109506108c0565b5b92915050565b7f496e73756666696369656e742062616c616e6365000000000000000000000000600082015250565b600061098d601483610843565b915061099882610957565b602082019050919050565b600060208201905081810360008301526109bc81610980565b9050919050565b60006109ce82610749565b91506109d983610749565b92508282026109e781610749565b915082820484148315176109fe576109fd6108c0565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610a3f82610749565b9150610a4a83610749565b925082610a5a57610a59610a05565b5b82820490509291505056fea2646970667358221220705b83221d5ac08a8f4a0c336c7021d1fa7efc255c8780e785d196341dc92e1664736f6c63430008130033";

type LendingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LendingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Lending__factory extends ContractFactory {
  constructor(...args: LendingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Lending & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Lending__factory {
    return super.connect(runner) as Lending__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LendingInterface {
    return new Interface(_abi) as LendingInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Lending {
    return new Contract(address, _abi, runner) as unknown as Lending;
  }
}