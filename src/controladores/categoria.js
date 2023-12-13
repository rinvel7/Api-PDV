const knex = require("../conexao");

async function listarCategoria(req, res) {

  try {
    const categoria = await knex('categoria');
    return res.json(categoria);

  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

module.exports = {
  listarCategoria
}
