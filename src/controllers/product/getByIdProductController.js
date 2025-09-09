import { getById } from '../../models/productModel.js'


export const getByIdProductController = async (req, res) => {
  const id  = req.params.id

  const result = await getById(+id)
  res.json({ 
    message: `Produto Consultado Com Sucesso! ID: ${id}`, 
    product: result
  })
}