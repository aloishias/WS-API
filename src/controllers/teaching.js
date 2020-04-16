const Teaching = require('../models/Teaching.js')
const validateUUID = require('uuid-validate')

module.exports = {
    list(req, res) {

        const q = req.query

        // Default limit to 50
        const offset = parseInt(q.offset) || 0
        const limit = parseInt(q.limit) || 50

        Teaching.findAll({
                offset,
                limit
            })
            .then(cas => {
                if (!cas) res.sendStatus(404)
                else res.status(200).send(cas)
            })
            .catch(err => res.status(500).send(err))
    },

    getById(req, res) {
        const q = req.query
        const id = req.params.id

        if (!validateUUID(id))
            return res.sendStatus(400)

        // Default limit to 50
        const offset = parseInt(q.offset) || 0
        const limit = parseInt(q.limit) || 50

        Teaching.findAll({
                where: {
                    id: id
                },
                offset,
                limit
            })
            .then(cas => {
                if (!cas) res.sendStatus(404)
                else res.status(200).send(cas)
            })
            .catch(err => res.status(500).send(err))
    },

    createTeaching(req, res) {
        const student_id = req.body.student_id
        const SchoolSubject_id = req.body.SchoolSubject_id
        const Level_id = req.body.Level_id

        Teaching.create({
            student_id: student_id,
            SchoolSubject_id: SchoolSubject_id,
            Level_id: Level_id
        }).then(cas => {
            if (!cas) res.sendStatus(404)
            else res.status(201).send(cas)
        }).catch(err => res.status(500).send(err))
    },

    updateTeaching(req, res) {
        const id = req.params.id
        const student_id = req.body.student_id
        const SchoolSubject_id = req.body.SchoolSubject_id
        const Level_id = req.body.Level_id

        Teaching.update({
            student_id: student_id,
            SchoolSubject_id: SchoolSubject_id,
            Level_id: Level_id
        }, {
            where: {
                id: id
            }
        }).then(cas => {
            if (!cas) res.sendStatus(404)
            else res.status(200).send(cas)
        }).catch(err => res.status(500).send(err))
    },

    destroyTeaching(req, res) {
        const id = req.params.id

        if (!validateUUID(id))
            return res.sendStatus(400)

        Teaching.destroy({
                where: {
                    id: id
                }
            }).then(() => res.sendStatus(204))
            .catch(err => res.status(500).send(err));
    }

}