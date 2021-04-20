class Pirate {
  constructor(name, job){
    this.name = name;
    this.job = job || "scallywag";
    this.cursed = false;
  }
  robShip(){
      return "YAARRR!";
    }
  }
module.exports = Pirate;
//     liftCurse(){
//       if(this.booty >= 300 && this.cursed){
//         this.booty -= 300
//         this.cursed = false
//         return "Your curse has been lifted!";
//       } else {
//         return "You don't need to lift a curse!";
//       }
//     }
// }
