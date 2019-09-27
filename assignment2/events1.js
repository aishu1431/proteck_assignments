function temperatureConverter(valNum){
	var valNum=parseFloat(valNum);
	var text=document.getElementById("convertToC");

	if(isNaN(valNum)) {
		 prompt("enter the correct values");
		 //text.style.border="1px solid red";	

	}
	else {
		document.getElementById("outputCelcius").innerHTML=Math.round((valNum-32)/1.8);		
	}
}
