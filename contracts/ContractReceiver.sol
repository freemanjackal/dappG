pragma solidity ^0.4.20;

interface ContractReceiver
{
    function tokenFallback(address, uint256, bytes);
}
