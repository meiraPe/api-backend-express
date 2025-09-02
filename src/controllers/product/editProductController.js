export const editProductController = (req, res) => {
  const dados = req.body
  console.log(dados)

  //editar dados do produto
  res.json({
    message: 'Produto Editado Com Sucesso!',
    product: dados
  })
}