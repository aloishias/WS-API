const User = require('../models/User.js')
const validateUUID = require('uuid-validate')

module.exports = {
    list(req, res) {

        const q = req.query

        // Default limit to 50
        const offset = parseInt(q.offset) || 0
        const limit = parseInt(q.limit) || 50

        User.findAll({
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

        User.findAll({
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

    createUser(req, res) {
        const lastname = req.body.lastname
        const firstname = req.body.firstname
        const email = req.body.email
        const phoneNumber = req.body.phoneNumber
        const login = req.body.login
        const password = req.body.password
        const parent_id = req.body.parent_id
        const level_pupil = req.body.level_pupil
        const enterprise_id = req.body.enterprise_id
        const level_student = req.body.level_student
        const schoolName = req.body.schoolName
        const review = req.body.review
        const category = req.body.category

        // Create a new user
        User.create({
            lastname: lastname,
            firstname: firstname,
            email: email,
            phoneNumber: phoneNumber,
            login: login,
            password: password,
            parent_id: parent_id,
            level_pupil: level_pupil,
            enterprise_id: enterprise_id,
            level_student: level_student,
            schoolName: schoolName,
            review: review,
            category: category

        }).then(cas => {
            if (!cas) res.sendStatus(404)
            else res.status(201).send(cas)
        }).catch(err => res.status(500).send(err))
    },

    updateUser(req, res) {
        const id = req.params.id
        const {
            lastname,
            firstname,
            email,
            phoneNumber,
            login,
            password,
            parent_id,
            level_pupil,
            enterprise_id,
            level_student,
            schoolName,
            review,
            category
        } = req.body

        User.update({
            lastname,
            firstname,
            email,
            phoneNumber,
            login,
            password,
            parent_id,
            level_pupil,
            enterprise_id,
            level_student,
            schoolName,
            review,
            category
        }, {
            where: {
                id: id
            }
        }).then(cas => {
            if (!cas) res.sendStatus(404)
            else res.status(200).send(cas)
        }).catch(err => res.status(500).send(err))
    },

    destroyUser(req, res) {
        const id = req.params.id

        if (!validateUUID(id))
            return res.sendStatus(400)

        User.destroy({
                where: {
                    id: id
                }
            }).then(() => res.sendStatus(204))
            .catch(err => res.status(500).send(err));
    },

    getByLoginPassword(req, res) {
        const q = req.query
        const login = req.body.login
        const password = req.body.password

        // Default limit to 50
        const offset = parseInt(q.offset) || 0
        const limit = parseInt(q.limit) || 50

        User.findAll({
                where: {
                    login: login,
                    password: password
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

    getByEnterpriseId(req, res) {
        const q = req.query
        const enterprise_id = req.body.enterprise_id

        // Default limit to 50
        const offset = parseInt(q.offset) || 0
        const limit = parseInt(q.limit) || 50

        User.findAll({
                where: {
                    enterprise_id: enterprise_id
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

    getByParentId(req, res) {
        const parent_id = req.body.parent_id

        User.findOne({
                where: {
                    parent_id: parent_id
                }
            })
            .then(cas => {
                if (!cas) res.sendStatus(404)
                else res.status(200).send(cas)
            })
            .catch(err => res.status(500).send(err))
    },

    getByCategory(req, res) {
        const category = req.body.category

        User.findOne({
                where: {
                    category: category
                }
            })
            .then(cas => {
                if (!cas) res.sendStatus(404)
                else res.status(200).send(cas)
            })
            .catch(err => res.status(500).send(err))
    }

}