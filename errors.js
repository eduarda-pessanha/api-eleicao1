const newValidationError = (message) => {
  const error = new Error(message)
  error.name = 'ValidationError'
  return error
}

const newConflitError = (message) => {
  const error = new Error(message)
  error.name = 'ConflitError'
  return error
}

module.exports = {
  newValidationError,
  newConflitError
}