const { newValidationError } = require("../errors");
const checkGroupExistsService = require("./checkGroupExistsService");

// Função de validação
const validateRemoveGroupService = (data) => {
  if (typeof data !== 'object' || data === null) {
    throw newValidationError("body isn't a valid object");
  }

  if (typeof data.id !== 'number' ||
    data.id < 1 ||
    data.id % 1 !== 0) {
    throw newValidationError("the id must be a positive integer");
  }
};

// Função para remover (base de dados simulada)
const removeGroupService = async (id) => {
  // Simula a base de dados
  const groupsDataBase = [
    { id: 1, group: 'Pedro Nunes' },
    { id: 2, group: 'Carlos Dias' }
  ];

  // Encontra o índice do grupo a ser removido
  const index = groupsDataBase.findIndex(group => group.id === id);
  if (index === -1) {
    throw new Error("Group not found");
  }

  // Remove o grupo da base de dados
  groupsDataBase.splice(index, 1);
  return true; // Retorna sucesso
};

// Função que valida e remove o grupo
const processRemoveGroupRequest = async (data) => {
  try {
    validateRemoveGroupService(data);
    await removeGroupService(data.id);
    console.log("Group removed successfully");
  } catch (error) {
    console.error("Error removing group:", error.message);
  }
};

module.exports = {
  processRemoveGroupRequest,
  validateRemoveGroupService
};
