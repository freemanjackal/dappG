function bountyView(){
	$("#bounty").append(`
          <div id="accordion" class="col-lg-10 col-md-10 mb-10">
    <div class="card ">
      <div class="card-header">
        <a class="card-link col" data-toggle="collapse" href="#collapseOne">
          Kidnap the pet of Jilgamel
        </a>
      </div>
      <div id="collapseOne" class="collapse" data-parent="#accordion">
        <div class="card-body">
         
                    <div class="alert alert-primary" role="alert">
 						You will be rewarded with 100 coins after the job is done.
					</div> 
			<button class="btn btn-primary disabled" >Take this bounty</button> 
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
          Kill karrincha user.
        </a>
      </div>
      <div id="collapseThree" class="collapse" data-parent="#accordion">
        <div class="card-body">
          
                    <div class="alert alert-primary" role="alert">
 						You will be rewarded with 200 coins.
					</div> 
					<div class="alert alert-danger" role="alert">
  			When you kill someone it will take 2 weeks to come to live again. You may get retalation.
				</div>
			<button class="btn btn-primary disabled" >Take this bounty</button> 
        </div>
      </div>
    </div>
  </div>
`);
}