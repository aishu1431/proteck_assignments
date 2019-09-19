function passanger(age){
	var age=prompt('enter your age');
	age=parseInt(age);
	var a;
	if(age==2 && age<2){
		a="no charge";
	}
	else if(age>2 && age<14){
		a="10% discount";
	}
	else if(age>14 && age<55){
		a="regular price";
	}
	else{
		a="20% discount";
		
}
alert(a);
}
console.log(passanger(14));*/

/*function evenOrOdd(num){
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
