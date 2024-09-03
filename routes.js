const express = require('express');
const routes = express.Router();

// Importando Controllers
const Logout = require('./src/controller/logoutController');
const MigrationRecruitment = require('./src/controller/migrationRecruitmentController');
const Feed = require('./src/controller/migrrationFeedController');
const Birthday = require('./src/controller/migrationBirthday');


// Importando Middlewares
const AuthenticationServices = require('./src/middleware/authenticationServices');

// Middlewares coletico
routes.use(AuthenticationServices);

// Routes
// routes.put('/logout', Logout.update);
routes.post('/birthday_migration', Birthday.store);

module.exports = routes;