const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDb = require('./configs/db')
const musicRouter = require('./routes/musicRouter')

const PORT = process.env.PORT || 3001

const app = express()

// Middlewares
dotenv.config()
app.use(bodyParser.json())
app.use(cors())

// Database Connetion
connectDb()

// Defining routes
app.use('/api', musicRouter)

app.listen(PORT, () => console.log(`server is running on port= ${PORT}`))
