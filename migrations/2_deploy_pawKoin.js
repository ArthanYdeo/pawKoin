const PawKoin = artifacts.require("PawKoin");

module.exports = function (deployer) {
  deployer.deploy(PawKoin, 30000000); // Initial supply of 1,000,000 PAW
};
