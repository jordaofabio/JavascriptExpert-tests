const BaseRepository = require('./../repository/base/baseRepository');

class CarService {
    constructor({ cars }) {
        this.carRepository = new BaseRepository({ file: cars})
    }

    getRandomPositionFromArray(list) {
        const listLength = list.length;
        return Math.floor(
            Math.random() * (listLength)
        )
    }
    
    async getAvailableCar(carCategory) {
        return {}
    }
}

module.exports = CarService;