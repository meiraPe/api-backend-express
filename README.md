#Comandos

-- npm init // Cria o package.json para iniciar um projeto node
-- npm i nome_pacote // instala um pacote específico
-- npm install // instala todos os pacotes do package.json ou npm i // instala todos os pacotes do package.json

#Comandos Git

// configura usuário e email do git na máquina

-- git config --global user.name "Renan Cavichi"

-- git config --global user.email "renancavichi@gmail.com"

-- git init // inicia o git em uma pasta

-- git remote add origin url_do_github // vincula meu projeto local ao repositório do github.

#Tópicos Importantes

- O que é framework
- O que é JavaScript
- O que é NPM (Node Package Manager)
- O que é node.js
- O que é o Express
- Protocolo http
- Métodos http (GET, POST, PUT, PATCH, DELETE)
- Como mudar o formato de importação/exportação de require para import (Adicionar no package.json a propriedade type: "module")
- --watch (parametro para rodar um js em modo dev, que permite rodar novamente o script quando algum arquivo é alterado)
- Router (Para que separar as rotas?)
- O que é um Padrão de Projeto?
- O que é um e porque usar um ORM? (Prisma ORM)
- Qual a diferença das Dependencias do projeto para as Dependencias Dev?

Sintaxe básica de uma rota de API

app.post('/produto', (req, res) =>{
  res.json({message: 'Criado com Sucesso!'})
})

metodo criar ou inserir: POST
Rota ou endereço: /produto
tipo de resposta: json


## Comandos Prisma 

- Instalação Prisma
  - npm i prisma -D
  - npm i prisma/client

- Inicializar o Prisma
  -npx prisma init

- Gerar o model do prisma a partir de um BD existete
  -npx prisma db pull

- Gerar o BD a partir de um model do prisma
  -npx prisma db psuh