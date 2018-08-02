
/////////make it more reusable for future contracts
///////////////////////load abi ////////////////////////

var cryptoWeaponsABI ;
$.getJSON('/build/contracts/Weapon.json', function(json){
    cryptoWeaponsABI = json['abi']
    if(tokenAbi !== undefined && cryptoPiratesABI !== undefined)
      startApp();
});

      

var tokenAbi 
$.getJSON('/build/contracts/UnigToken.json', function(json){
    tokenAbi = json['abi']
    if(cryptoWeaponsABI !== undefined && cryptoPiratesABI !== undefined)
      startApp();
});
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var cryptoPiratesABI 
$.getJSON('/build/contracts/PirateOwnership.json', function(json){
    cryptoPiratesABI = json['abi']
    if(cryptoWeaponsABI !== undefined && tokenAbi !== undefined)
      startApp();
});