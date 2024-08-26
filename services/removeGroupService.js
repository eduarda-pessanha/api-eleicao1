const groupModel = require("../models/groupModel")

const removeGroupService = (data) => {
  const items = groupModel.get()
  items.push(data)
  groupModel.set(items)
}

module.exports = removeGroupService
