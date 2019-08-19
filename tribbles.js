let food = "everything"
let noise = "purrrr"

class Tribbles {
  constructor(input) {
    this.name = input.name;
    this.color = input.color;
    this.gender = input.gender;
    this.weight = input.weight;
    this.tailLengthInch = input.tailLengthInch;
    this.teethSize = input.teethSize;
    console.log("Who fed the Tribble!!!!")
  }
  eat(food) {
    console.log(`Chomp chomp ${food}.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}

export default Tribbles;