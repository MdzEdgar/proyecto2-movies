const express = require('express')
const cors = require('cors')
const { json } = require('express')

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({message: 'Server OK'})
})

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`)
})

module.exports = app
