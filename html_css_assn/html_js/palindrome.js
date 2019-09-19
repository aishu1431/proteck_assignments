function palindrom(str){
  var k=str.length;
  var n=k/2;
  for(var i=0;i<n ; i++)
  {
  	j = k-1
	if(str[i]!==str[j-i]){
		return 'the word is  not palindrome';
	}

  }
	return 'the word is a palindrome';

}

console.log(palindrom('mum'))
console.log(palindrom('num'))