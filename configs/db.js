const mongoose = require('mongoose')

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    console.log('database connected successfully')
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectDb
