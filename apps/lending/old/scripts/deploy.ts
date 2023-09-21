import { ethers } from "hardhat"

const main = async () => {
  const lock = await ethers.deployContract("Lending")

  await lock.waitForDeployment()

  console.log(`Lending contract deployed to ${lock.target}`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
