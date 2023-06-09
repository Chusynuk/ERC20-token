import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const ALCHEMY_GOERLI_URL = process.env.ALCHEMY_GOERLI_URL || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: ALCHEMY_GOERLI_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;
