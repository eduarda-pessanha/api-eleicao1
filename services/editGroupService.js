const groupModel = require("../models/groupModel")

const editGroupService = (data) => {
  const items = groupModel.get()
  items.push(data)
  groupModel.set(items)
}

module.exports = editGroupService
