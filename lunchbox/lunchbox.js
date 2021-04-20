class LunchBox{
  constructor(data){
    this.owner = data.owner;
    this.material = data.madeOf;
    this.color = data.color;
    this.shape = data.shape;
    this.snacks = [];
  }
  acquireSnack(snack){
    this.snacks.push(snack);
    snack.isInLunchBox = true;
  }
  findHealthySnacks(){
    var healthySnacks = [];
    // make a for loop to look through snacks with the word fruit
    for(var i = 0; i < this.snacks.length; i++){
      if(this.snacks[i].checkForHealthy()){
        healthySnacks.push(this.snacks[i].type)
      }
    }
    return healthySnacks;
  }
}
module.exports = LunchBox;
