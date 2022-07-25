const BedrockStake = artifacts.require("BedrockStake");
let token = "" // token address which will be used to stake
module.exports = async function (deployer) {
    await deployer.deploy(BedrockStake, false, token);
};