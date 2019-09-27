// function hide(){
// 	var x=document.getElementById("image");

// 	if(x.style.visibility==="hidden"){
// 		x.style.visibility="visible";
// 	}
// 	else
// 	{
// 		x.style.visibility="hidden";
// 	}

// }
// function change(){
// var y=document.getElementById("image").src="https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
// }

// functions show(){
// 	var
// }
function change(){
	var img =document.getElementById("image");
	img.setAttribute("src","https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
	var attr =img.getAttribute("src");

}
function hide(){
	var img =document.getElementById("image");
	img.style.display ="none";


}
function show(){
	var img =document.getElementById("image");
	img.style.display ="block";

}
