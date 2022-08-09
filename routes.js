const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const siteController = require('./src/controllers/siteController');

const { loginRequired } = require('./src/middlewares/middleware');

// Rotas da home
route.get('/', homeController.index);

// Rotas de login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

// Rotas de site
route.get('/site/index', loginRequired, siteController.index);
route.post('/site/register', loginRequired, siteController.register);
route.get('/site/index/:id', loginRequired, siteController.editIndex);
route.post('/site/edit/:id', loginRequired, siteController.edit);
route.get('/site/delete/:id', loginRequired, siteController.delete);

module.exports = route;
