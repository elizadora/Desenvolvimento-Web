const LoginService = require('../services/login.service');


var express = require('express');
var router = express.Router();

router.post(
    '/',
    (request, response, next) =>{
        const out = LoginService.validate(request.body, response)
        response.json({"res": out})
    }
);

module.exports = router;