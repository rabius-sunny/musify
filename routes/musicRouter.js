const {
  createMusics,
  searchMusic,
  getRecommendedMusics
} = require('../logics/musicController')

const musicRouter = require('express').Router()
musicRouter.get('/search-music', searchMusic)
musicRouter.get('/recommended-musics', getRecommendedMusics)
musicRouter.post('/create-music', createMusics)
module.exports = musicRouter
