const validateEditGroupService = require("../services/validateEditGroupServer")
const editGroupService = require("../services/editGroupService")

const editarGroupController = (data) => {
    const { id, candidate, vice } = validateEditGroupService(data)
    editGroupService({id})
  }
  
  module.exports = editarGroupController