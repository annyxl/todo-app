const sqlite = require('sqlite3');
const db = new sqlite.Database(':memory:');

db.serialize(() => {
    db.run(`
        CREATE TABLE todos (
            id INTEGER PRIMARY KEY,
            content TEXT,
            completed INTEGER DEFAULT 0
        )
    `)
    db.run(`
        INSERT INTO todos (content, completed)
        VALUES
            ('This is a completed todo', 1),
            ('You can check the checkbox to complete this', 0),
            ('Add some more with the input', 0)
    `)
})

module.exports = db