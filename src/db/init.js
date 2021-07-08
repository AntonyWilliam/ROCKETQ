
const Database = require("./config")


const initDb = {
    //async deve sempre ser usado com o await, transformar a função em async
    async init(){
        // o wait serve para impedir que o codigo continue lendo os dados antes de terminar de ler os dados.
        const db = await Database()

        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`);

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room INT
        )`);

        await db.close()
    }
}


initDb.init();


