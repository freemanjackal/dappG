# dappG
#A basic MVP of MMORPG mostly text based.
##Technology:
* Ethereum- ganache-cli to run an ethereum private network
* Truffle- to compile and deploy the smart contracts
* Bootstrap 4

##Game design
* The money of the game it is represented like a fungible token
* The character it is represented like a non fungible token with a basic set of atributes.
* The weapons of the the game are represented like another non fungible token with a set of atributes.
* The atributes of the NFT will represent its characteristics and the way they look using a 16 digits number to represent it, so like prime numbers for a better representation OF unique items as weapons.

##Test the Game
You need to compile and deploy the smart contracts in an ethereum network preferebly the private one or a testnet.
Once deployed the smart contracts, need to copy the address where it were deployed these 3 smart contracts: 
* UnigToken.sol
* pirateownership.sol
* weapon.sol
and paste it in init-contract.js in order to comunicate with them.
The abi of the smart contracts is automacally copied from build/contracts folder.

You should install a web server to get access to some images.
