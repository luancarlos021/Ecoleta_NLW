const express = require("express")
const server = express()

// Pegar o banco de dados

const db = require("./database/db")

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
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {

    // Pegar os dados do db
    db.all(`SELECT * FROM places`, function (err, rows) {
        if (err) {
            return console.log(err)
        }

        const total = rows.length

        // Mostrar a página HTML com os dados do db
        return res.render("search-results.html", { places: rows, total: total} )
    })
})


// ligar o servidor
server.listen(3000)