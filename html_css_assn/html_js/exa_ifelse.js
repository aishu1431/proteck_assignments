
function atmMachine(){
	var value=prompt("enter the money you want to withdraw");
	value=parseInt(value);
	var a;
	
		if(value%20==0){
			a='amount is ready';
		}
		else{
			a='amount is not ready';
		}
	
		alert(a);
	}
atmMachine();



var john=['john','smith',1990,'designer',false,'blue'];
for(var i=0;i<john.length;i++){
	if(typeof john[i] !=='string')
		continue;
	console.log(john[i]);
}
 var result=[2,'john',3,4,2,'smith',2]
 for(i=0;i<result.length;i++){
    if(result===3)
 	continue;
 console.log(result);
}



function useage(age){
  var a;
  if(age==14){
    a='coupon1';
  }
  else if(age==21){
    a='coupon2';
  }
  else if(age==30){
    a='coupon3';
  }
  else{
    a='no alert';
  }
  return a;
}
console.log(useage(20));




































