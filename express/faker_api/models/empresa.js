const { faker } = require('@faker-js/faker');


module.exports = class Empresa {
    constructor() {
        this._id = faker.datatype.number();
        this.name = faker.commerce.department();
        this.direccion = {
            calle: faker.address.streetName(),
            ciudad: faker.address.cityName(),
            estado: faker.address.state(),
            codigoPostal : faker.address.zipCodeByState(),
            pais: faker.address.country(),
        };
    }
}


