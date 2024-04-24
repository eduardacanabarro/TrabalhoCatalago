const dados = require('./dados.json')
const express = require('express')
const fs = require('fs')
const cors = require('cors')

const server = express()

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

server.use(cors())
server.use(express.json())

server.listen(3000, () => {
    console.log('O servidor está funcional');
})

server.get('/', (req, res) => {
    return res.json({ mensagem: "Estou funcionando"})
})

//SELECT * FROM plantas

//Create da API
server.post('/plantas', (req, res) => {
    const novaPlanta = req.body

    if (!novoPlanta.nome || !novoPlanta.especie || !novoPlanta.familia) {
        return res.status(400).json({ mensagem: "Dados incompletos, tente novamente" })
    } else {
        dados.Planta.push(novoPlanta)
        salvarDados(dados)

        return res.status(201).json({ mensagem: "Dados completos, cadastro realizado com sucesso" })
    }
})

//Read da API
server.get('/plantas', (req, res) => {
    return res.json(dados.Planta)
})

//Funcao que salva os dados
function salvarDados() {
    fs.writeFileSync(__dirname + '/dados.json', JSON.stringify(dados, null, 2))
}

//Update da API
server.put('/plantas/:id', (req, res) => {
    const plantaId = parseInt(req.params.id)
    const atualizarPlanta = req.body

    const indicePlanta = dados.Plantas.findIndex(u => u.id === plantaId)

    if (indicePlanta === -1) {
        return res.status(404).json({ mensagem: "Planta não encontrada" })
    } else {
        dados.Plantas[indicePlanta].nome = atualizarPlanta.nome || dados.Plantas[indicePlanta].nome
        dados.Plantas[indicePlanta].especie = atualizarPlanta.especie || dados.Plantas[indicePlanta].especie
        dados.Plantas[indicePlanta].familia = atualizarPlanta.familia || dados.Plantas[indicePlanta].familia
        dados.Plantas[indicePlanta].URL = atualizarPlanta.URL|| dados.Plantas[indicePlanta].URL
        dados.Plantas[indicePlanta].descricao = atualizarPlanta.descricao || dados.Plantas[indicePlanta].descricao


        salvarDados(dados)

        return res.status(201).json({ mensagem: "Dados completo, dados atualizados com sucesso" })
    }
})

// Delete da API
server.delete('/plantas/:id', (req, res) => {
    const id = parseInt(req.params.id)

    //filtrar, removendo pelo id correspondente

    dados.Plantas = dados.Plantas.filter(u => u.id !== id)

    salvarDados(dados)

    return res.status(200).json({ mensagem: "Planta excluído com sucesso" })
})

module.exports = {dados}