const express = require('express')
const app = express ()
const path = require('path')
const hbs = require ('hbs')
const Usuarios = require('../models/usuarios')
const dirViews = path.join(__dirname, '../../template/views')
const dirPartials = path.join(__dirname, '../../template/partials')
const bcrypt = require('bcrypt');
const $ = require('jquery')
const toastr = require('toastr');


//require('../helpers/helpers')

//hbs
app.set('view engine', 'hbs')
app.set('views', dirViews)
hbs.registerPartials(dirPartials)

app.get('/', (req, res ) => {
	res.render('Login', {
		mensaje: '',
	})	
});

app.post('/', (req, res) => {
	let usuario = new Usuarios({
		usuario : req.body.Usuario,
		password : bcrypt.hashSync(req.body.Password, 10),
		documento : req.body.Documento,
		nombre : req.body.Nombre,
		correo : req.body.Correo,
		telefono : req.body.Telefono
	});

	usuario.save((err, resultado) => {
		if(err){
			if(err.message.indexOf('to be unique') != '-1'){
				return toastr.error('El usuario ya se encuentra registrado')
			}
			return toastr.error('Faltan datos por diligenciar')
		}	
		res.render('Login'),{
			mensaje: 'Usuario Ingresado Correctamnete'
		}
	})
})

app.get('*',(req,res)=> {
	res.render('error', {
		titulo: "Error 404",		
	})
});

module.exports = app