const groupModel = require("../models/groupModel")
const checkGroupExistsService = require('./checkGroupExistsService')
const validateAddGroupService = require('./validateAddGroupService')

const editGroupService = (data) => {
  const { id } = data
  checkGroupExistsService(id)
  const { candidate, vice } = validateAddGroupService
  const items = groupModel.get()

  const index = items.findIndex(group => group.id === data.id)

  items[index] = {
    ...items[index],
    candidate: data.candidate !== undefined ? data.candidate : items[index].candidate,
    vice: data.vice !== undefined ? data.vice : items[index].vice
  }

  groupModel.set(items)

  return { candidate, vice }
}

module.exports = editGroupService
