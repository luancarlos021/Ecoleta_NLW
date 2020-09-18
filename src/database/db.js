// Importar a depedência do sqlite3

const sqlite3 = require("sqlite3").verbose()

// Criar objeto que irá fazer operações no banco de dados.

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// utilizar o objeto de banco de dados, para as operações.

db.serialize(() => {

    // Criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            image TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            itens TEXT
        );
    `)

    // // Inserir dados na tabela
    // const query = `
    //     INSERT INTO places (
    //         name,
    //         image,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         itens
    //     ) VALUES (?,?,?,?,?,?,?);   
    // `
    // const values = [
    //     "Colectoria",
    //     "http://izabelahendrix.edu.br/noticias/reciclagem-digital-de-equipamentos-eletronicos-e-destaque-em-projeto-do-izabela-hendrix/@@images/5bea9fdd-183e-48bf-8c10-09ad99ec7c75.jpeg",
    //     "Guilherme Gemballa, Jardim América",
    //     "Número 600",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Resíduos Eletrônicos, Lâmpadas"
    // ]

    // function afterInsertData(err) {
    //     if (err) {
    //         return console.log(err)
    //     } else {
    //         console.log("Cadastrado com Sucesso")
    //         console.log(this)
    //     }
    // }

    // db.run(query, values, afterInsertData)

    //Consultar os dados da tabela
    // db.all(`SELECT name FROM places`, function(err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Aqui estão os seus registros: ")
    //     console.log(rows)
    // })

    // Deletar um dado da tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [5], function (err) {
    //     if (err) {
    //         return console.log(err)
    //     } else {
    //         console.log("Registro removido com sucesso")
    //     }
    // })

    // UPDATE
    // db.run(`
    //     UPDATE places
    //     SET image='https://cdn4.ecycle.com.br/cache/images/guia_da_reciclagem/50-650-placa-750.jpg'
    //     WHERE id=1;
    // `)

})