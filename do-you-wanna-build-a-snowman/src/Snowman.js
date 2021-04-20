class Snowman {
  constructor(snowmanObject){
    this.carrots = snowmanObject.carrots;
    this.coal = snowmanObject.coal;
    this.buttons = snowmanObject.buttons;
    this.snowballs = snowmanObject.snowballs;
    this.magicHat = false;
  }
  canWearMagicHat(){
    if(this.coal >=2 && this.buttons >=5)
    this.magicHat = true;
  }
}

module.exports = Snowman;
