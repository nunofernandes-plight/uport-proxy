module.exports = function(deployer) {
  deployer.deploy(TestRegistry);
  deployer.autolink();
  deployer.deploy(IdentityFactory);
  deployer.autolink();
};
