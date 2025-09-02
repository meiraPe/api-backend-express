// src/controllers/supplier/editSupplierController.js
export function editSupplierController(req, res) {
  const dados = req.body;
  console.log(dados);
  // editar dados do fornecedor
  res.json({
    message: "Fornecedor Editado Com Sucesso!",
    supplier: dados,
  });
}
