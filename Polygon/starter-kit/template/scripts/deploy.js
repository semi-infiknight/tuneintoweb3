const hre = require("hardhat");

async function main() {
  const initialSupply = hre.ethers.utils.parseEther("1000000");
  const SimpleToken = await hre.ethers.getContractFactory("SimpleToken");
  const token = await SimpleToken.deploy(initialSupply);
  await token.deployed();
  console.log("SimpleToken deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});