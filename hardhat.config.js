require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    SepoliaETH: {
      url: "https://mainnet.infura.io/v3/0241e80f846a447ba94b2f3bc96ff584",
      accounts:["98a4ac4a95f505b58b18c1075776ba4123118a3d36f1bed4bc7f12cf7734d086"]
    }
  }
};
