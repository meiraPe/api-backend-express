// src/controllers/costumer/getByIdCostumerController.js
export function getByIdCostumerController(req, res) {
  const { id } = req.params;
  res.json({ message: `Cliente Consultado Com Sucesso! ID: ${id}` });
}
