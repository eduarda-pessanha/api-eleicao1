const { newValidationError } = require("../errors");

// Função de validação para editar grupo
const validateEditGroupService = (data) => {
  // Verifica se 'data' é um objeto
  if (typeof data !== 'object' || data === null) {
    throw newValidationError("Body isn't a valid object");
  }

  // Verifica se 'id' está presente e se é um número positivo inteiro
  if (data.id === undefined) {
    throw newValidationError("The id is mandatory");
  } else if (
    typeof data.id !== 'number' ||
    data.id < 1 ||
    data.id % 1 !== 0
  ) {
    throw newValidationError("The id must be a positive integer");
  }

  // Verifica se 'candidate', se presente, é uma string não vazia
  if (data.candidate !== undefined) {
    if (
      typeof data.candidate !== 'string' ||
      data.candidate.trim() === ''
    ) {
      throw newValidationError("'candidate' must be a valid string");
    }
  }

  // Verifica se 'vice' é uma string não vazia
  if (
    typeof data.vice !== 'string' ||
    data.vice.trim() === ''
  ) {
    throw newValidationError("'vice' must be a valid string");
  }

  // Verifica se 'candidate' e 'vice' são diferentes, se ambos estiverem presentes
  if (
    data.candidate !== undefined &&
    data.vice !== undefined &&
    data.candidate === data.vice
  ) {
    throw newValidationError("'candidate' and 'vice' must be different");
  }

  return data;
};

module.exports = validateEditGroupService;
