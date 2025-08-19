import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
  const dados = req.body
  console.log(dados)
  
  //criar dados do usuário
  res.json({
    message:'Fornecedor Criado Com Sucesso!',
    supplier: dados
  })
})

//lista todos os fornecedores
router.get('/', (req, res) => {
  //consultar dados do produto
  res.json({message: 'Fornecedor Consultado Com Sucesso!'})
})

//consulta um fornecedor específico
router.get('/:id', (req, res) => {
  const { id } = req.params.id
  res.json({ message: `Fornecedor Consultado Com Sucesso! ID: ${id}` })
})

router.put('/', (req, res) => {
  const dados = req.body
  console.log(dados)

  //editar dados do fornecedor
  res.json({
    message: 'Fornecedor Editado Com Sucesso!',
    supplier: dados
  })
})

router.delete('/', (req, res) => {
  //deletar dados do fornecedor
  res.json({message: 'Fornecedor Deletado Com Sucesso!'})
})

export default router