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
    return res.render("index.html", { luan: 0})
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search-results", (req, res) => {
    return res.render("search-results.html")
})


// ligar o servidor
server.listen(3000)