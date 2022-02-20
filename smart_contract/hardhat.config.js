require("@nomiclabs/hardhat-waffle");
const fs = require("fs")


const privateKey = fs.readFileSync(".secret").toString();
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/x0rXCEwfvKRJBZRnttReQ0VVcA491oFl",
      accounts: [
        privateKey
      ]

    },
  },
};
