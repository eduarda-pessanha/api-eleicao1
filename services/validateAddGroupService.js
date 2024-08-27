const { newValidationError } = require("../errors")

const validateAddGroupService = (data) => {
  if (typeof data !== 'object') {
    throw newValidationError("body isn't a valid object")
  }

  if (!data.candidate) {
    throw newValidationError("'candidate' is required")
  } else if (
    typeof data.candidate !== 'string' ||
    data.candidate === ''
  ) {
    throw newValidationError("'candidate' must be a valid string")
  }

  if (!data.vice) {
    throw newValidationError("'vice' is required")
  } else if (
    typeof data.vice !== 'string' ||
    data.vice === ''
  ) {
    throw newValidationError("'vice' must be a valid string")
  }

  if (data.candidate === data.vice) {
    throw newValidationError("'candidate' and 'vice' must be different")
  }

  return data
}

module.exports = validateAddGroupService