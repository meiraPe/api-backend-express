// src/controllers/costumer/editCostumerController.js
export function editCostumerController(req, res) {
  const dados = req.body;
  console.log(dados);
  // editar dados do cliente
  res.json({
    message: "Cliente Editado Com Sucesso!",
    costumer: dados,
  });
}
