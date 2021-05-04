const { describe, it, before } = require('mocha');
const CarService = require('./../../src/service/carService');

const { join } = require('path');

const carsDatabase = join(__dirname, './../../../database', 'cars.json');

describe('Carservice Suite Tests', () => {
    let carService = {}
    before(() => {
        carService = new CarService({
            cars: carsDatabase
        });
    })

    it('given a carCategory it should return an available car', async () => {
        const result = await carService.test();
        console.log('result', result);
    })
})