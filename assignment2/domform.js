function para1(color){   //regsitration form assignement
	var y=document.getElementById("color").style.backgroundcolor="powderblue";
	var text=document.getElementById("regisForm");
	var textpass=document.getElementById("keyvalue");
	var Gender=document.getElementById("sex");
	var male=document.getElementById("sex1");
	var others=document.getElementById("sex2")
	var country=document.getElementsByTagName("option");
	var comment=document.getElementById("subject");
	var accept=document.getElementById("accept");
	var validate=document.getElementById("abc");
    

    if(text.value.length == 0 ){
		alert("enter the username");
		
	}
	
	if(textpass.value.length == 0){
		alert("enter the password");
	}
	//else {
	//
	//z}

    if(Gender.checked == false && male.checked == false && others == false){
		alert("please select the gender");
	}
	 
	
    if(country.value==false){
		alert("please choose country");
	}
    if(comment.value==0){
		alert("write comment");
	}
    if(accept.checked==false){
		alert("accept the checkbox");
	}
	
}
