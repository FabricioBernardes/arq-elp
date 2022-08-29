const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const webmapController = require('./src/controllers/webmapController');
const siteMainInfosController = require('./src/controllers/siteMainInfosController');
const loginController = require('./src/controllers/loginController');
const siteRegisterController = require('./src/controllers/siteRegisterController');
const sitesListSearchController = require('./src/controllers/sitesListSearchController');

const { loginRequired } = require('./src/middlewares/middleware');

// Rotas da home
route.get('/', homeController.index);

// Rotas de login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

// Rotas de criação/edição de sitios arqueologicos
route.get('/site-register/index', loginRequired, siteRegisterController.index);
route.post('/site-register/register', loginRequired, siteRegisterController.register);
route.get('/site-register/index/:id', loginRequired, siteRegisterController.editIndex);
route.post('/site-register/edit/:id', loginRequired, siteRegisterController.edit);
route.get('/site-register/delete/:id', loginRequired, siteRegisterController.delete);

// Rota webmap
route.get('/webmap', webmapController.index);

// Rota listagem de sitios
route.get('/sites-list', sitesListSearchController.index);

// Rota ficha de sitio arqueologico
route.get('/site-main/:siteId?', siteMainInfosController.index);



module.exports = route;
