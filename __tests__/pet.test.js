const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
      const pet = new Pet('Fido');

      expect(pet.name).toEqual('Fido');
  });

  it('has an initial age of 0', () => {
    const pet = new Pet('Fido');

    expect(pet.age).toEqual(0);
  });

  it('has an initial hunger of 0', () => {
    const pet = new Pet('Fido');

    expect(pet.hunger).toEqual(0);
  });

  it('has an initial fitness of 10', () => {
    const pet = new Pet('Fido');

    expect(pet.fitness).toEqual(10);
  });
});

describe('growUp', () => {
  it('increments the age by 1', () => {
    const pet = new Pet('Fido');
  
    pet.growUp();
  
    expect(pet.age).toEqual(1);
  });

  it('increments the hunger by 5', () => {
    const pet = new Pet('Fido');
  
    pet.growUp();

    expect(pet.hunger).toEqual(5);
  });

  it('decrements the fitness by 3', () => {
    const pet = new Pet('Fido');
  
    pet.growUp();

    expect(pet.fitness).toEqual(7);
  });

  describe('walk', () => {
    it('increases fitness by 4', () => {
      const pet = new Pet('fido');
  
      pet.fitness = 4;
      pet.walk();
  
      expect(pet.fitness).toEqual(8);
    });

    it('increases fitness by to a maximum of 10', () => {
      const pet = new Pet('fido');
  
      pet.fitness = 8;
      pet.walk();
  
      expect(pet.fitness).toEqual(10);
    });
  });

  describe('feed', () => {
    it('decreases hunger by 3', () => {
      const pet = new Pet('fido');
  
      pet.hunger = 3;
      pet.feed();
  
      expect(pet.hunger).toEqual(0);
    });
  });

  describe('checkUp', () => {
    it('checks  if fitness levels are not less than 3', () => {
      const pet = new Pet('fido');
  
      pet.fitness = 3;
      pet.checkUp();

      expect(pet.checkUp()).toEqual('I need a walk');
    });

    it('checks if hunger levels are not more than 5', () => {
      const pet = new Pet('fido');

      pet.hunger = 5;
      pet.checkUp();

      expect(pet.checkUp()).toEqual('I am hungry');
    });

    it('checks if fitness levels are 3 or less AND hunger 5 or more', () => {
      const pet = new Pet('fido');
  
      pet.fitness = 3;
      pet.hunger = 5;
      pet.checkUp();

      expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
    });

    it('checks if fitness levels and hunger are in good condition', () => {
      const pet = new Pet('fido');

      pet.fitness = 4;
      pet.hunger = 4;
      pet.checkUp();

      expect(pet.checkUp()).toEqual('I feel great!');
    });
  });
});