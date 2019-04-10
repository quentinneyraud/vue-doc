const multer = require('multer')
const storage = multer.diskStorage({
  destination: 'datas/images/',
  filename: (req, file, cb) => cb(null, file.originalname)
})
const upload = multer({
  storage
})

export default (app) => {
  app.post('/image', upload.single('file'), (req, res) => {
    res.json({ root: 'OK' })
  })
}
