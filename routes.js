const express = require('express');
const routes = express.Router();

// Importando Controllers
const MigrationWayWork = require('./src/controller/migrationWayWorkController');
const MigrationGender = require('./src/controller/migrationGenderController');
const MigrationLanguage = require('./src/controller/migrationLanguageController');


// Importando Middlewares
const AuthenticationServices = require('./src/middleware/authenticationServices');

// Middlewares coletico
routes.use(AuthenticationServices);

// Routes
routes.post('/migration_way_work', MigrationWayWork.store);
routes.post('/migration_gender', MigrationGender.store);
routes.post('/migration_language', MigrationLanguage.store);

module.exports = routes;