const db = require('../config/mongo')
const User = db.collection('Users')
const { hashPassword } = require("../helpers/password");

class CarModel {
    static login(payload){
        return User.findOne({"email" : payload.email})
    }

    static register(payload) {
        payload.password = hashPassword(payload.password);
        return User.insertOne(payload);
      }
    }

module.exports = CarModel