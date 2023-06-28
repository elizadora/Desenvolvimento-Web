const LoginService = require('../services/login.service');

var express = require('express');
var router = express.Router();


// rota para login passando login e senha para a validaçao
router.post(
    '/',
    (request, response, next) =>{
        const out = LoginService.validate(request.body, response)
        response.json(out)
    }
);

module.exports = router;