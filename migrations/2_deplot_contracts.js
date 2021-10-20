const BedrockStaking = artifacts.require("BedrockStaking");

module.exports = async function (deployer) {
    await deployer.deploy(BedrockStaking);
};