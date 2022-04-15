const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'el campo author es obligatorio'],
		minlength: [3, 'debe ingresar al menos 3 caracteres']
	},
},
{ timestamps: true }
);

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;