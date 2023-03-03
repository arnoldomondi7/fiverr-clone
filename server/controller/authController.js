import User from '../models/userModel.js'
import bcrypt from 'bcrypt'

//function to create a new user.
export const registerUser = async (req, res) => {
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
		res.status(500).send('Something went wrong', error)
	}
}
//functuion to login the user.
export const loginUser = async (req, res) => {
	try {
		//findif the user exists in the database.
		const user = await User.findOne({ username: req.body.username })
		//if there is no user, log an error!
		if (!user) {
			return res.status(500).send('User Does Not Exist.')
		}

		//compare the password.
		const isCorrect = await bcrypt.compare(req.body.password, user.password)
	} catch (error) {
		res.status(500).send('Something went wrong', error)
	}
}

//function to logout user.
export const logoutUser = async (req, res) => {
	try {
	} catch (error) {}
}
