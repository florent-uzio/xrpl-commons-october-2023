import fs from "fs"
import { ethers } from "hardhat"
import path from "path"

async function main() {
  const contract = await ethers.deployContract("SimpleBank")

  await contract.waitForDeployment()

  console.log(`SimpleBank deployed to ${contract.target}`)

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(contract)
}

function saveFrontendFiles(contract: any) {
  const contractsDir = path.join(__dirname, "../..", "lending-frontend", "src", "contracts")

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir)
  }

  const typechainDir = path.join(__dirname, "..", "typechain-types")
  fs.cpSync(typechainDir, contractsDir, { recursive: true })
  console.log("Copied content of typechain-types into frontend directory")

  fs.writeFileSync(
    path.join(contractsDir, "contract-address.json"),
    JSON.stringify({ address: contract.target }, undefined, 2),
  )
  console.log("Contract address written in contract-address.json in the frontend")
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
