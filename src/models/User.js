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
        allowNull: true
    },
    phoneNumber: {
        type: Sequelize.STRING,
        allowNull: true
    },
    login: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    parent_id: {
        type: Sequelize.STRING,
        allowNull: true
    },
    level_pupil: {
        type: Sequelize.STRING,
        allowNull: true
    },
    enterprise_id: {
        type: Sequelize.STRING,
        allowNull: true
    },
    level_student: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    schoolName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    review: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
})

//User.sync()

module.exports = User