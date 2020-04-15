const Sequelize = require('sequelize')
const db = require('../config/db.js')

// Model definition
const Request = db.define('Request', {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4()
    },
    requester_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    requested_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    pupil_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    school_subject_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    startdate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    enddate: {
        type: Sequelize.DATE,
        allowNull: false
    }
})

Request.sync()

module.exports = Request