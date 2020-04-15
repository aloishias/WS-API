const Sequelize = require('sequelize')
const db = require('../config/db.js')

// Model definition
const Level = db.define('Level', {
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

//Level.sync()

module.exports = Level