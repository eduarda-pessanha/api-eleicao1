const validateAddGroupService = require("../services/validateAddGroupService")
const checkGroupExistsService = require('../services/checkGroupExistsService')
const addGroupService = require("../services/addGroupService")

const addGroupController = (data) => {
  const { id, candidate, vice } = validateAddGroupService(data)
  checkGroupExistsService(id)
  addGroupService({ id, candidate, vice })
}

module.exports = addGroupController