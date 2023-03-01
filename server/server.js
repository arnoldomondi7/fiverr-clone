import express from 'express'
import mongoose from 'mongoose'

//create the app.
const app = express()

//connect to the app.
try {
	mongoose.connect('mongodb://127.0.0.1:27017/fiverrClone')
	//log a success message.
	console.log('App connected to the db')
} catch (error) {
	handleError(error)
}

//listen to the server.
app.listen(8800, error => {
	if (error) {
		return console.log('Unable to listen to the server')
	}

	console.log(`App is listening on PORT -> 8800`)
})
