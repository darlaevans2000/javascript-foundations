var Person = require('./person');
var Statue = require('./statue');

class Medusa{
  constructor(name){
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(victim){
    var statue = new Statue(victim.name);
    if (this.statues.length >= 3){
      var freedPerson = new Person(this.statues[0].name, "relieved");
      this.statues.shift();
      this.statues.push(statue)
      return freedPerson;
  }
    this.statues.push(statue);
}
}
module.exports = Medusa;





















// var Person = require('./person');
// var Statue = require('./statue');
//
// class Medusa{
//   constructor(name){
//     this.name = name;
//     this.statues = [];
//   }
//   gazeAtVictim(victim){
//     var statue = new Statue(victim.name);
//     if(this.statues.length <= 2){
//       this.statues.push(statue);
//     } else {
//       this.statues.push(statue);
//         return new Person(this.statues.shift().name, "relieved");
//     }
//   }
// }
// module.exports = Medusa;
