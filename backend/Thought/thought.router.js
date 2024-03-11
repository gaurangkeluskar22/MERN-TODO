const router = require('express').Router()
const {jwtAuthMiddleware} = require('../auth/jwtAuthMiddleware')
const { createThought, getThoughts, likeThought } = require('./thought.controller')


router.post('/create', jwtAuthMiddleware, createThought)
router.get('/getThoughts', jwtAuthMiddleware, getThoughts)
router.post('/like/:id', jwtAuthMiddleware, likeThought)

module.exports = router