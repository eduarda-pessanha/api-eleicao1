const groupModel = require("../models/groupModel")

const addGroupService = (data) => {
  const { candidate, vice } = validadeAddGroupService(data)
  const items = groupModel.get()
  items.push({ candidate, vice })
  groupModel.set(items)

  return { candidate, vice }
}

module.exports = addGroupService