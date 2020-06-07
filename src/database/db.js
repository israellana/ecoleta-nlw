const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

/* 
db.serialize(() => {

    //CRIAR TABELA
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            adress TEXT,
            adress2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    const query = `
    INSERT INTO places(
        image,
        name,
        adress,
        adress2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?)
`

const values = [
    "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "Papersider",
    "Guilherme Gemballa, Jardim América",
    "Numero 260",
    "Santa Catarina",
    "Rio do Sul",
    "Residuos Eletronicos e Lampadas"
]

function afterInsertData(err) {
    if(err) {
        return console.log(err);
    }
    console.log("Cadastrado com sucesso");
    console.log(this);  
}

//INSERIR DADOS

    //db.run(query, values, afterInsertData )

//DELETAR DADOS


    db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("registro deletado");
        
    })


//SELECIONAR DADOS


    db.all(`SELECT * FROM places`, function(err, rows) {
        if(err) {
            return console.log(err);
        }
        console.log("Aqui estão os registros.");
        console.log(rows);
    })

})

*/
