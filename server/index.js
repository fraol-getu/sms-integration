const express = require("express")
const app = express()
const cors = require('cors')


app.use(cors({
  origin: 'http://localhost:3000'
}))

app.get("/", (req, res) => {
  res.send()
})

app.listen(3001)
