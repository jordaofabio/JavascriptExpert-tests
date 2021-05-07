const { describe, it, before } = require('mocha');
const CarService = require('./../../src/service/carService');

const { join } = require('path');
const { expect } = require('chai');

const carsDatabase = join(__dirname, './../../database', 'cars.json');

const mocks = {
    validCarCategory: require('./../mocks/valid-carCategory.json'),
    validCar: require('./../mocks/valid-car.json'),
    validCustomer: require('./../mocks/valid-customer.json')
}

describe('Carservice Suite Tests', () => {
    let carService = {}
    before(() => {
        carService = new CarService({
            cars: carsDatabase
        });
    })

    it('shoul retrieve a random position from an array', () => {
        const data = [0, 1, 2, 3, 4];
        const result = carService.getRandomPositionFromArray(data);

        expect(result).to.be.lte(data.length).and.be.gte(0);
    })

    it('should choose the first id from carIds in carCategory', () => {
        const carCategory = mocks.validCarCategory
        const carIdIndex =  0;

        const result = carService.chooseRandomCar(carCategory);
        const expected = carCategory.carIds(carIdIndex);

        expect(result).to.be.equal(expected);
    })
    // it('given a carCategory it should return an available car', async () => {
    //     const car = mocks.validCar;
    //     const carCategory = Object.create(mocks.validCarCategory);
    //     carCategory.ids = [car.id];

    //     const result = await carService.getAvailableCar(carCategory);
    //     const expected = car;

    //     expect(result).to.be.deep.equal(expected);
    // })
})