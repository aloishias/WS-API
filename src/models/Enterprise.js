const Sequelize = require('sequelize')
const db = require('../config/db.js')

// Model definition
const Enterprise = db.define('Enterprise', {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4()
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    code: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

//Enterprise.sync()

module.exports = Enterprise