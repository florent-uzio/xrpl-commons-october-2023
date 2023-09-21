import fs from "fs"
import { artifacts, ethers } from "hardhat"
import path from "path"
import { Lending } from "../typechain-types"

async function main() {
  const lending = await ethers.deployContract("Lending")

  await lending.waitForDeployment()

  console.log(`Lending deployed to ${lending.target}`)

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(lending)
}

function saveFrontendFiles(lending: Lending) {
  const contractsDir = path.join(__dirname, "../..", "lending-frontend", "src", "contracts")

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir)
  }

  const typechainDir = path.join(__dirname, "..", "typechain-types")
  fs.cpSync(typechainDir, contractsDir, { recursive: true })
  console.log("Copied content of typechain-types into frontend directory")

  fs.writeFileSync(
    path.join(contractsDir, "contract-address.json"),
    JSON.stringify({ Lending: lending.target }, undefined, 2),
  )
  console.log("Contract address written in contract-address.json in the frontend")

  const LendingArtifact = artifacts.readArtifactSync("Lending")

  fs.writeFileSync(
    path.join(contractsDir, "Lending.json"),
    JSON.stringify(LendingArtifact, null, 2),
  )
  console.log("Lending.json written in the frontend")
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
