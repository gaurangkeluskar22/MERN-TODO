const router = require('express').Router()
const { jwtAuthMiddleware } = require('../auth/jwtAuthMiddleware')
const {createUser, getUserList, loginUser} = require('./user.controller')

// /api/user/create
router.post("/create", createUser)
router.post("/login", loginUser)
router.get("/getUsers", jwtAuthMiddleware, getUserList)

module.exports = router