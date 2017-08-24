const path = require('path')
const fs = require('fs')
const webp = require('webp-converter')
const mkdirp = require('mkdirp')

let files = []
fs.readdirSync(path.resolve(__dirname, '../src/assets/img')).forEach(function (file) {
  const regex = /\.(png|jpe?g)(\?.*)?$/gm
  let m
  if ((m = regex.exec(file)) !== null) {
    files.push(m)
  }
})

mkdirp(path.resolve(__dirname, '../public/img/webp'))

files.forEach(object => {
  let pathFrom = path.resolve(__dirname, '../src/assets/img/' + object.input)
  let pathTo = path.resolve(__dirname, '../public/img/webp/' + object.input.replace(object[0], '.webp'))
  webp.cwebp(pathFrom, pathTo, '-q 90', status => {
    console.log(status)
  })
})
