
var express = require('express');
const ejs = require('ejs');
var app = express();



app.use(express.static('public'));
app.use(express.json());       
app.use(express.urlencoded({extended: true})); 
app.set('view engine', 'ejs');

app.listen(3000);



app.get('/', function (req, res) {
	res.render('pages/index');
});

app.get('/catalog', function (req, res) {
	res.render('pages/catalog');
});

app.get('/contacts', function (req, res) {
	res.render('pages/contacts');
});

app.get('/reg', function (req, res) {
	res.render('pages/registration');
});



app.post("/reg", (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	console.log("Username: " + username);
	console.log("Password: " + password);
  });