export const editProfileController = (req, res) => {
  const dados = req.body
  console.log(dados)

  //editar dados do produto
  res.json({
    message: 'Usuário Editado Com Sucesso!',
    product: dados
  })
}