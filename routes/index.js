const router = require('express').Router()
const userRouter = require('./user')
const carRouter = require('./car')

router.use('/', userRouter)
router.use('/cars', carRouter)

module.exports = router