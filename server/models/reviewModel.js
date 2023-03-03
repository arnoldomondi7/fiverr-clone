import mongoose from 'mongoose'
const { Schema, model } = mongoose

const reviewSchema = new Schema(
	{
		gigId: {
			type: String,
			required: true,
		},
		userId: {
			type: String,
			required: true,
		},
		star: {
			type: Number,
			required: true,
			enum: [1, 2, 3, 4, 5],
		},
		description: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
)

const Review = model('Review', reviewSchema)

export default Review
