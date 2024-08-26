const validateremoveGroupService = require('../services/validateRemoveGroupService')
const removeGroupService = require('../services/removeGroupService')

const removeGropController = (data) => {
  const { id } = validateremoveGroupService(data)
  removeGroupService({ id })
}

module.exports = removeGropController