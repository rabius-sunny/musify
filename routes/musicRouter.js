const { createMusics, searchMusic } = require('../logics/musicController')

const musicRouter = require('express').Router()
musicRouter.get('/search-music', searchMusic)
musicRouter.post('/create-music', createMusics)
module.exports = musicRouter
