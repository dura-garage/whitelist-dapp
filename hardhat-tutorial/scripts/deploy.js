// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  //get the isntance of whitelist contract from  contract factory
  const whitelistContract = await ethers.getContractFactory("Whitelist");

  //deploy the contract
  const deployedWhitelistContract = await whitelistContract.deploy(10);

  //wait for the contract to be mined
  await deployedWhitelistContract.deployed();

  // print the address of the deployed contract
  console.log("Whitelist deployed to:", deployedWhitelistContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  } );