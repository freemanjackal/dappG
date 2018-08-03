function marketView(){
	addTabMarkets();
	getProperties(displayWeaponsMarket);	
}

function displayWeaponsMarket(weapon, id){
          console.log(JSON.parse(weapon[2]))
          console.log(JSON.parse(weapon[1]))
          console.log(JSON.parse(weapon[3]))
          console.log(JSON.parse(weapon[4]))
          //let division = (JSON.parse(pirate[1])/100000000000000)>>0;
          //let image = division%6 + 1;
        $("#myDIV").empty();
        	console.log("chegaaaaaaaaaaaaaa")
          //if(JSON.parse(weapon[5]) > -1){
          let wp = (JSON.parse(weapon[1])/100000000000000)>>0;
          let image = wp%7 + 1;
         $("#lolo").append(`
          <div class="col-lg-4 col-md-6 mb-4">
              <div class="card h-100">
                <a href="#"><img class="card-img-top" src="./img/weapons/${image}.jpg" alt=""></a>
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
                  <br>
                  price: ${JSON.parse(weapon[5])} 
                  </p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                  <button class="btn btn-primary"  onclick=buy(${id})>Buy</button>
                </div>
              </div>
            </div>`);
     //}

      }
      function buy(id){
alert("this is just a test functionality")
      }
//display all pirates after get its ids
      function getWeapons(){
        var idweapons = Array();
        let len = JSON.parse(cryptoPirates.getPiratesLenght( { from: userAccount, gas: 3000000}));
        for(var i=0; i < len; i++){
            if(i != myPirate)
              idpirates.push(i);
        }
          displayPirates(idpirates);

      }
      function addTabMarkets(){
      	$("#market").append(`<ul class="nav nav-tabs" id="tabMarkets">
                    <li class="nav-item">
                      <a class="nav-link active" data-toggle="tab" href="#lolo	" href="#">Market</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#dark">Dark Market</a>
                    </li>
                  </ul>`)

      }


// <a href="#"><span class="glyphicon glyphicon-home"></span>  Home</a>

