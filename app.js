const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3100
const cors = require('cors')


const userroutes = require('./src/routes/User.js')


app.use(cors())

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.use('/', userroutes)


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
