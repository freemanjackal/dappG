pragma solidity ^0.4.20;
import "./ERC223.sol";
import "./MathLib.sol";
import "./ContractReceiver.sol";

contract Token is ERC223, MathLib {

  /**
   * @dev Fix for the ERC20 short address attack.
   */
  modifier onlyPayloadSize(uint size) {
     require(msg.data.length >= size + 4) ;
     _;
  }

  mapping(address => uint) public balances;

  function transfer(address _to, uint _value, bytes _data) returns (bool success) {

    if(isContract(_to)) {
        return transferToContract(_to, _value, _data);
    }
    return transferToAddress(_to, _value, _data);
  }

  function transfer(address _to, uint _value) returns (bool success) {
        bytes memory empty;
        if(isContract(_to)) {
          return transferToContract(_to, _value, empty);
        }
        return transferToAddress(_to, _value, empty);
  }

  function isContract(address _addr) private returns (bool is_contract) {
     uint length;
     assembly {
           //retrieve the size of the code on target address, this needs assembly
           length := extcodesize(_addr)
     }
     return (length>0);
  }
//when transaction target is a contract
  function transferToContract(address _to, uint _value, bytes _data) private returns (bool success) {
    require(balanceOf(msg.sender) > _value);
    balances[msg.sender] = safeSubtract(balanceOf(msg.sender), _value);
    balances[_to] = safeAdd(balanceOf(_to), _value);
    ContractReceiver receiver = ContractReceiver(_to);
    receiver.tokenFallback(msg.sender, _value, _data);
    Transfer(msg.sender, _to, _value, _data);
    return true;
  }

//when transaction target is an address
function transferToAddress(address _to, uint _value, bytes _data) private returns (bool success) {
  require(balanceOf(msg.sender) > _value);
  balances[msg.sender] = safeSubtract(balanceOf(msg.sender), _value);
  balances[_to] = safeAdd(balanceOf(_to), _value);
  Transfer(msg.sender, _to, _value, _data);
  return true;
}



  function balanceOf(address _owner) public constant returns (uint balance) {
    return balances[_owner];
  }



}
