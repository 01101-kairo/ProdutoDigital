const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(cors())

// C
// R
// U
// D

/* [Inicie o servidor] */
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
