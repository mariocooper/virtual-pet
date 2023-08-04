const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
    });

    it('has an inital age of 0', () => {
        const pet = new Pet('Fido')
        expect(pet.age).toEqual(0);
    });

    it('has an inital hunger of 0', () => {
        const pet = new Pet('Fido')
        expect(pet.hunger).toEqual(0);
    });

    it('has an inital fitness of 10', () => {
        const pet = new Pet('Fido')
        expect(pet.fitness).toEqual(10);
    });

    it('has an empty children property initially', () => {
        const pet = new Pet('Fido')
        expect(pet.children).toEqual([]);
    });
});

describe('growUp', () => {
    it('increases age by 1', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
    });

    it('increases hunger by 5', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.hunger).toEqual(5);
    });

    it('decreases fitness by 3', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.growUp()).toThrow("Your pet is no longer alive :(");
    });
});

describe('walk', () => {
    it('increases fitness by 4', () => {
        const pet = new Pet('Fido');
        pet.fitness = 4;
        pet.walk();
        expect(pet.fitness).toEqual(8);
    });

    it('increases fitness to a maximum of 10', () => {
        const pet = new Pet('Fido');
        pet.fitness = 9;
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.hunger = 10;
        expect(() => pet.walk()).toThrow("Your pet is no longer alive :(");
    });
});

describe('feed', () => {
    it('decreases hunger by 3', () => {
        const pet = new Pet('Fido');
        pet.hunger = 6
        pet.feed();
        expect(pet.hunger).toEqual(3);
    });

    it('decreases hunger to a minimum of 0', () => {
        const pet = new Pet('Fido');
        pet.hunger = 1
        pet.feed();
        expect(pet.hunger).toEqual(0);
    });

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.fitness = 0;
        expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
    });
});

describe('checkUp', () => {
    it('needs a walk when fitness is 3 or less AND needs feeding when hunger is 5 or more', () => {
        const pet = new Pet('Fido');
        pet.hunger = 7;
        pet.fitness = 1;
        pet.checkUp();
        expect(pet.checkUp()).toEqual("I am hungry AND I need a walk");
    });
    
    it('needs a walk when fitness is 3 or less', () => {
        const pet = new Pet('Fido');
        pet.fitness = 2;
        pet.checkUp();
        expect(pet.checkUp()).toEqual("I need a walk");
    });

    it('needs feeding when hunger is 5 or more', () => {
        const pet = new Pet('Fido');
        pet.hunger = 6;
        pet.checkUp();
        expect(pet.checkUp()).toEqual("I am hungry");
    });

    it('checks if the pet is doing well', () => {
        const pet = new Pet('Fido');
        pet.hunger = 2;
        pet.fitness = 5;
        pet.checkUp();
        expect(pet.checkUp()).toEqual("I feel great!");
    });

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.fitness = 0;
        expect(() => pet.checkUp()).toThrow("Your pet is no longer alive :(");
    });
});

describe('isAlive', () => {
    it('returns true if the pet is alive', () => {
        const pet = new Pet('Fido');
        pet.age = 20;
        pet.hunger = 2;
        pet.fitness = 8;
        expect(pet.isAlive).toBeTruthy();
    });

    it('returns false if the pets fitness is 0 or less', () => {
        const pet = new Pet('Fido');
        pet.age = 21;
        pet.hunger = 2;
        pet.fitness = 0;
        expect(pet.isAlive).toBeFalsy();
    });

    it('returns false if the pets hunger is 10 or more', () => {
        const pet = new Pet('Fido');
        pet.age = 18;
        pet.hunger = 10;
        pet.fitness = 8;
        expect(pet.isAlive).toBeFalsy();
    });

    it('returns false if the pet is 30 or older', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        pet.hunger = 2;
        pet.fitness = 8;
        expect(pet.isAlive).toBeFalsy();
    });
});

describe('adoptChild', () => {
    it('returns a child property within the children array', () => {
        const parent = new Pet('Fido');
        const child1 = new Pet('Bella');
        parent.adoptChild(child1);
        expect(parent.children).toEqual([{
          name: 'Bella', 
          age: 0, 
          hunger: 0, 
          fitness: 10, 
          children: []
        }])
    });

    it('returns multiple children within the children array when child instances are created', () => {
        const parent = new Pet('Fido');
        const child1 = new Pet('Bella');
        const child2 = new Pet('Sandy');
        const child3 = new Pet('Peaches');
        parent.adoptChild(child1)
        parent.adoptChild(child2);
        parent.adoptChild(child3);
        expect(parent.children).toEqual([
          {
            name: 'Bella', 
            age: 0, 
            hunger: 0, 
            fitness: 10, 
            children: []
          },
          {
            name: 'Sandy', 
            age: 0, 
            hunger: 0, 
            fitness: 10, 
            children: []
          },
          {
            name: 'Peaches', 
            age: 0, 
            hunger: 0, 
            fitness: 10, 
            children: []
          }
        ])
    });

    it('increases childs age by 1', () => {
        const parent = new Pet('Fido');
        const child1 = new Pet('Bella');
        child1.growUp();
        expect(child1.age).toEqual(1);
    });

    it('increases childs fitness by 4', () => {
        const parent = new Pet('Fido');
        const child1 = new Pet('Bella');
        child1.fitness = 5;
        child1.walk();
        expect(child1.fitness).toEqual(9);
    });

    it('decreases childs hunger by 1', () => {
        const parent = new Pet('Fido');
        const child1 = new Pet('Bella');
        child1.hunger = 5
        child1.feed();
        expect(child1.hunger).toEqual(2);
    });

    it('checks if child is feeling well', () => {
        const parent = new Pet('Fido');
        const child1 = new Pet('Bella');
        child1.hunger = 3;
        child1.fitness = 8;
        child1.checkUp();
        expect(child1.checkUp()).toEqual("I feel great!");
    });

    it('throws an error if the pet is not alive', () => {
        const parent = new Pet('Fido');
        parent.fitness = 0;
        expect(() => parent.adoptChild()).toThrow("Your pet is no longer alive :(");
    });
});
