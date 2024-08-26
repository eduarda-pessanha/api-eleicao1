const { newConflitError } = require("../errors")
const groupModel = require("../models/groupModel")

const checkGroupExistsService = (id) => {
  const items = groupModel.get()
  for (const item of items) {
    if (item.id === id) {
      throw newConflitError(`Already exists an group with id '${id}'`)
    }
  }
}

module.exports = checkGroupExistsService