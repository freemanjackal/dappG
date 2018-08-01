/*var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
};*/

var safemath = artifacts.require("./SafeMath.sol");
//var erc721 = artifacts.require("./ERC721.sol");
var ownable = artifacts.require("./Ownable.sol");
var pirateattack = artifacts.require("./PirateAttack.sol");
var piratefactory = artifacts.require("./PirateFactory.sol");
var piratefeeding = artifacts.require("./PirateFeeding.sol");
var piratehelper = artifacts.require("./PirateHelper.sol");
var pirateownership = artifacts.require("./PirateOwnership.sol");

//var cr = artifacts.require("./ContractReceiver.sol");
//var erc223 = artifacts.require("./ERC223.sol");
var mathLib = artifacts.require("./MathLib.sol");
var pausable = artifacts.require("./Pausable.sol");
var token = artifacts.require("./Token.sol");
var unig = artifacts.require("./UnigToken.sol");
var wpp = artifacts.require("./Weapon.sol");

module.exports = function(deployer) {
  deployer.deploy(safemath);
  //deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(ownable);
  //deployer.deploy(erc721);
  
  deployer.deploy(piratefactory);
  deployer.deploy(piratefeeding);
  deployer.deploy(piratehelper);
  deployer.deploy(pirateattack);
  deployer.deploy(pirateownership);

  //deployer.deploy(cr);
  //deployer.deploy(erc223);
  deployer.deploy(mathLib);
  deployer.deploy(pausable);
  deployer.deploy(token);
  deployer.deploy(unig);
  deployer.deploy(wpp);
  
};


