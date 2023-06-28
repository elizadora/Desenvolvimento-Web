const LoginModel = require('../models/login.models');

class LoginService{
    static validate(login, senha){
        if(login == 'admin' && senha == 'admin'){
            return true
        }
        return false
    }
}

module.exports = LoginService;