const express = require('express');
const routes = express.Router();

// Importando Controllers
const Example = require('./src/controller/exampleController');

// Importando Middlewares
const ValidateTokenMiddleware = require('./src/middleware/validateTokenMiddleware');

// Middlewares coletico
routes.use(ValidateTokenMiddleware);

// Routes
routes.post('/example', Example.store);
routes.delete('/example/:id', Example.destroy);
routes.put('/example/:id', Example.update);
routes.get('/example/:id', Example.show);
routes.get('/example', Example.index);

module.exports = routes;