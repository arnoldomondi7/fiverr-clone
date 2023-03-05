import User from '../models/userModel.js'
import { handleError } from '../utils/handleErrorUtils.js'

export const deleteUser = async (req, res, next) => {
	//find the users id
	const user = await User.findById(req.params.id)

	//ensure the id in the payload is equal to the user's id.
	//the id item should be converted to a string.
	if (req.userId !== user._id.toString()) {
		return next(handleError(403, 'You Can Only Delete Your Account'))
	}
	await User.findByIdAndDelete(req.params.id)
	//send the response to the user.
	return res.status(200).send('User Successfully Deleted')
}
