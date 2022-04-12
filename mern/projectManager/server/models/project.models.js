const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const ProjectSchema = new mongoose.Schema({
	projectName: {
		type: String,
		required: [true, 'el campo nombre es obligatorio'],
		minlength: [3, 'debe ingresar al menos 3 caracteres'],
        unique: [true, 'el Projecto debe ser unico']
    },
	due: {
		type: Date,
		required: [true, 'el es requerido']
	},
    status: {
		type: String,
		required: [true, 'el campo nombre es obligatorio'],
		minlength: [3, 'debe ingresar al menos 3 caracteres']
    },
},
{ timestamps: true }
);

ProjectSchema.plugin(uniqueValidator)

const Project = mongoose.model("project", ProjectSchema);

module.exports = Project;
