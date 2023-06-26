const ProfessorService = require("../services/professor.service")
const ProfessorServiceMongo = require("../services/professor.service.mongo")

var express = require('express');
var router = express.Router();

// router.get('/listar', function(req, res, next) {
//     res.json(ProfessorService.list());
// });

// router.post('/cadastrar', function(req, res, next) {
//     const professor = ProfessorService.register(req.body);
//     res.json(professor)
// });

// router.get('/recuperar/:id', function(req, res, next) {
//     const professor = ProfessorService.retrieve(req.params.id);
//     res.json(professor)
// });

// router.put('/atualizar/:id', function(req, res, next) {
//     const professor = ProfessorService.update(req.params.id, req.body);
//     res.json(professor)
// });

// router.delete('/remover/:id', function(req, res, next) {
//     const out = ProfessorService.delete(req.params.id);
//     res.json({"sucesso" : out})
// });


router.get(
    '/listar', 
    (request, response, next) =>{
        ProfessorServiceMongo.list(request, response)
    }    
);


router.post(
    '/cadastrar',
    (request, response, next) =>{
        ProfessorServiceMongo.register(request, response)
    }
);

router.get(
    '/recuperar/:id',
    (request, response, next) =>{
        ProfessorServiceMongo.retrieve(request, response)
    }
);

router.put(
    '/atualizar/:id',
    (request, response, next) =>{
        ProfessorServiceMongo.update(request, response)
    }
);

router.delete(
    '/remover/:id',
    (request, response, next) =>{
        ProfessorServiceMongo.delete(request, response)
    }
);


module.exports = router;
