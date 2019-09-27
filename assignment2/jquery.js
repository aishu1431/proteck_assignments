$(document).ready(function(){
	$("#myImg").css("border","10px solid red");
	//$("div p").html("my");
	$("div p span").html("world");
	$("#mybtn").on("click",function(){
		$("#myImg").hide();
	});
	$("#myBtn").on("click",function(){
		$("#myImg").show();
	});
});