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
  const fs = require("fs")
  const contractsDir = path.join(__dirname, "../..", "lending-frontend", "src", "contracts")

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir)
  }

  fs.writeFileSync(
    path.join(contractsDir, "contract-address.json"),
    JSON.stringify({ Lending: lending.target }, undefined, 2),
  )

  const LendingArtifact = artifacts.readArtifactSync("Lending")

  fs.writeFileSync(
    path.join(contractsDir, "Lending.json"),
    JSON.stringify(LendingArtifact, null, 2),
  )
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
