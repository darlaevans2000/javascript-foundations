class Dragon{
constructor(name, rider){
  this.name = name;
  this.rider = rider;
  this.hungry = true;
  this.timesEaten = 0;
}
greet(){
  return `Hi, ${this.rider}!`;
}
eat(){
  this.timesEaten ++;
  if (this.timesEaten >= 3){
    //less than or equal to
    this.hungry = false;
  }
}
}
module.exports = Dragon;


























// class Dragon {
//   constructor(name, rider){
//     this.name = name;
//     this.rider = rider;
//     this.hungry = true;
//     this.eaten = 0;
//   }
//   greet(name) {
//     return `Hi, ${this.rider}!`
//   }
//
//   eat() {
//     this.eaten ++;
//     if (this.eaten >= 3){
//       return this.hungry = false;
//
//   }
// }
// };
//
// module.exports = Dragon;
