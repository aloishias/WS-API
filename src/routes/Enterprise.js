var express = require('express')
var router = express.Router()

const enterpriseController = require('../controllers/enterprise.js')

router.get('/enterprise', enterpriseController.list)
router.get('/enterprise/:id', enterpriseController.getById)
router.post('/enterprise', enterpriseController.createEnterprise)
router.put('/enterprise/:id', enterpriseController.updateEnterprise)
router.delete('/enterprise/:id', enterpriseController.destroyEnterprise)

module.exports = router
