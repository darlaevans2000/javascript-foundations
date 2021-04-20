class Direwolf{
  constructor(name, home, size){
    this.name = name;
    this.home = home || "Beyond the Wall";
    this.size = size || "Massive";
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
    }
    protect(stark){
      if(this.home === stark.location && this.starksToProtect.length < 2){
        this.starksToProtect.push(stark);
        this.huntsWhiteWalkers = false;
        stark.safe = true;
      }
    }
    leave(stark){
      this.starksToProtect.pop(stark);
      stark.safe = false;
    }
}
module.exports = Direwolf;
