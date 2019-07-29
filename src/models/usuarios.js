const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;
const usuarioSchema = new Schema({
	usuario : {
		type : String,
		unique: true,
		required : true
	},
	password :{
		type : String,
		required : true
	},
	documento :{
		type : String,
		required : true
	},
	nombre	 :{
		type : String,
		required : true
	},
	correo :{
		type : String,
		required : true
	},
	telefono :{
		type : Number,
		required : true
	},
});

usuarioSchema.plugin(uniqueValidator);

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario