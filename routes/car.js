const router = require('express').Router()
const {CarController} = require('../controllers')
const authentication = require('../middlewares/authentication')

router.get('/', CarController.findAll)
router.use(authentication)
router.get('/:id', CarController.findOne)
router.post('/', CarController.create)
router.put('/:id', CarController.update)
router.delete('/:id', CarController.delete)

module.exports = router