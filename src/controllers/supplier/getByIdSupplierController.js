// src/controllers/supplier/getByIdSupplierController.js
export function getByIdSupplierController(req, res) {
  const { id } = req.params;
  res.json({ message: `Fornecedor Consultado Com Sucesso! ID: ${id}` });
}
