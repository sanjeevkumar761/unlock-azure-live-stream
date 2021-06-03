

const express = require('express')
const app = express()
const port = 4000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Unlock protocol with Azure Media Services Livestream demo!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
