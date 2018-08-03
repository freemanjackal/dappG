      function startApp() {
        //change contract address
        var cryptoPiratesAddress = "0x25b4dc3bf4a2e72a8bc6e98f3a4b2ffa7d798960";//"YOUR_CONTRACT_ADDRESS";
        var unigTAddress = "0x1c7f3e3c94f03ef530c246623aaf3b0a95cce9df";
        var weaponsAddr = "0xb29cc00b0bd9ed8145e9bf2db470d3c9466201f5";

        
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