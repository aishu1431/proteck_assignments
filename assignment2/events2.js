function temperatureConverter(valNum){
	var valNum=parseFloat(valNum);
	var text=document.getElementById("onvertToC");

	if(isNaN(valNum)) {
		 //text.style.border="1px solid red";
		 prompt("enter the correct values");	

	}
	else {
		document.getElementById("outputCelcius").innerHTML=Math.round((valNum-32)/1.8);		
	}
}
