const router = require('express').Router()
const {jwtAuthMiddleware} = require('../auth/jwtAuthMiddleware')
const { createThought, getThoughts, likeThought, getMyThoughts, deleteMyThought, updateThought } = require('./thought.controller')


router.post('/create', jwtAuthMiddleware, createThought)
router.get('/getThoughts', jwtAuthMiddleware, getThoughts)
router.get('/getMyThoughts', jwtAuthMiddleware, getMyThoughts)
router.post('/like/:id', jwtAuthMiddleware, likeThought)
router.delete('/delete/:id', jwtAuthMiddleware, deleteMyThought)
router.put('/update', jwtAuthMiddleware, updateThought)

module.exports = router