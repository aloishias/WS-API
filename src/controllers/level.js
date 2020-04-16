const Level = require('../models/Level.js')
const validateUUID = require('uuid-validate')

module.exports = {
    list(req, res) {

        const q = req.query

        // Default limit to 50
        const offset = parseInt(q.offset) || 0
        const limit = parseInt(q.limit) || 50

        Level.findAll({
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

        Level.findAll({
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

    createLevel(req, res) {
        const label = req.body.label

        Level.create({
            label: label
        }).then(cas => {
            if (!cas) res.sendStatus(404)
            else res.status(201).send(cas)
        }).catch(err => res.status(500).send(err))
    },

    updateLevel(req, res) {
        const id = req.params.id
        const {
            label
        } = req.body


        Level.update({
            label
        }, {
            where: {
                id: id
            }
        }).then(cas => {
            if (!cas) res.sendStatus(404)
            else res.status(200).send(cas)
        }).catch(err => res.status(500).send(err))
    },

    destroyLevel(req, res) {
        const id = req.params.id

        if (!validateUUID(id))
            return res.sendStatus(400)

        Level.destroy({
                where: {
                    id: id
                }
            }).then(() => res.sendStatus(204))
            .catch(err => res.status(500).send(err));
    }

}