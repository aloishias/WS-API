var express = require('express')
var router = express.Router()

const teachingController = require('../controllers/teaching.js')

router.get('/teaching', teachingController.list)
router.get('/teaching/:id', teachingController.getById)
router.post('/teaching', teachingController.createTeaching)
router.put('/teaching/:id', teachingController.updateTeaching)
router.delete('/teaching/:id', teachingController.destroyTeaching)

module.exports = router
