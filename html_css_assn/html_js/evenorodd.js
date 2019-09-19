function evenOrOdd(num){
	var num=prompt('enter the number');
	num=parseInt(num);
	var a;
	for(i=0;i<num;i++){
		if(num%2==0){
			a='number is even';
		}
		else{
			a='number is odd';
		}
		alert(a);
	}
}
console.log(evenOrOdd());
