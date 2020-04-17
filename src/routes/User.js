var express = require('express')
var router = express.Router()

const userController = require('../controllers/user.js')

router.get('/user', userController.list)
router.get('/user/:id', userController.getById)
router.post('/user', userController.createUser)
router.put('/user/:id', userController.updateUser)
router.delete('/user/:id', userController.destroyUser)
router.get('/userByLoginPassword/:login/:password', userController.getByLoginPassword)
router.get('/userByEnterprise/:enterprise_id', userController.getByEnterpriseId)
router.get('/userByParent/:parent_id', userController.getByParentId)
router.get('/userByCategorie/:category', userController.getByCategory)


module.exports = router
