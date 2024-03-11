const router = require('express').Router()
const { jwtAuthMiddleware } = require('../auth/jwtAuthMiddleware')
const {createUser, getUserList} = require('./user.controller')

// /api/user/create
router.post("/create", createUser)
router.get("/getUsers", jwtAuthMiddleware, getUserList)

module.exports = router