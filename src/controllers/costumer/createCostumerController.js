// src/controllers/costumer/createCostumerController.js
export function createCostumerController(req, res) {
  const dados = req.body;
  console.log(dados);
  // criar dados do cliente
  res.json({
    message: "Cliente Criado Com Sucesso!",
    costumer: dados,
  });
}
