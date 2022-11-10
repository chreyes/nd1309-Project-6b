const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "b6e86f5cbad94f73a7b152a1cacc637b";

//mnemonic deleted
const mnemonic = "";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    goerli: {
      provider: () => new HDWalletProvider(mnemonic, `https://goerli.infura.io/v3/${infuraKey}`),
        network_id: 5,       // goerli's id
        gas: 4465030,        // goerli has a lower block limit than mainnet
        gasPrice: 10000000000
    },
    mocha: {
      // timeout: 100000
    },  
    // Configure your compilers
    compilers: {
      solc: {
        // version: "0.5.1",    // Fetch exact version from solc-bin (default: truffle's version)
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
