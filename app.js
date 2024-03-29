const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDb = require('./configs/db')
const musicRouter = require('./routes/musicRouter')

const PORT = process.env.PORT || 3000

const app = express()

// Middlewares
dotenv.config()
app.use(bodyParser.json())
app.use(cors())

// Database Connetion
connectDb()

// Defining routes
app.use('/api', musicRouter)

// Frontend routes
app.use(express.static(path.join(__dirname, 'view/dist')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'view/dist/index.html'))
})

app.listen(PORT, () => console.log(`server is running on port= ${PORT}`))
