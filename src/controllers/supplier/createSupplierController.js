// src/controllers/supplier/createSupplierController.js
export function createSupplierController(req, res) {
  const dados = req.body;
  console.log(dados);
  // criar dados do fornecedor
  res.json({
    message: "Fornecedor Criado Com Sucesso!",
    supplier: dados,
  });
}
