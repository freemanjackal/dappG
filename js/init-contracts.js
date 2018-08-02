      function startApp() {
        //change contract address
        var cryptoPiratesAddress = "0x538d16e571e73e5146de0c55f565cee811af5571";//"YOUR_CONTRACT_ADDRESS";
        var unigTAddress = "0xdcd14fbb4d83e4e3cec0dffae33cbee81e18adcd";
        var weaponsAddr = "0x3ba4e679ab2bf4b2d7832e9949ff3324bb25996a";

        
        web3js.eth.defaultAccount = web3js.eth.accounts[0];
        cryptoPirates  = web3js.eth.contract(cryptoPiratesABI).at(cryptoPiratesAddress);
        cryptoWeapon = web3js.eth.contract(cryptoWeaponsABI).at(weaponsAddr);
        cryptoToken = web3js.eth.contract(tokenAbi).at(unigTAddress);
        userAccount = web3js.eth.accounts[0];
        //cryptoPirates = web3js.eth.Contract(cryptoPiratesABI, cryptoPiratesAddress);
        /*var accountInterval = setInterval(function() {
          // Check if account has changed
          if (web3js.eth.accounts[0] !== userAccount) {
            userAccount = web3js.eth.accounts[0];
   
          }
        }, 1000);*/

        // Start here
      }