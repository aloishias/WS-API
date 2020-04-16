var express = require('express')
var router = express.Router()

const userController = require('../controllers/user.js')

router.get('/user', userController.list)
router.get('/user/:id', userController.getById)
router.post('/user', userController.createUser)
router.put('/user/:id', userController.updateUser)
router.delete('/user/:id', userController.destroyUser)
router.get('/userByLoginPassword', userController.getByLoginPassword)
router.get('/userByEnterprise', userController.getByEnterpriseId)
router.get('/userByParent', userController.getByParentId)
router.get('/userByCategorie', userController.getByCategory)


module.exports = router
