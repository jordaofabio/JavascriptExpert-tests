class Transaction {
    constructor({ customer, car, amoutn, dueDate }) {
        this.customer = customer;
        this.car = car;
        this.amount = amoutn;
        this.dueDate = dueDate;
    }
}

module.exports = Transaction;