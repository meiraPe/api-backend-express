export const getByIdProductController = (req, res) => {
  const { id } = req.params.id
  res.json({ message: `Produto Consultado Com Sucesso! ID: ${id}` })
}