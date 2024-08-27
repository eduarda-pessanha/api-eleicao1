const removeGroupService = require('../services/removeGroupService')

const removeGropController = (data) => {
  const { id } = removeGroupService(data)

  return id
}

module.exports = removeGropController