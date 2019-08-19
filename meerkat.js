let food = "Nuts"
let noise = "chirp chirp"

class Meerkat {
  constructor(input) {
    this.name = input.name;
    this.color = input.color;
    this.gender = input.gender;
    this.weight = input.weight;
    this.tailLengthInch = input.tailLengthInch;
    this.teethSize = input.teethSize;
    console.log("Meerkat Created!!")
  }
  eat(food) {
    console.log(`Chomp chomp all the ${food}.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}

export default Meerkat;