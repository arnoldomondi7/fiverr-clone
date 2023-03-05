import jwt from 'jsonwebtoken'
import { handleError } from '../utils/handleErrorUtils.js'

//write a function that will verify the token.
export const verifyToken = (req, res, next) => {
	//get the token from the cookies.
	const token = req.cookies.accessToken

	//handle error is the token doesnt exist.
	if (!token) {
		return next(handleError(401, 'You Are Not Authenticated'))
	}

	//verify the token.
	jwt.verify(token, process.env.jwt_Secret, async (error, payload) => {
		//handle the error.
		if (error) {
			return next(handleError(403, 'Token Is Not Valid!'))
		}

		//get the id and the isSeller from the payload.
		req.userId = payload.id
		req.isSeller = payload.isSeller

		next()
	})
}
