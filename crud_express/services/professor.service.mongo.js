const ProfessorModel = require('../models/professor.models.mongo')

class ProfessorService {
    static list(request, response){
        ProfessorModel.find()
        .then(
            (professores) => {
                response.status(201).json(professores)
            }
        )
        .catch(
            (error) => {
                response.status(500).json(error)
            }
        )
    }

    static register(request, response){
        ProfessorModel.create(request.body)
        .then(
            (professor) => {
                response.status(201).json(professor)
            }
        )
        .catch(
            (error) => {
                response.status(500).json(error)
            }
        )
    }

    static retrieve(request, response){
        ProfessorModel.findById(request.params.id)
        .then(
            (professor) => {
                response.status(201).json(professor)
            }
        )
        .catch(
            (error) => {
                response.status(500).json(error)
            }
        )
    }

    static update(request, response){
        ProfessorModel.findByIdAndUpdate(request.params.id, request.body, {new: true})
        .then(
            (professor) => {
                response.status(201).json(professor)
            }
        )
        .catch(
            (error) => {
                response.status(500).json(error)
            }
        )
    }

    static delete(request, response){
        ProfessorModel.findByIdAndRemove(request.params.id)
        .then(
            (professor) => {
                response.status(201).json(professor)
            }
        )
        .catch(
            (error) => {
                response.status(500).json(error)
            }
        )
    }
    

}

module.exports = ProfessorService