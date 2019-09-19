function isPrime(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

function display(n) {
    var arr = [2];
    for ( var i = 3; i < n; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    console.log(arr); // use arr result on your own
}

display(30);


var test = [5,7,9,10,11]
console.log(test.every(isPrime))
console.log(test.map(isPrime))
console.log(test.filter(x => isPrime(x)))
console.log(test.filter(x => isPrime(x)))

function isPrime(num){
	var isPrime=no;
	for(var i=2;i<num;i++){

	}
}