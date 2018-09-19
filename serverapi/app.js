const express = require('express');
const port = process.env.PORT || 3000;
const routerHome = require('./routes/index');
const clienteController = require('./controllers/clientes');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();  
});

app.get('/', function(req, res){
  console.log('Servidor pronto para receber requisições...');
  res.send('Servidor pronto para receber requisições...');
});

app.get('/cliente', function(req, res){
  clienteController.list(req, res);
})

app.post('/cliente/new', function(req, res){
  clienteController.create(req, res);
});

app.listen(port);
