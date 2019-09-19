function checkvowel(str1,str2,str3){
	var array1=[str1,str2,str3];
	var array2=[];

	for(var i=0; i<array1.length; i++){
		if(array1[i][0]=='a' || array1[i][0]=='e' || array1[i][0]=='i' || array1[i][0]=='o' || array1[i][0]=='u'){

            array2.push(array1[i]);

	}
}
return array2;
}
console.log(checkvowel('yamini','aishu','pruthvi'))
