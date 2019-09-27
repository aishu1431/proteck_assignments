

//how to delete any property in the object using delete:
var person={
	 firstName:"john",
	 lastName:"Doe",
	 age:50,
	 eyecolor:"blue"
 };
delete person.age; //important
console.log(person);





function particle(x,y){
  this.x = x;
  this.y = y;
  
}


particle.prototype.z=100;

var particle1 = new particle(80,90);
var particle2 = new particle(23,12);
console.log(particle1.x+ "," +particle1.y+ "," +particle1.z+ ",")
console.log(particle2.x+ "," +particle2.y+ "," +particle2.z+ ",")





























