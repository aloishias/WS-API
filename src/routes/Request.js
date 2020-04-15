var express = require('express')
var router = express.Router()

const requestController = require('../controllers/request.js')

router.get('/request', requestController.list)
router.get('/request/:id', requestController.getById)
router.post('/request', requestController.createRequest)
router.put('/request/:id', requestController.updateRequest)
router.delete('/request/:id', requestController.destroyRequest)

module.exports = router
