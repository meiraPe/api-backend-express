import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
  const dados = req.body
  console.log(dados)
  
  //criar dados do produto
  res.json({
    message:'Carro Criado Com Sucesso!',
    car: dados
  })
})

//lista todos os profile
router.get('/', (req, res) => {
  //consultar dados do produto
  res.json({message: 'Carro Consultado Com Sucesso!'})
})

//consulta um produto específico
router.get('/:id', (req, res) => {
  const { id } = req.params.id
  res.json({ message: `Carro Consultado Com Sucesso! ID: ${id}` })
})

router.put('/:id', (req, res) => {
  const dados = req.body
  const { id } = req.params
  const marca = dados.marca
  const modelo = dados.modelo
  const ano = dados.ano

  console.log(dados)

  //editar dados do produto
  res.json({
    message: `${marca} ${modelo} ${ano} com ID: ${id} Alterado Com Sucesso!`,
    marca: marca,
    modelo: modelo,
    ano: ano
  })
})

router.delete('/', (req, res) => {
  //deletar dados do produto
  res.json({message: 'Produto Deletado Com Sucesso!'})
})

export default router