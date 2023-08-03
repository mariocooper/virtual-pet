const INITIAL_AGE = 0;
const MINIMUM_HUNGER = 0;
const MAXIMUM_FITNESS = 10;
const HUNGRY_AND_NEEDS_WALK = "I am hungry AND I need a walk";
const NEEDS_WALK = "I need a walk";
const HUNGRY = "I am hungry"
const HAPPY = "I feel great!";
const CRITICAL_FITNESS = 0;
const CRITICAL_HUNGER = 10;
const CRITICAL_AGE = 30;

function Pet(name) {
    this.name = name
    this.age = INITIAL_AGE
    this.hunger = MINIMUM_HUNGER
    this.fitness = MAXIMUM_FITNESS
}

Pet.prototype = {
  get isAlive() {
    return (this.age < CRITICAL_AGE) && (this.hunger < CRITICAL_HUNGER) && (this.fitness > CRITICAL_FITNESS);
  }
}

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
    }

Pet.prototype.walk = function() {
  if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
    this.fitness += 4;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  }
}

Pet.prototype.feed = function() {
  if ((this.hunger - 3) <= MINIMUM_HUNGER) {
    this.hunger = MINIMUM_HUNGER;
  } else {
    this.hunger -= 3;
  }
}

Pet.prototype.checkUp = function() {
  if (((this.fitness) <= 3) && ((this.hunger) >= 5)) {
    return HUNGRY_AND_NEEDS_WALK;
  } else if ((this.fitness) <= 3) {
    return NEEDS_WALK;
  } else if ((this.hunger) >= 5) {
    return HUNGRY;
  } else {
    return HAPPY;
  }
}

module.exports = Pet;
