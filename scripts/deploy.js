const hre = require("hardhat");

async function main() {
  const contract = await hre.ethers.deployContract("Swisstronik", ["Hello Swisstronik from Happy Cuan Airdrop!!"]);
  await contract.waitForDeployment();
  console.log(`Swisstronik contract deployed to ${contract.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
