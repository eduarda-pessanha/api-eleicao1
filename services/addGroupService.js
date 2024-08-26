const groupModel = require("../models/groupModel")

const addGroupService = (data) => {
  const items = groupModel.get()
  items.push(data)
  groupModel.set(items)
}

module.exports = addGroupService