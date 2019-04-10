const express = require('express')
const app = express()
const multer = require('multer')
var storage = multer.diskStorage({
  destination: 'datas/images/',
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })

app.use(express.static('datas'))
app.get('/', (req, res, next) => {
  // let fs = require('fs')
  // const data = new Uint8Array(Buffer.from('test from express'))
  // fs.writeFile('datas/message.txt', data, err => {
  //   if (err) throw err
  //   console.log('The file has been saved!')
  // })
  res.json({ root: 'OK' })
})

app.post('/image', upload.single('file'), (req, res, next) => {
  res.json({ root: 'OK' })
})

module.exports = {
  path: '/api',
  handler: app
}
