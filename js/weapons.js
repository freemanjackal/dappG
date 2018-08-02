      function getWeaponsDetails(id,callback){
        cryptoWeapon.weapons(id, { from: userAccount, gas: 3000000}, function(err, result){ 
          if(!err){
            
            callback(result, id);
          }
          if(err){
            console.log("error");
          }


        });
      }
      function displayProps(result){
        $("#weapons").empty();
        for (id of result) {
          
           getWeaponsDetails(id,displayWeapons);
            
        }/*
       
*/
      }
      function getProperties(){
        //just weapons from smart contracts right now
        //add ships and other non fungible tokens like real state properties
        cryptoWeapon.getWeaponsByOwner(userAccount, { from: userAccount, gas: 3000000}, function(err, result){ 
          if(!err){
            displayProps(result);
            
          }else{
            console.log(err);
          }

        });
      }
        function displayWeapons(weapon, id){
          console.log(JSON.parse(weapon[2]))
          console.log(JSON.parse(weapon[1]))
          console.log(JSON.parse(weapon[3]))
          console.log(JSON.parse(weapon[4]))
          
         $("#weapons").append(`
          <div class="col-lg-4 col-md-6 mb-4">
              <div class="card h-100">
                <a href="#"><img class="card-img-top" src="./img/weapons/1.jpg" alt=""></a>
                <div class="card-body">
                  <h4 class="card-title">
                    <a href="#">${weapon[0]}</a>
                  </h4>
                  <h5>Min Level: ${JSON.parse(weapon[2])}</h5>
                  <p class="card-text">Power attack: ${JSON.parse(weapon[4])}
                  <br>
                  Power defense: ${JSON.parse(weapon[3])}
                  <br>
                  id: ${id}
                  </p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                  <button class="btn btn-primary"  onclick=sell(${id})>Sell</button>
                </div>
              </div>
            </div>`);

      }
      function sell(id){
        console.log(id)
      }