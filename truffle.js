const HDWalletProvider = require("@truffle/hdwallet-provider");
const infuraKey = "1dede18da4a8445b9df425b65543ba21";

const mnemonic = "";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    goerli: {
      networkCheckTimeout: 10000,
      provider: () => new HDWalletProvider(mnemonic, `https://goerli.infura.io/v3/${infuraKey}`),
      network_id: 5,       // goerli's id
      // gas: 4465030,        // goerli has a lower block limit than mainnet
      // gasPrice: 10000000000
      // gas and gasPrice commented because of this:
      // "FarmerRole" -- VM Exception while processing transaction: Transaction's maxFeePerGas (10992342) is less than the block's baseFeePerGas (28116044110) (vm hf=london -> block -> tx) -- Reason given: Custom error (could not decode)..
    },
    mocha: {
      // timeout: 100000
    },
    // Configure your compilers
    compilers: {
      solc: {
        version: "0.4.24",    // Fetch exact version from solc-bin (default: truffle's version)
        // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
        // settings: {          // See the solidity docs for advice about optimization and evmVersion
        //  optimizer: {
        //    enabled: false,
        //    runs: 200
        //  },
        //  evmVersion: "byzantium"
        // }
      }
    }
  }
};