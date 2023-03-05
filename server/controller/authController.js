import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../models/userModel.js'
import { handleError } from '../utils/handleErrorUtils.js'

//function to create a new user.
export const registerUser = async (req, res, next) => {
	try {
		//hash the pwd.
		const salt = await bcrypt.genSalt(10)
		const hash = await bcrypt.hash(req.body.password, salt)
		//create a new user.
		const newUser = new User({ ...req.body, password: hash })

		//save the user to the db.
		await newUser.save()

		//return res to the frontend.
		res.status(201).send('User has been Created')
	} catch (error) {
		next(error)
	}
}
//functuion to login the user.
export const loginUser = async (req, res, next) => {
	try {
		//findif the user exists in the database.
		const user = await User.findOne({ email: req.body.email })

		//if there is no user, log an error!
		if (!user) {
			return next(handleError(404, 'Sorry User Not Found'))
		}

		//compare the password.
		const isCorrect = await bcrypt.compare(req.body.password, user.password)

		//error handleing if there is an error,
		if (!isCorrect) {
			return next(handleError(400, 'Wrong Credentials'))
		}

		//create a token
		const token = jwt.sign(
			{ id: user._id, isSeller: user.isSeller },
			process.env.jwt_Secret
		)

		//remove the pwd.
		const { password, ...info } = user._doc
		//send the user to the frontend.
		res
			.cookie('accessToken', token, {
				httpOnly: true,
			})
			.status(200)
			.send(info)
	} catch (error) {
		return next(handleError(500, 'Something went wrong'))
	}
}

//function to logout user.
export const logoutUser = async (req, res) => {
	//to logout you need to clear the cookie.
	res
		.clearCookie('accessToken', {
			sameSite: 'none',
			secure: true,
		})
		.status(200)
		.send('User Has Been Logged out')
}
