import express from 'express'
import { deleteUser } from '../controller/userController.js'
import { verifyToken } from '../middlewares/jwt.middleware.js'

const userRoute = express.Router()

//test the endpoint.
userRoute.delete('/:id', verifyToken, deleteUser)

export default userRoute
