class Ogre{
  constructor(data){
    this.name = data.name;
    this.home = data.abode || "Swamp";
    this.swings = 0;
  }

  encounter(human){
    human.encounterCounter++;
    if(human.noticesOgre()){
      this.swingAt(human)
    }
    if(this.swings === 2){
      human.knockedOut = true;
    }
  }

  swingAt(human){
      this.swings ++;
  }
  
  apologize(human){
    human.knockedOut = false;
  }
}
module.exports = Ogre;
