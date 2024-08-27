const groupModel = require("../models/groupModel")
const checkGroupExistsService = require('./checkGroupExistsService')
const { validateRemoveGroupService } = require('./validateRemoveGroupService')

const removeGroupService = (data) => {
  const { id } = data
  checkGroupExistsService(id)
  validateRemoveGroupService(id)

  const items = groupModel.get()
  const index = items.findIndex(group => group.id === data.id)


  items.splice(index, 1)

  groupModel.set(items)
}

module.exports = removeGroupService
