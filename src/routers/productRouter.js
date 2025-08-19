import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
  const dados = req.body
  console.log(dados)
  
  //criar dados do produto
  res.json({
    message:'Produto Criado Com Sucesso!',
    product: dados
  })
})

//lista todos os profile
router.get('/', (req, res) => {
  //consultar dados do produto
  res.json({message: 'Produto Consultado Com Sucesso!'})
})

//consulta um produto específico
router.get('/:id', (req, res) => {
  const { id } = req.params.id
  res.json({ message: `Produto Consultado Com Sucesso! ID: ${id}` })
})

router.put('/', (req, res) => {
  const dados = req.body
  console.log(dados)

  //editar dados do produto
  res.json({
    message: 'Produto Editado Com Sucesso!',
    product: dados
  })
})

router.delete('/', (req, res) => {
  //deletar dados do produto
  res.json({message: 'Produto Deletado Com Sucesso!'})
})

export default router