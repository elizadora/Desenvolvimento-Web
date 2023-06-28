const LoginModel = require('../models/login.models');

// service de login para validar o login e senha
class LoginService{
    static validate(data){
        if(data.login === 'admin' && data.senha === 'admin'){
            return true
        }
        return false
    }
}

module.exports = LoginService;