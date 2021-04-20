class Vampire {
  constructor(name, pet){
    this.name = name;
    this.pet = pet || "bat";
    this.thirsty = true;
    this.ouncesDrank = 0;
  }
  drink(){
     if (this.ouncesDrank <= 40){
       this.thirsty = false
        this.ouncesDrank += 10;
     } else {
        return "I'm too full to drink anymore!";
     }
     }
  }

module.exports = Vampire;
