      function levelUp(pirateId) {
        $("#txStatus").text("Leveling up your pirate...");
        return cryptoPirates.methods.levelUp(pirateId)
        .send({ from: userAccount, value: web3.utils.toWei("0.001") })
        .on("receipt", function(receipt) {
          $("#txStatus").text("Power overwhelming! Successfully leveled up");
        })
        .on("error", function(error) {
          $("#txStatus").text(error);
        });
      }

       function getPirateDetails(id, callback) {
        cryptoPirates.pirates(id, { from: userAccount, gas: 3000000}, function(err, result){ 
          if(!err){
            
            callback(result, id);
          }
          if(err){
            console.log("error");
          }


        });
      }

      function pirateToOwner(id) {
        return cryptoPirates.pirateToOwner(id).call()
      }
      //change function name 
      function getPiratesByOwner(owner) {
        cryptoPirates.getPiratesByOwner(owner, { from: userAccount, gas: 3000000}, function(err, result){ 
          if(!err){
            console.log("getpiratesbyowner")
            displayPirates(result);
            
          }

        });
      }

      function getPirate(owner){
          cryptoPirates.getPiratesByOwner(owner, { from: userAccount, gas: 3000000}, function(err, result){ 
          if(!err){console.log(result)
            if(result.length === 0)
              myPirate = -1;
            else
              myPirate = result;
            
          }

        });
      }

      //display all pirates after get its ids
      function getPirates(){
        var idpirates = Array();
        let len = JSON.parse(cryptoPirates.getPiratesLenght( { from: userAccount, gas: 3000000}));
        for(var i=0; i < len; i++){
            if(i != myPirate)
              idpirates.push(i);
        }
          displayPirates(idpirates);

      }

            function test(pirate, id){
          // Using ES6's "template literals" to inject variables into the HTML.
          let division = (JSON.parse(pirate[1])/100000000000000)>>0;
          let image = division%6 + 1;
          $("#pirates").append(`
          <div class="col-lg-4 col-md-6 mb-4">
              <div class="card h-100">
                <a href="#"><img class="card-img-top" src="./img/${image}.jpg" alt=""></a>
                <div class="card-body">
                  <h4 class="card-title">
                    <a href="#">${pirate[0]}</a>
                  </h4>
                  <h5>Level: ${JSON.parse(pirate[2])}</h5>
                  <p class="card-text">Wins: ${JSON.parse(pirate[4])}
                  <br>
                  Losses: ${JSON.parse(pirate[5])}
                  <br>
                  id: ${id}
                  </p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>`);
          
      }