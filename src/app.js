//requires
const express = require('express')
const app = express ()
const path = require('path')
const hbs = require ('hbs')
const bodyParser = require('body-parser')
const session = require('express-session')
//require('./helpers/helpers')

//paths
const dirPublic = path.join(__dirname, "../public")
const dirViews = path.join(__dirname, '../template/views')
const dirPartials = path.join(__dirname, '../template/partials')
const dirNode_modules = path.join(__dirname , '../node_modules')

//statics
app.use(express.static(dirPublic))
app.use('/css', express.static(dirNode_modules + '/bootstrap/dist/css'));
app.use('/css', express.static( '../../public/css/site.css'));
app.use('/js', express.static(dirNode_modules + '/jquery/dist'));
app.use('/js', express.static(dirNode_modules + '/popper.js/dist'));
app.use('/js', express.static(dirNode_modules + '/bootstrap/dist/js'));

//BodyParser
app.use(bodyParser.urlencoded({ extended: false }));

//hbs1
app.set('view engine', 'hbs')
app.set('views', dirViews)
hbs.registerPartials(dirPartials)

//session
app.use(session({
    secret: 'keyboart cat',
    resave: false,
    saveUninitialized: true
}))

//Views
app.get('/', (req, res ) => {
	res.render('Login', {
		titulo: 'Inicio'		
	})	
});

app.get('/NuevoUsuario',(req, res) => {
    res.render('NuevoUsuario'),{
             
    }
});

app.post('/Index', (req,res) => {
    req.session.usuario
    res.render('Inicio',{

    })
});

app.get('*',(req,res)=> {
	res.render('error', {
		titulo: "Error 404"
	})
});

app.listen(3000, () => {
	console.log ('servidor en el puerto 3000')
});