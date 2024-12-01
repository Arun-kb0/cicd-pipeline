const express = require('express')
const PORT = 8080
const app = express()


// * for dummy commit 2
app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message : "Hello world change 2"
  })
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})