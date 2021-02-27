const db = require('../config/mongo')
const Car = db.collection('Cars')
const { ObjectId } = require("mongodb")

class CarModel {
    static find(){
        return Car.find().toArray()
    }

    static findOne(id){
        return Car.findOne({"_id" : ObjectId(`${id}`)})
    }


    static create(payload){
        return Car.insertOne(payload)
    }

    static update(id, payload){
        const { title, overview, poster_path, popularity, tags } = payload
        return Car.updateOne({"_id" : ObjectId(`${id}`)}, {$set: {"title":title, "overview":overview, "poster_path":poster_path, "popularity":popularity, "tags":tags}})
    }

    static delete(id){
        return Car.deleteOne({"_id" : ObjectId(`${id}`)})
    }   
}

module.exports = CarModel