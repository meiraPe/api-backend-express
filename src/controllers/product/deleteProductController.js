import { remove } from "../../models/productModel.js"

export const deleteProductController = async (req, res) => {
  const { id } = req.params
  
  const result = await remove(+id)

  res.json({
    message: `Produto com ID: ${id}, Deletado Com Sucesso!`,
    user: result
  })
}