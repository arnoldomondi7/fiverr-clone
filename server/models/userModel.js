import mongoose from 'mongoose'
const { Schema, model } = mongoose

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			requred: false,
		},
		country: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: false,
		},
		description: {
			type: String,
			required: false,
		},
		isSeller: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
)

const User = model('User', userSchema)

export default User
