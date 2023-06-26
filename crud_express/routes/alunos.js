const AlunoService = require('../services/aluno.service.mongo');

var express = require('express');
var router = express.Router();

router.get(
    '/listar',
    (request, response, next) => {
        AlunoService.list(request, response)
    }
);

router.post(
    '/cadastrar',
    (request, response, next) => {
        AlunoService.register(request, response)
    }
)

router.get(
    '/recuperar/:id',
    (request, response, next) => {
        AlunoService.retrieve(request, response)
    }
)

router.put(
    '/atualizar/:id',
    (request, response, next) => {
        AlunoService.update(request, response)
    }
)


router.delete(
    '/remover/:id',
    (request, reponse, next) => {
        AlunoService.delete(request, reponse)
    }
)


module.exports = router;