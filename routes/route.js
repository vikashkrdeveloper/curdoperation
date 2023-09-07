const express = require('express');
const route = express.Router();
const homeControllers = require('../controllers/homeControllers')
const errorControllers = require('../controllers/errorControllers');
const registrationControllers = require('../controllers/registrationControllers');
const loginControllers = require('../controllers/loginControllers')
const authuserControllers = require('../controllers/authuserControllers');
const AuthUsermiddleware = require('../middleware/AuthUser')
const signoutControllers = require('../controllers/signoutControllers')
const adddataControllers = require('../controllers/adddataControllers');
const getadddataControllers = require('../controllers/getadddataControllers');
const deleteadddataControllers=require('../controllers/deleteadddataControllers');
const editadddataControllers=require('../controllers/editadddataControllers');
route.get('/', homeControllers)
route.get('/signout', signoutControllers)
route.get('/getadddata', getadddataControllers)
route.get('/auth/user', AuthUsermiddleware, authuserControllers)
route.post('/register', registrationControllers)
route.post('/adddata', adddataControllers)
route.post('/user/login', loginControllers)
route.delete('/data/delete/:id', deleteadddataControllers)
route.put('/data/edit/:id', editadddataControllers)
route.all('*', errorControllers)

module.exports = route;