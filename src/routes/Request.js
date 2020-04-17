var express = require('express')
var router = express.Router()

const requestController = require('../controllers/request.js')

router.get('/request', requestController.list)
router.get('/request/:id', requestController.getById)
router.post('/request', requestController.createRequest)
router.put('/request/:id', requestController.updateRequest)
router.delete('/request/:id', requestController.destroyRequest)
router.get('/requestByRequester', requestController.getByRequester)
router.get('/requestByRequested', requestController.getByRequested)
router.get('/requestByPupil', requestController.getByPupil)

module.exports = router
