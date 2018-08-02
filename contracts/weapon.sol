pragma solidity ^0.4.20;

import "./erc721.sol";
import "./safemath.sol";

contract Weapon is ERC721 {

  event NewWeapon(uint id, string _name, uint _material);

  using SafeMath for uint256;
  event Transfer(address indexed _from, address indexed _to, uint256 _tokenId);
  event Approval(address indexed _owner, address indexed _approved, uint256 _tokenId);

  mapping (uint => address) weaponApprovals;
//delete view
  function balanceOf(address _owner) public view returns (uint256 _balance) {
    return ownerWeaponCount[_owner];
  }
//delete view
  function ownerOf(uint256 _tokenId) public view returns (address _owner) {
    return weaponToOwner[_tokenId];
  }

  function _transfer(address _from, address _to, uint256 _tokenId) private {
    ownerWeaponCount[_to] = ownerWeaponCount[_to].add(1);
    ownerWeaponCount[msg.sender] = ownerWeaponCount[msg.sender].sub(1);
    weaponToOwner[_tokenId] = _to;
    emit Transfer(_from, _to, _tokenId);
  }

  function transfer(address _to, uint256 _tokenId) public onlyOwnerOf(_tokenId) {
    _transfer(msg.sender, _to, _tokenId);
  }

  function approve(address _to, uint256 _tokenId) public onlyOwnerOf(_tokenId) {
    weaponApprovals[_tokenId] = _to;
    emit Approval(msg.sender, _to, _tokenId);
  }

  function takeOwnership(uint256 _tokenId) public {
    require(weaponApprovals[_tokenId] == msg.sender);
    address owner = ownerOf(_tokenId);
    _transfer(owner, msg.sender, _tokenId);
  }

    modifier onlyOwnerOf(uint _weaponId) {
    require(msg.sender == weaponToOwner[_weaponId]);
    _;
  }
  ////////////////////////////////////////////////////////////////////////////
  mapping (uint => address) public weaponToOwner;
  mapping (address => uint) ownerWeaponCount;

  uint materialDigits = 16;
  uint materialModulus = 10 ** materialDigits;

  struct Weapon {
    string name;
    uint material;
    uint32 userLevel;
    uint32 defensePoints;
    uint32 attackPoints;
  }

  Weapon[] public weapons;



    function _createWeapon(string _name, uint _material) internal {
    uint id = weapons.push(Weapon(_name, _material, 1, 3, 1)) - 1;
    weaponToOwner[id] = msg.sender;
    ownerWeaponCount[msg.sender]++;
    emit NewWeapon(id, _name, _material);
  }

//delete view
  function _generateRandomMaterial(string _str) private view returns (uint) {
    uint rand = uint(keccak256(_str));
    return rand % materialModulus;
  }

  function createRandomWeapon(string _name) public {
    require(ownerWeaponCount[msg.sender] <= 5);
    uint randMaterial = _generateRandomMaterial(_name);
    randMaterial = randMaterial - randMaterial % 100;
    _createWeapon(_name, randMaterial);
  }

  function getWeaponsLenght() public view returns (uint) {
     return weapons.length;
 }
 function getWeaponsByOwner(address _owner) external view returns(uint[]) {
    uint[] memory result = new uint[](ownerWeaponCount[_owner]);
    uint counter = 0;
    for (uint i = 0; i < weapons.length; i++) {
      if (weaponToOwner[i] == _owner) {
        result[counter] = i;
        counter++;
      }
    }
    return result;
  }
}
