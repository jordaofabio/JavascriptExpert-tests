const Car = require('./../src/entities/car');
const CarCategory = require('./../src/entities/carCategory');
const Customer = require('./../src/entities/customer');
const faker = require('faker');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const seederBaseFolder = join(__dirname, '../', 'database');

const CAR_AMOUNT = 2;
const CAR_CATEGORY_AMOUNT = 1;

const carCategories = [];

for (let index = 0; index < CAR_CATEGORY_AMOUNT; index++) {
    const _carCategory = new CarCategory({
        id: faker.datatype.uuid(),
        name: faker.vehicle.type(),
        carIds: [],
        price: faker.finance.amount(20, 100)
    });

    carCategories.push(_carCategory);
}

const cars = [];
const customers = [];

for (let index = 0; index < CAR_AMOUNT; index++) {
    const car = new Car({
        id: faker.datatype.uuid(),
        name: faker.vehicle.model(),
        available: true,
        gasAvailable: true,
        releaseYear: faker.date.past().getFullYear()
    });

    const customer = new Customer({
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        age: faker.datatype.number({ min: 18 ,  max: 50 })
    })
    customers.push(customer);

    const indexCategory = faker.datatype.number({ min: 0,  max: (CAR_CATEGORY_AMOUNT - 1) });
    console.log(`carCategoriesIndex`, indexCategory);

    carCategories[indexCategory].carIds.push(car.id);
    cars.push(car);
}

const write = (filename, data) => writeFile(join(seederBaseFolder, filename), JSON.stringify(data));

;(async () => {
    await write('cars.json', cars);
    await write('carCategories.json', carCategories);
    await write('customers.json', customers);

    console.log('cars', cars);
    console.log('carCategories', carCategories);
})()



