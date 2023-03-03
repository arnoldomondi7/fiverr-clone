import express from 'express'
import {
	loginUser,
	logoutUser,
	registerUser,
} from '../controller/authController.js'

const authRoute = express.Router()

//register a new user.
authRoute.post('/register', registerUser)
//login a new user
authRoute.post('/login', loginUser)
//logout a new user
authRoute.post('/logout', logoutUser)

export default authRoute
