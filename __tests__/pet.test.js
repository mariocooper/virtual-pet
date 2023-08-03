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
