const Sequelize = require('sequelize')
const db = require('../config/db.js')

// Model definition
const SchoolSubject = db.define('SchoolSubject', {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4()
    },
    label: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

//SchoolSubject.sync()

module.exports = SchoolSubject