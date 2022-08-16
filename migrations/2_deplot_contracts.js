const StakeToken = artifacts.require("StakeToken");
let token = "0xbC4E3F144727aE4B701680DB3F05dA03a4e48340" // token address which will be used to stake
module.exports = async function (deployer) {
    await deployer.deploy(StakeToken, token);
};