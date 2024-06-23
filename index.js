const {
  getAll,
  getById,
  getByName,
  getByAuthor,
  createBook,
  updateById,
  deleteById,
} = require("../../controllers/books-controller");

const processArguments = (dataClient) => {
  const dataClientJs = JSON.parse(dataClient);

  if (!dataClientJs.action) {
    return "No se envió ninguna acción";
  }
  if (dataClientJs.action === "getAll") {
    return getAll();
  } else if (dataClientJs.action === "getById") {
    return getById(dataClientJs.body.id);
  } else if (dataClientJs.action === "getByName") {
    return getByName(dataClientJs.body.name);
  } else if (dataClientJs.action === "getByAuthor") {
    return getByAuthor(dataClientJs.body.author);
  } else if (dataClientJs.action === "createBook") {
    return createBook(dataClientJs.body);
  } else if (dataClientJs.action === "updateById") {
    return updateById(dataClientJs.body);
  } else if (dataClientJs.action === "deleteById") {
    return deleteById(dataClientJs.body.id);
  } else return "Esa acción no es válida";
};

module.exports = processArguments;
