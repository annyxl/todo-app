const express = require('express');
const router = express.Router()


//get
router.get('/todos', (req, res) => {
    const data = {
      message: "hello world!!!!"
    }
    res.json(data)
  })
  
  //post
  router.post('/todo', (req, res) => {
    const requestBody = req.body
    const responseData = {
      message: 'Hello from POST',
      body: requestBody.message,
      id: 'generated by other code'
    }
    console.log('POST req', requestBody)
    console.log('POST res', responseData)
    res.json(responseData)
  })
  
  //put
  router.put('/todo/:id', (req, res) => {
    const requestBody = req.body
    const responseData = {
      message: 'Hello from PUT',
      body: requestBody.message,
      id: req.params.id
    }
    console.log('PUT req', requestBody)
    console.log('PUT res', responseData)
    res.json(responseData)
  })
  
  
  //delete
  router.delete('/todo/:id', (req, res) => {
    console.log('DELETE', req.params.id)
    res.status(204).send()
  })

  module.exports = router