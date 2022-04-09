const { faker } = require('@faker-js/faker');

module.exports = class Usuario {
    constructor () {
        this._id = faker.datatype.number();
        this.name = faker.name.firstName();
        this.apellido = faker.name.lastName();
        this.phone = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
        
    }
}

