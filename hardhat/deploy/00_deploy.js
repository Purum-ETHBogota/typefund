require("hardhat-deploy")
require("hardhat-deploy-ethers")

const { networkConfig } = require("../helper-hardhat-config")

const private_key = network.config.accounts[0]
const wallet = new ethers.Wallet(private_key, ethers.provider)

module.exports = async ({ deployments }) => {
    console.log("Wallet Ethereum Address:", wallet.address)
    const chainId = network.config.chainId
    const tokensToBeMinted = networkConfig[chainId]["tokensToBeMinted"]

    //deploy Simplecoin
    /*
    const SimpleCoin = await ethers.getContractFactory("SimpleCoin", wallet)
    console.log("Deploying Simplecoin...")
    const simpleCoin = await SimpleCoin.deploy(tokensToBeMinted)
    await simpleCoin.deployed()
    console.log("SimpleCoin deployed to:", simpleCoin.address)
    */
    //
    //Deploy TypeFundMarket
    //Oracle Medusa Address in HYPERSPACE: 0xb0dd3eb2374b21b6efacf41a16e25ed8114734e0

    const TypeFundMarket = await ethers.getContractFactory("TypeFundMarket", wallet)
    console.log("Deploying TypeFundMarket...")
    const typeFundMarket = await TypeFundMarket.deploy("0xb0dd3eb2374b21b6efacf41a16e25ed8114734e0")
    await typeFundMarket.deployed()
    console.log("TypeFundMarket deployed to:", typeFundMarket.address)

    //Deploy TypeFundDAO
    //Burnable wallet 0x3163C23658CB4921bB4026eBAEB84E9b0C5121Cc

    const TypeFundDAO = await ethers.getContractFactory("TypeFundDAO", wallet)
    console.log("Deploying TypeFundDAO...")
    const typeFundDAO = await TypeFundDAO.deploy(
        [
            "0x3163C23658CB4921bB4026eBAEB84E9b0C5121Cc",
            "0x4b2b0D5eE2857fF41B40e3820cDfAc8A9cA60d9f",
        ],
        1
    )
    await typeFundDAO.deployed()
    console.log("TypeFundDAO deployed to:", typeFundDAO.address)
}
