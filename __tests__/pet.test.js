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
});
