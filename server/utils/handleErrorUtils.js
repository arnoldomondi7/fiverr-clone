export const handleError = (status, message) => {
	const error = new Error()
	error.status = status
	error.message = message

	//return the error.
	return error
}
