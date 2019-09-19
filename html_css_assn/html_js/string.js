function repeat(str){
var count=0;
for(var i=0; i<str.length; i++){
	if(str[i]== 'e') {
		count++;
	}
}
return count;
}
console.log(repeat('welcome'))
