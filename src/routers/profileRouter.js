import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
  const dados = req.body
  console.log(dados)
  
  //criar dados do usuário
  res.json({
    message:'Perfil Criado Com Sucesso!',
    profile: dados
  })
})

//lista todos os profile
router.get('/', (req, res) => {
  //consultar dados do usuario
  res.json({message: 'Perfil Consultado Com Sucesso!'})
})

//consulta um profile específico
router.get('/:id', (req, res) => {
  const { id } = req.params.id
  res.json({ message: `Perfil Consultado Com Sucesso! ID: ${id}` })
})

router.put('/', (req, res) => {
  const dados = req.body
  console.log(dados)

  //editar dados do usuário
  res.json({
    message: 'Perfil Editado Com Sucesso!',
    profile: dados
  })
})

router.delete('/', (req, res) => {
  //deletar dados do usuário
  res.json({message: 'Perfil Deletado Com Sucesso!'})
})

export default router