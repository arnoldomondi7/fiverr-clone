import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
//import the routees.
import userRoute from './routes/userRoute.js'
import authRoute from './routes/authRoute.js'

//create the app.
const app = express()

//configure the database.
dotenv.config()

//connect to the app.
const connectToDb = () => {
	try {
		mongoose.connect(process.env.mongoDb)
		//log a success message.
		console.log('App connected to the db')
	} catch (error) {
		console.log(error)
	}
}

//middlewares and routes.
// middlewares
app.use(express.json())
app.use(cookieParser())
//routes.
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)

//handle the errors.
app.use((error, req, res, next) => {
	//create the errorStatus
	const errorStatus = error.status || 500 || 400
	//create the errorMessage
	const errorMessage = error.message || 'Something Went Wrong :('

	return res.status(errorStatus).send(errorMessage)
})
//listen to the server.
app.listen(process.env.PORT, error => {
	if (error) {
		return console.log('Unable to listen to the server')
	}
	//call the connect to the database function.
	connectToDb()
	console.log(`App is listening on PORT => ${process.env.PORT}`)
})
