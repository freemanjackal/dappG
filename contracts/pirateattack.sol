pragma solidity ^0.4.20;

import "./piratehelper.sol";
import "./UnigToken.sol";

contract PirateAttack is PirateHelper {
  uint randNonce = 0;
  uint attackVictoryProbability = 70;

  event attackResult(uint indexed _pirateId, uint result);


  constructor(UnigToken unig) PirateHelper(unig) public{
  }

  function randMod(uint _modulus) internal returns(uint) {
    randNonce++;
    return uint(keccak256(now, msg.sender, randNonce)) % _modulus;
  }

  function attack(uint _pirateId, uint _targetId) external onlyOwnerOf(_pirateId) {
    Pirate storage myPirate = pirates[_pirateId];
    Pirate storage enemyPirate = pirates[_targetId];
    uint rand = randMod(100);
    if (rand <= attackVictoryProbability) {
      myPirate.winCount++;
      myPirate.level++;
      enemyPirate.lossCount++;
     // _triggerCooldown(myPirate);
      emit attackResult(_pirateId, 1);
      require(stealPirate(_pirateId, _targetId, "win") == 1);
    } else {
      myPirate.lossCount++;
      enemyPirate.winCount++;
     // _triggerCooldown(myPirate);
      emit attackResult(_pirateId, 0);
      //if you lose when you attack you wont be stealed too much like when youre under atteack
      require(stealPirate(_targetId, _pirateId, "lose") == 1);
    }

  }
}

