const { model, Schema } = require('mongoose')

const musicSchema = new Schema({
  title: {
    type: String,
    required: true,
    text: true
  }
})

module.exports = model('music', musicSchema)
