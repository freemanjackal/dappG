function missionsView(){
	$("#missions").append(`
          <div id="accordion" class="col-lg-10 col-md-10 mb-10">
    <div class="card ">
      <div class="card-header">
        <a class="card-link col" data-toggle="collapse" href="#collapseOne">
          Mission 1
        </a>
      </div>
      <div id="collapseOne" class="collapse" data-parent="#accordion">
        <div class="card-body">
         
                    <div class="alert alert-primary" role="alert">
 						Working on the stories of the missions!
					</div> 
			<button class="btn btn-primary disabled" >Accept mission</button> 
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
          Mission 2
        </a>
      </div>
      <div id="collapseThree" class="collapse" data-parent="#accordion">
        <div class="card-body">
          
                    <div class="alert alert-primary" role="alert">
 						Working on the stories of the missions!
					</div> 
			<button class="btn btn-primary disabled" >Accept mission</button> 
        </div>
      </div>
    </div>
  </div>
`);
}