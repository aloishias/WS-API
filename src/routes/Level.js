var express = require('express')
var router = express.Router()

const levelController = require('../controllers/level.js')

router.get('/level', levelController.list)
router.get('/level/:id', levelController.getById)
router.post('/level', levelController.createLevel)
router.put('/level/:id', levelController.updateLevel)
router.delete('/level/:id', levelController.destroyLevel)

module.exports = router
