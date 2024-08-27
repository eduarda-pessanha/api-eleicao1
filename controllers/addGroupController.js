const addGroupService = require("../services/addGroupService")

const addGroupController = (data) => {
  const { candidate, vice } = addGroupService(data)

  return { candidate, vice }
}

module.exports = addGroupController