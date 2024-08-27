const editGroupService = require("../services/editGroupService")


const editarGroupController = (data) => {
  const { candidate, vice } = editGroupService(data)

  return { candidate, vice }
}

module.exports = editarGroupController
