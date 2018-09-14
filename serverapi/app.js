var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    routerHome = require('./routes/index'),
    clienteController = require('./controllers/clientes');

app.route('/').get(routerHome);
app.route('/cliente').get(clienteController.list);

app.listen(port);
