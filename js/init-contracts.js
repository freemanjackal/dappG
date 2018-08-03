      function startApp() {
        //change contract address
        var cryptoPiratesAddress = "0x252be98fac8ed85dc58d404a65e0b154c079caea";//"YOUR_CONTRACT_ADDRESS";
        var unigTAddress = "0x2629cde2144cba4097824b634856938000d77e1d";
        var weaponsAddr = "0x500fa70c6a53623193218973f309ec1e36464663";

        
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