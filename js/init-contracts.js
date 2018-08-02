      function startApp() {
        //change contract address
        var cryptoPiratesAddress = "0xdce499fb84c9bb7b2c38107b7e0dd5037fe5cec2";//"YOUR_CONTRACT_ADDRESS";
        var unigTAddress = "0xdafb99bbbfb8564fa81bc5accf6ea612d54b9085";
        var weaponsAddr = "0x62821cc7de6b0dd9dc8093875a62346574975505";

        
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