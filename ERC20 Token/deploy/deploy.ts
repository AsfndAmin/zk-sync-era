import { utils, Wallet } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the Token contract`);

  // Initialize the wallet.
  const wallet = new Wallet("08b22147ab02dd472ec3d45452c5839ffe2b434594473d481b1e444d3698afea");

  // Create deployer object and load the artifact of the contract we want to deploy.
  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact("Token");
  const tokenContract = await deployer.deploy(artifact);
  // Show the contract info.
  const contractAddress = tokenContract.address;
  console.log(`${artifact.contractName} was deployed to ${contractAddress}`);

  
}