const express = require("express")
const server = express()


// Configurar pasta pública
server.use(express.static("public"))


// Utilizando um template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// Configurar caminhos da aplicação

// Pagina inicial
// req: Requisição/pedido
// res: Resposta
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

server.get("/create-point", (req, res) => {
    res.sendFile(__dirname + "/views/create-point.html")
})

server.get("/search-results", (req, res) => {
    res.sendFile(__dirname + "/views/search-results.html")
})


// ligar o servidor
server.listen(3000)