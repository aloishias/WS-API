const Request = require('../models/Request.js')
const validateUUID = require('uuid-validate')

module.exports = {
    list(req, res) {

        const q = req.query

        // Default limit to 50
        const offset = parseInt(q.offset) || 0
        const limit = parseInt(q.limit) || 50

        Request.findAll({
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

        Request.findAll({
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

    createRequest(req, res) {
        const requester_id = req.body.requester_id
        const requested_id = req.body.requested_id
        const pupil_id = req.body.pupil_id
        const school_subject_id = req.body.school_subject_id
        const state = req.body.state
        const startdate = req.body.startdate
        const enddate = req.body.enddate

        Request.create({
            requester_id: requester_id,
            requested_id: requested_id,
            pupil_id: pupil_id,
            school_subject_id: school_subject_id,
            state: state,
            startdate: startdate,
            enddate: enddate
        }).then(cas => {
            if (!cas) res.sendStatus(404)
            else res.status(201).send(cas)
        }).catch(err => res.status(500).send(err))
    },

    updateRequest(req, res) {
        const id = req.params.id
        const requester_id = req.body.requester_id
        const requested_id = req.body.requested_id
        const pupil_id = req.body.pupil_id
        const school_subject_id = req.body.school_subject_id
        const state = req.body.state
        const startdate = req.body.startdate
        const enddate = req.body.enddate


        Request.update({
            requester_id: requester_id,
            requested_id: requested_id,
            pupil_id: pupil_id,
            school_subject_id: school_subject_id,
            state: state,
            startdate: startdate,
            enddate: enddate
        }, {
            where: {
                id: id
            }
        }).then(cas => {
            if (!cas) res.sendStatus(404)
            else res.status(200).send(cas)
        }).catch(err => res.status(500).send(err))
    },

    destroyRequest(req, res) {
        const id = req.params.id

        if (!validateUUID(id))
            return res.sendStatus(400)

        Request.destroy({
                where: {
                    id: id
                }
            }).then(() => res.sendStatus(204))
            .catch(err => res.status(500).send(err));
    }

}