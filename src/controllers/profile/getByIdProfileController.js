export const getByIdProfileController = (req, res) => {
  const { id } = req.params.id
  res.json({ message: `Usuário Consultado Com Sucesso! ID: ${id}` })
}