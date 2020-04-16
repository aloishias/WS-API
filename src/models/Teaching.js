const Sequelize = require('sequelize')
const db = require('../config/db.js')

// Model definition
const Teaching = db.define('Teaching', {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4()
    },
    student_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    SchoolSubject_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Level_id: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Teaching