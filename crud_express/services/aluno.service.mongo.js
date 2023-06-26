const AlunoModel = require('../models/aluno.models.mongo')

class AlunoService{

    static list(request, response){
        AlunoModel.find()
        .then(
            (alunos) => {
                response.status(201).json(alunos)
            }
        )
        .catch(
            (error) => {
                response.status(500).json(error)
            }
        )
    }

    static register(request, response){
        AlunoModel.create(request.body)
        .then(
            (aluno) => {
                response.status(201).json(aluno)
            }
        )
        .catch(
            (error) => {
                response.status(500).json(error)
            }
        )
    }


    static retrieve(request, response){
        AlunoModel.findById(request.params.id)
        .then(
            (aluno) => {
                response.status(201).json(aluno)
            }
        )
        .catch(
            (error) => {
                response.status(500).json(error)
            }
        )
    }
    
    static update(request, response){
        AlunoModel.findByIdAndUpdate(request.params.id, request.body, {new: true})
        .then(
            (aluno) => {
                response.status(201).json(aluno)
            }
        )
        .catch(
            (error) => {
                response.status(500).json(error)
            }
        )

    }

    static delete(request, response){
        AlunoModel.findByIdAndRemove(request.params.id)
        .then(
            (aluno) => {
                response.status(201).json(aluno)
            }
        )
        .catch(
            (error) => {
                response.status(500).json(error)
            }
        )
    }

}



module.exports = AlunoService