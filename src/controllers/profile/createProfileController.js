import { create } from "../../models/profileModel.js"

export const createProfileController = async (req, res) => {
  const profile = req.body

  const result = await create(profile)

  //criar dados do produto
  res.json({
    message: "Usuário Criado Com Sucesso!",
    profile: result
  });
};