const express = require('express')
const bodyParser = require('body-parser')

const viewEngine = require('./config/viewEngine')
const initWebRoutes = require('./routes/web')

const app = express()

require('dotenv').config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app)
initWebRoutes(app)

app.listen(process.env.PORT, () => {
    console.log(`May chu dang chay tai cong ${process.env.PORT}`)
})