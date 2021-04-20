class Sphinx{
  constructor(){
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle){
    this.riddles.push(riddle);
    if(this.riddles.length > 3){
      this.riddles.shift();
    }
  }
  attemptAnswer(attempt){
      for (var i = 0; i < this.riddles.length; i++){
        if (attempt === this.riddles[i].answer){
          this.riddles.splice(i,1);
          return 'That wasn\'t that hard, I bet you don\'t get the next one';
        } else {
          return this.heroesEaten ++;
        }
    }
  }
}
module.exports = Sphinx;





























// class Sphinx{
//   constructor(){
//     this.riddles = [];
//     this.heroesEaten = 0;
//    }
//   collectRiddle(riddle){
//     this.riddles.push(riddle);
//     if (this.riddles.length > 3){
//       this.riddles.shift();
//     }
//   }
//   attemptAnswer(attempt){
//     for (var i = 0; i < this.riddles.length; i++){
//       if (attempt === this.riddles[i].answer){
//         this.riddles.splice(i,1);
//       }
//         return 'That wasn\'t that hard, I bet you don\'t get the next one';
//       }
//       return this.heroesEaten ++;
//   }
// }
// module.exports = Sphinx;
