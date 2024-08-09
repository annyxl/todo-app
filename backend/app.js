const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const db = require('./src/db/db');
const todoRouter = require('./src/routes/todo');

app.use(cors())
app.use(express.static('public'))
app.use(express.json()) // puts on req.body
app.use('/api', todoRouter)

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}. http://localhost:${port}`)
})

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Shutting down the server.')
    db.close()
  })
})