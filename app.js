const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3100
const cors = require('cors')


const userRoutes = require('./src/routes/User.js')
const enterpriseRoutes = require('./src/routes/Enterprise.js')
const levelRoutes = require('./src/routes/Level.js')
const requestRoutes = require('./src/routes/Request.js')
const schoolSubjectRoutes = require('./src/routes/SchoolSubject.js')
const teachingRoutes = require('./src/routes/Teaching.js')


app.use(cors())

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.use('/', userRoutes)
app.use('/', enterpriseRoutes)
app.use('/', levelRoutes)
app.use('/', requestRoutes)
app.use('/', schoolSubjectRoutes)
app.use('/', teachingRoutes)


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
