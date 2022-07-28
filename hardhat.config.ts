import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@primitivefi/hardhat-dodoc';
import '@nomiclabs/hardhat-waffle';
import 'solidity-coverage';
import 'hardhat-docgen';

const config: HardhatUserConfig = {
  solidity: "0.8.9",
};

export default config;
