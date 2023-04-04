import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-verify";


module.exports = {
  zksolc: {
    version: "1.3.5",
    compilerSource: "binary",
    settings: {},
  },
  defaultNetwork: "zkTestnet",
  networks: {
    
    goerli: {
      url: "https://goerli.infura.io/v3/<API_KEY>" // URL of the Ethereum Web3 RPC (optional)
    },
    zkTestnet: {
      url: "https://zksync2-testnet.zksync.dev", // URL of the zkSync network RPC
      ethNetwork: "goerli", // URL of the Ethereum Web3 RPC, or the identifier of the network (e.g. `mainnet` or `goerli`)
      zksync: true,
      // Verification endpoint for Goerli
      verifyURL: 'https://zksync2-testnet-explorer.zksync.dev/contract_verification'
    }
    
  },
  
  etherscan: {
    apiKey: "DPZ88YKB67F5STI58YAEW5Z68E3M9UPES4",
  },
  // defaultNetwork: "zkTestnet", // optional (if not set, use '--network zkTestnet')
  
  solidity: {
    version: "0.8.17",
  },
};