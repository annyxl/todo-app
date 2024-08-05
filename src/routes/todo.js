const express = require('express');
const router = express.Router()
const db = require('../db/db')

//get
router.get('/todos', (req, res) => {
    db.all(`SELECT * from todos`, (err, rows) => {
        if(err){
            console.log(err)
            return res.status(500).send()
        }
        
        res.json(rows)
    })
})
router.get('/todo/:id', (req, res) => {
    db.get(`SELECT * from todos WHERE id = $id`, {$id : req.params.id}, (err, row) => {
        if(err){
            console.log(err)
            return res.status(500).send()
        }
        
        res.json(row)
    })
})
  
  //post
  router.post('/todo', (req, res) => {
    db.get(`INSERT INTO todos (content) VALUES ($todo) RETURNING *`, {$todo: req.body.todo}, (err, row) => {
        if(err){
            console.log(err)
            return res.status(500).send()
        }
        
        res.json(row)
    })
    // db.run(`INSERT INTO todos (content) VALUES ($todo)`, {$todo: req.body.todo}, function(err){
    //     if(err){
    //         console.log(err)
    //         return res.status(500).send()
    //     }
    //     const newID = this.lastID
    //     db.get(`SELECT * from todos WHERE id = $id`, {$id : newID}, (err, row) => {
    //         if(err){
    //             console.log(err)
    //             return res.status(500).send()
    //         }
            
    //         res.json(row)
    //     })
    // })
  })
  
  //put
  router.put('/todo/:id', (req, res) => {
    // Like post, but with `UPDATE todos SET completed = $completed, SET content = $content WHERE id = $id
    db.run("UPDATE todos SET content = $content, completed = $completed WHERE id = $id", {$id: req.params.id, $content: req.body.content, $completed: req.body.completed}, function(err) {
        if(err){
            console.log(err)
            return res.status(500).send()
        }
        res.status(204).send()
    } )
  })
  
  
  //delete

  router.delete('/todo/:id', (req, res) => {
    db.run("DELETE FROM todos WHERE id = $id", {$id: req.params.id}, function(err) {
        if(err){
            console.log(err)
            return res.status(500).send()
        }
        res.status(204).send()
      })
  })


  module.exports = router