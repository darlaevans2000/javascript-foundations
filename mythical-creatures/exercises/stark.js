const Direwolf = require('./direwolf');
class Stark{
  constructor(data = {name: 'Name', area: 'Place'}){
      this.name = data.name;
      this.location = data.area || "Winterfell";
      this.safe = false;
  }
  sayHouseWords(){
    if(this.safe === false){
      return 'Winter is Coming';
    } else {
      return 'The North Remembers';
    }
  }
  callDirewolf(name, location){
    var direwolf = new Direwolf(name, this.location);
    direwolf.protect(this)
    return direwolf
  }
}
module.exports = Stark;
