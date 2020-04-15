var express = require('express')
var router = express.Router()

const schoolSubjectController = require('../controllers/schoolSubject.js')

router.get('/schoolSubject', schoolSubjectController.list)
router.get('/schoolSubject/:id', schoolSubjectController.getById)
router.post('/schoolSubject', schoolSubjectController.createSchoolSubject)
router.put('/schoolSubject/:id', schoolSubjectController.updateSchoolSubject)
router.delete('/schoolSubject/:id', schoolSubjectController.destroySchoolSubject)

module.exports = router
