var express = require('express')
var router = express.Router()

const requestController = require('../controllers/request.js')

router.get('/request', requestController.list)
router.get('/request/:id', requestController.getById)
router.post('/request', requestController.createRequest)
router.put('/request/:id', requestController.updateRequest)
router.delete('/request/:id', requestController.destroyRequest)
router.get('/requestByRequester/:requester_id', requestController.getByRequester)
router.get('/requestByRequested/:requested_id', requestController.getByRequested)
router.get('/requestByPupil/:pupil_id', requestController.getByPupil)

module.exports = router
