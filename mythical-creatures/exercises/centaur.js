class Centaur{
constructor(data){
  this.name = data.name;
  this.breed = data.type;
  this.cranky = false;
}
shootBow(){
  return 'Twang!!!';
}
run(){
  return 'Clop clop clop clop!!!';
}
}
module.exports = Centaur;

























// class Centaur {
//   constructor(data) {
//     this.name = data.name;
//     this.breed = data.type;
//     this.cranky = false;
//     this.standing = true;
//     this.layingDown = false;
//     this.work = 0;
//   }
//   shootBow(){
//     this.checkCranky();
//     if (this.cranky === false && this.standing === true){
//       return "Twang!!!";
//     } else {
//       return "NO!"
//     }
//   }
//   run(){
//     this.checkCranky();
//     if (this.cranky === false && this.standing === true){
//       return "Clop clop clop clop!!!";
//     } else {
//       return "NO!"
//     }
// }
//   checkCranky(){
//     this.work ++;
//     if(this.work >= 3){
//       this.cranky = true;
//   }
// }
//   sleep(){
//     if (this.standing === false){
//       this.cranky = false;
//       this.work = 0;
//       return "ZZZZ"
//     } else {
//       return "NO!"
//     }
//   }
//   layDown(){
//     this.standing = false
//       this.layingDown = true
//     }
//   standUp(){
//     this.layingDown = false
//       this.standing = true
//     }
//     drinkPotion(){
//       if (this.standing === true){
//         this.cranky = false;
//       } else {
//         return "Not while I'm laying down!";
//       }
//     }
// }
// module.exports = Centaur;
