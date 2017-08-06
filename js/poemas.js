$(document).ready(function(){
	var toAdd = document.createDocumentFragment();
	var newRow;
	for(var i=0; i < 30; i++){
		var newDiv = document.createElement('div');
		var newLink = document.createElement('a');
		var newImg = document.createElement('img');
		newImg.className = "thumbnail img-responsive";
		newImg.src = "images/poemas/Inedito/Antologia de poemas amorosos/Hoja "+ eval(i+1) + " (rostro).png";
		newLink.appendChild(newImg);
		newLink.id = eval(i+1);
		newDiv.appendChild(newLink);
		newDiv.className = 'col-lg-3 col-sm-4 col-xs-6';
		if(i % 4 == 0){
			newRow = document.createElement('div');
			newRow.className="row";
			toAdd.appendChild(newRow);
		}
		newRow.appendChild(newDiv);
	}
	document.getElementById("contantologia").appendChild(toAdd);
	console.log(document.getElementById("contantologia"));








});
