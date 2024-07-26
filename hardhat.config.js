require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "0xd08fd17c062569db0423521c04b2915b296a6f3e39f8990d141e8ba59bc3a8a9";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};
