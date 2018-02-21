var express = require('express')
var router = express.Router()
var Music= require('../models').Music

// PUT /movies/7
router.put('/:id', function(req, res) {
  Music.update(
    { title: req.body.title },
    { where: { id: req.params.id }}
  )
    .then( function() {
      return res.redirect('/music')
    })
})

// GET /movies/7/edit
router.get('/:id/edit', function(req, res) {
  Music.findById(req.params.id) 
    .then( function(music) {
      return res.render('edit', { music: music })
    })
})

//  DELETE /movies/7
router.delete('/:id', function(req, res) {
  Music.findById(req.params.id)
    .then( function(music) { music.destroy() })
    .then( function() { return res.redirect('/music') })
  
})

// GET /movies
router.get('/', function(req, res) {
  Music.all({
    order: [['createdAt', 'ASC']]
  })
    .then( function(music) {
      res.render('music', { music: music })
    })
})

// POST /movies
router.post('/', function(req, res) {
  var title = req.body.title
  Movie.create({ title: title })
    .then( function() {
      res.redirect('/music')
    })
})

module.exports = router;
