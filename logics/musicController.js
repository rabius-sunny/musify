const musicSchema = require('../schema/schema.music')

const createMusics = async (req, res) => {
  try {
    const titles = req.body.songs
    await musicSchema.create(titles.map((title) => ({ title })))
    res.status(200).json({ message: 'ok' })
  } catch (error) {
    res.status(500).json({ error, message: error.message })
  }
}
const searchMusic = async (req, res) => {
  const searchQuery = req.query.q
  try {
    const response = await musicSchema.find({ $text: { $search: searchQuery } })
    res.status(200).json({ message: 'ok', data: response })
  } catch (error) {
    res.status(404).json({ error, message: error.message })
  }
}

module.exports = { createMusics, searchMusic }
