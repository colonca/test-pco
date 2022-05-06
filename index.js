require('dotenv').config();
const express = require('express')
const app = express()

app.get('/check', (req,res) => {
   res.send('ok');
})

app.get('/', (req, res) => {
  res.send('Hello World!')
});

const port = process.env.port;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
