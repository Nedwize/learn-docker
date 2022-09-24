const express = require('express')
const app = express()

app.get('/', (_req, res) => {
  res.send('Hello World! This is Docker.')
})

app.use((_, res) => {
  res.status(404).json({ error: 'unknown endpoint' })
})

app.listen(3030, () => {
  console.log('server listening on port 3030')
})
