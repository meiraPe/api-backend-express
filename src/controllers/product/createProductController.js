import { create } from '../../models/productModel.js'

export const createProductController = async (req, res) => {
  const product = req.body
  
  const dados = await create(product)

  //criar dados do produto
  res.json({
    message:'Produto Criado Com Sucesso!',
    product: dados
  })
}
