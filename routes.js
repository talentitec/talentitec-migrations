const express = require('express');
const routes = express.Router();

// Importando Controllers
const Sector = require('./src/controller/migrationSector');


// Importando Middlewares
const AuthenticationServices = require('./src/middleware/authenticationServices');

// Middlewares coletico
routes.use(AuthenticationServices);

// Routes
// routes.put('/logout', Logout.update);
routes.post('/role_migration', Sector.store);

module.exports = routes;