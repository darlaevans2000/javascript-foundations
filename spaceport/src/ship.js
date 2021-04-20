var Part = require('../src/part');
class Ship{
  constructor(data){
    this.name = data.name;
    this.type = data.type;
    this.maxCrew = data.maxCrew;
    this.odometer = data.odometer || 0;
    this.fuelCapacity = data.fuelCapacity || 10;
    this.fuel = 0;
    this.captain = data.captain;
    this.crew = [];
    this.cargo = [];
    this.parts = data.parts || {};
  }
  addCrew(members){
    var openCrewSpots = this.maxCrew - this.crew.length;
    for(var i = 0; i < openCrewSpots; i++){
      if (members[i].isAlive === true) this.crew.push(members[i]);
    }
  }
  loadCargo(newCargo){
    if(newCargo instanceof Part){
      this.cargo.push(newCargo);
    }
  }
  updatePart(newPart){
    this.parts[newPart.type] = newPart;
    var firstPart = this.parts[newPart.type]
    var partValue = firstPart.value;
    var difference = partValue - newPart.value
    return difference;
  }
}
module.exports = Ship;
