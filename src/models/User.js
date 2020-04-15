const Sequelize = require('sequelize')
const db = require('../config/db.js')

// Model definition
const User = db.define('User', {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4()
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: null
    },
    phoneNumber: {
        type: Sequelize.STRING,
        allowNull: null
    },
    login: {
        type: Sequelize.STRING,
        allowNull: null
    },
    password: {
        type: Sequelize.STRING,
        allowNull: null
    },
    parent_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    level_pupil: {
        type: Sequelize.STRING,
        allowNull: false
    },
    enterprise_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    level_student: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    schoolName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    review: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

User.sync()

module.exports = User