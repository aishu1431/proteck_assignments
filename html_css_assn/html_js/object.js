

function particle(x,y){
  this.x=x;
  this.y=y;
  this.show=function(){
  return this.x,this.y;

  }
}
let particle1= new particle(100,99);
let particle2=new particle(23,12);
console.log(particle1);