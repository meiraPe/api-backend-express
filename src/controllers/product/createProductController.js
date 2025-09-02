export const createProductController = (req, res) => {
  const dados = req.body
  console.log(dados)
  
  //criar dados do produto
  res.json({
    message:'Produto Criado Com Sucesso!',
    product: dados
  })
}
