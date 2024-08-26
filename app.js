const express = require('express')
const addGroupController = require('./controllers/addGroupController')

const app = express()
app.use(express.json())

app.post('/group', (req, res) => {
  try {
    addGroupController(req.body)
    res.sendStatus(201)
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message })
    }
    if (error.name === 'ConflitError') {
      return res.status(409).json({ message: error.message })
    }
  }
})

module.exports = app