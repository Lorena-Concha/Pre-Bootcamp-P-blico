const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new mongoose.Schema({
	userName: {
		type: String,
		required: [true, 'el campo nombre es obligatorio'],
		minlength: [3, 'debe ingresar al menos 3 caracteres'],
        
    },
	email: {
		type: String,
		required: [true, 'el email requerido'],
        unique: [true, 'el correo ya existe'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Ingresa un mail correcto']
    },
    password: {
		type: String,
		required: [true, 'el campo nombre es obligatorio'],
		minlength: [5, 'debe ingresar al menos 5 caracteres']
    },
},
{ timestamps: true }
);

UserSchema.plugin(uniqueValidator)

const User = mongoose.model("user", UserSchema);

module.exports = User;