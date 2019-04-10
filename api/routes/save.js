export default (app) => {
  app.get('/', (req, res, next) => {
    // let fs = require('fs')
    // const data = new Uint8Array(Buffer.from('test from express'))
    // fs.writeFile('datas/message.txt', data, err => {
    //   if (err) throw err
    //   console.log('The file has been saved!')
    // })
    res.json({ root: 'OK' })
  })
}
