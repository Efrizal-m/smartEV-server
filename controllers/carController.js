const { Car } = require('../models')
const imgur = require("imgur");
const fs = require('fs')

class CarController {
    static async findAll(req, res, next) {
        try {
            const cars = await Car.find()
            if (cars) {
                res.status(200)
                res.send({cars})            
            } else {
                throw(error);            
            }            
        } catch (error) {
            console.log(error);
        }
    }
    
    static async findOne(req, res, next) {
        try {
            const { id } = req.params
            const car = await Car.findOne(id)
            if (car) {
                res.status(200)
                res.send({car})            
            } else {
                throw(error);            
            }            
        } catch (error) {
            console.log(error);
        }
    }

    static async create(req, res, next) {
        try {
            const file = req.files[0]
            const url = await imgur.uploadFile(`../data/uploads/${file.filename}`)
            const image = url.data.link

            const { name, overview, battery, acceleration, topSpeed, range, efficiency, fastCharge, price } = req.body
            const payload = { name, overview, battery, acceleration, topSpeed, range, efficiency, fastCharge, price, image }
            const result = await Car.create(payload)
            if (result) {
                res.status(201)
                res.send(result.ops[0])
                fs.unlinkSync(`../data/uploads/${file.filename}`)
            } else {
                throw(error)
            }
        } catch (error) {
            console.log(error);
        }
    }

    static async update(req, res, next) {
        try {
            const { id } = req.params
            const file = req.files[0]
            const url = await imgur.uploadFile(`../data/uploads/${file.filename}`)
            const image = url.data.link

            const { name, overview, battery, acceleration, topSpeed, range, efficiency, fastCharge, price } = req.body
            const payload = { name, overview, battery, acceleration, topSpeed, range, efficiency, fastCharge, price, image }
            const result = await Car.create(payload)
            if (result) {
                res.status(201)
                res.send(result.ops[0])
                fs.unlinkSync(`../data/uploads/${file.filename}`)
            } else {
                throw(error)
            }
        } catch (error) {
            console.log(error);
        }
    }

    static async delete(req, res, next) {
        try {
            const { id } = req.params
            await Car.delete(id)
            res.status(200)            
            res.send({message:'Succes to delete'})
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = CarController