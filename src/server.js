import express from 'express'
import profileRouter from './routers/profileRouter.js'
import productRouter from './routers/productRouter.js'
import supplierRouter from './routers/supplierRouter.js'
import carRouter from './routers/carRouter.js'

const app = express()
const port = 3000

app.use(express.json()) //Função usada para transformar os dados de string para objeto em JS

app.use('/profile', profileRouter)
app.use('/product', productRouter)
app.use('/supplier', supplierRouter)
app.use('/car', carRouter)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
