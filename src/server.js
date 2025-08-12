import express from 'express'
const app = express()
const port = 3000

app.use(express.json()) //Função usada para transformar os dados de string para objeto em JS

app.post('/profile', (req, res) => {
  const dados = req.body
  console.log(dados)
  
  //criar dados do usuário
  res.json({
    message:'Perfil Criado Com Sucesso!',
    profile: dados
  })
})

app.get('/profile', (req, res) => {
  //consultar dados do usuario
  res.json({message: 'Perfil Consultado Com Sucesso!'})
})

app.put('/profile', (req, res) => {
  const dados = req.body
  console.log(dados)

  //editar dados do usuário
  res.json({
    message: 'Perfil Editado Com Sucesso!',
    profile: dados
  })
})

app.delete('/profile', (req, res) => {
  //deletar dados do usuário
  res.json({message: 'Perfil Deletado Com Sucesso!'})
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
