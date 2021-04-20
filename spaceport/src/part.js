class Part{
  constructor(data){
    this.name = data.name;
    this.type = data.type;
    this.value = data.value;
    this.broken = false;
    this.checkForValidity = this.check();
    this.isValid = this.ifValid();
}
  check(){
    if(this.name === undefined){
  return "This part needs a name!";
} if (this.type === undefined)  {
  return "This part needs a type!";
} if (this.value === undefined)  {
  return "This part needs a value!";
} else {
  return "Is Valid Salad";
}
};
  ifValid(){
     if (this.checkForValidity === "Is Valid Salad"){
      return true;
    } else {
      return false;
    }
  }
}
module.exports = Part;
