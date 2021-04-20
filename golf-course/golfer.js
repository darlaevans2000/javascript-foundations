class Golfer {
  constructor(data){
    this.name = data.name;
    this.handicap = data.handicap;
    this.frustration = 0;
    this.confidence = 0;
  }
    calculateAvg(par){
      var score = par + this.handicap;
      return `I usually shoot a ${score} on average.`;
      }
    playRound(golfCourse){
      if(golfCourse.difficulty === "hard"){
        return this.frustration = 500;
      } else {
        return this.frustration = 100;
      }
    }

    hitTheRange(){
      this.confidence += 10;
      }

    marvel(golfCourse){
      return `I love the ${golfCourse.features[0]} and ${golfCourse.features[1]} on this course!`;
      }

    whatYaShoot(score){
      if(score < 0) {
        this.frustration = 0;
        return "I AM THE GREATEST GOLFER ALIVE!";
      } if (score === 0) {
        this.frustration -= 10;
        return "Booyah!";
      } else {
        this.frustration += 20;
        return "Doh!"
      }
    }
}

module.exports = Golfer;
