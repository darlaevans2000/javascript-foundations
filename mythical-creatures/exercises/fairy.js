class Fairy{
  constructor(name){
    this.name = name;
    this.dust = 10;
    this.disposition = "Good natured";
    this.humanWards = [];
    this.babyCounter = 0;
    this.clothes = {
      dresses: ["Iris"]
    }
  }
  receiveBelief(){
    this.dust ++;
  }
  believe(){
    this.dust += 10;
  }
  makeDresses(flower){
  this.clothes.dresses = this.clothes.dresses.concat(flower)
  //concat() merges two or more arrays then returns the new array including what was in the old array
  }
  becomeProvoked(){
    this.disposition = "Vengeful"
}
  replaceInfant(infant){
    this.babyCounter ++;
    if (this.disposition === "Vengeful" && this.babyCounter < 3){
      infant.disposition = "Malicious";
      this.humanWards = this.humanWards.concat(infant)
      } else {
        this.disposition = "Good natured";
      return infant
    }
  }
}
module.exports = Fairy;
