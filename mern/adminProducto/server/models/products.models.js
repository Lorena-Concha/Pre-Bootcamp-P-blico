const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'el campo Title es obligatorio'],
		minlength: [2, 'debe ingresar al menos 2 caracteres']
	},
	price: {
		type: Number,
		required: [true, 'el campo number es requerido'],
		minlength: [3, 'el minimo es de 3 caracteres']
	},
    description: {
		type: String,
		required: [true, 'el campo number es requerido'],
		minlength: [3, 'el minimo es de 3 caracteres']
	}
},
{ timestamps: true }
);

const Product = mongoose.model("product", ProductoSchema);

module.exports = Product;
