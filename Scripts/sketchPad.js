$(document).ready(function(){
	var dimensionY = 60;
	var dimensionX = 60;
  var totalDim = 600;
  var bord = 0;
  var increment = 0.05;
  var newX = 60;
  var newY = 60;
  var newDim = 600;
  
  var canvasGen = function(){
  	$('#sketchContainer').empty();
    $('#sketchContainer').css("width", totalDim + "px");

		for(var i = 0; i < dimensionY; i++){
  			var row = ('row' + i);
			$('#sketchContainer').append('<div class="row" id="' + row + '"> </div>');
			for(var n = 0; n < dimensionX; n++){
				$('#' + row).append('<div class="box"> </div>');
			}	
		}

		var boxDimX = Math.floor((totalDim - (2 * dimensionX * bord)) / dimensionX);
  	var boxDimY = Math.floor((totalDim - (2 * dimensionY * bord)) / dimensionY);
  			
  	$('#sketchContainer').css("width", totalDim + "px");
  	$('#sketchContainer').css("height", totalDim + "px");
 
 		$('.row').css("height", (boxDimY + (2 * bord)) + "px");
  	$('.row').css("width", totalDim + "px");
  
  	$('.box').css("width", boxDimX + "px");
  	$('.box').css("height", boxDimY + "px");
  	$('.box').css("border", bord + "px solid white");


    $(".box").hover(function(){
  		var opa = parseFloat(($(this).css("opacity")));
    	opa += increment;
    	if(opa > 1) {
    	opa = 1;
    	}
  		$(this).css("opacity", opa);
  	});
  }

  canvasGen();

  $('button').click(function() {
  	newX = parseInt($('input[name=XDim]').val());

    if(isNaN(newX)){
      dimensionX = 64;
    }
    else{
      dimensionX = newX;
    }

    newY = parseInt($('input[name=XDim]').val());
    if(isNaN(newY)){
      dimensionY = 64;
    }
    else{
      dimensionY = newY;
    }

    newDim = parseInt($('input[name=TotDim]').val());
    if(isNaN(newDim)){
      totalDim = 600;
    }
    else{
      totalDim = newDim;
    }

  	canvasGen();
  });
});