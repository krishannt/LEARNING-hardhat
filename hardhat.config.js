/** @type import('hardhat/config').HardhatUserConfig 
 * 
*/
require("@nomiclabs/hardhat-waffle")

const ALCHEMY_APP_KEY ="MmzpcdzMVmoTbFYYrUGVCS0aN-ZPu1Fl";
const SEPOLIA_PRIVATE_KRHY ="34aa07807b16e46605c8020b14cd6836c5ee0fbbd67a16c5ffac78eb2d215130";
module.exports = {
  solidity: "0.8.19",
  networks:{
    sepolia:{
      url:`https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_APP_KEY}`,
      accounts:[`${SEPOLIA_PRIVATE_KRHY }`]
    },
  },
};
