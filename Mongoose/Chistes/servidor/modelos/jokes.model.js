const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: {
		type: String,
		required: [true, 'el campo setup es obligatorio'],
		minlength: [15, 'debe ingresar al menos 15 caracteres']
	},
	punchline: {
		type: String,
		required: [true, 'el campo punchline es requerido'],
		minlength: [3, 'el minimo es de 3 caracteres']
	}
},
{ timestamps: true }
);

const Joke = mongoose.model("broma", JokeSchema);

module.exports = Joke;