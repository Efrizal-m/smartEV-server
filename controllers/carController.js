const { Car } = require('../models')

class CarController {
    static findAll(req, res, next) {
        Car.find()
        .then(result => {
            res.send(result)
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    static findOne(req, res, next) {
        const { id } = req.params
        Car.findOne(id)
        .then(result => {
            res.send(result)
        })
        .catch(error => {
            console.log(error);
        })
    }

    static create(req, res, next) {
        const { title, overview, poster_path, popularity, tags } = req.body
        const payload = { title, overview, poster_path, popularity, tags }

        Car.create(payload)
        .then(result => {
            res.status(201)
            res.send(result.ops[0])
        })
        .catch(error => {
            console.log(error);
        })
    }

    static update(req, res, next) {
        const { id } = req.params
        const { title, overview, poster_path, popularity, tags } = req.body
        const payload = { title, overview, poster_path, popularity, tags }

        Car.update(id, payload)
        .then(result => {
            res.status(200)
            res.send({message:'success to update'})
        })
        .catch(error => {
            console.log(error);
        })
    }

    static delete(req, res, next) {
        const { id } = req.params
        Car.delete(id)
        .then(result => {
            res.send({message:'succes to delete'})
        })
        .catch(error => {
            console.log(error);
        })
    }

}

module.exports = CarController