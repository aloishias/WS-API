const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3100
const cors = require('cors')


const userRoutes = require('./src/routes/User.js')
const enterpriseRoutes = require('./src/routes/Enterprise.js')
const levelRoutes = require('./src/routes/Level.js')


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

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
