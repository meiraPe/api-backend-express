import { remove } from "../../models/profileModel.js"

export const deleteProfileController = async (req, res) => {
  const { id } = req.params
  
  const result = await remove(+id)

  res.json({
    message: `Usuário ${id} Deletado Com Sucesso!`,
    user: result
  })
}