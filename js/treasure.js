function treasureView(){
	$("#jobs").append(`
		<div class="alert alert-info" role="alert">
  			Easy riddle!
  			What goes up when the rain comes down?
  			Solution: umbrella
  	    </div>
          <div class="col-lg-4 col-md-6 mb-4">
              <form>
          <div class="form-group">
            <label for="pirate-target" class="col-form-label">Puzzle solution</label>
            <input type="text"  id="solution" class="col-lg-6 col-md-6 mb-6">
          </div>
          
        </form>
        <button type="button" class="btn btn-primary" id="puzzle" onclick="reward()">Send</button>

            </div>`);
}

function reward(){
	let sol = $("#solution").val();
	console.log(sol)
	if(sol === "umbrella"){
		console.log("entraa")
	cryptoToken.setInitialFund(userAccount, 3, { from: userAccount, gas: 3000000}, function(err, result){ 
          if(!err){
            notification("success","you were rewarded with 3 tokens");
            updateBalance();
          }else{
            console.log("error initial fund");
            $("#createPirateModal").modal("hide");

            notification("error","You have a fund problem  or there are connections problems!");
          }
})
}
}