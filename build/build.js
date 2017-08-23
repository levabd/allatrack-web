require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')
const fs = require('fs')
const ncp = require('ncp').ncp
const spinner = ora('building for production...')
const mkdirp = require('mkdirp')

spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))

    // copy src/robots.txt, sitemap.xml to needed locations
    fs.createReadStream(path.resolve(__dirname, '../src/robots.txt'))
      .pipe(fs.createWriteStream(path.resolve(__dirname, '../robots.txt')))

    fs.createReadStream(path.resolve(__dirname, '../src/sitemap.xml'))
      .pipe(fs.createWriteStream(path.resolve(__dirname, '../public/sitemap.xml')))

    mkdirp(path.resolve(__dirname, '../public/prerendered'))
    mkdirp(path.resolve(__dirname, '../public/prerendered/ru'))
    mkdirp(path.resolve(__dirname, '../public/prerendered/ua'))
    mkdirp(path.resolve(__dirname, '../public/prerendered/en'))

    // copy prerendered from project root to public/prerendered
    ncp(path.resolve(__dirname, '../en'), path.resolve(__dirname, '../public/prerendered/en'), function (err) {
      if (err) {return console.error(err)}
      console.log('en copied!')
      rm(path.resolve(__dirname, '../en'), err => {
        if (err) {return console.error(err)}
        console.log('en removed!')
      })
    })
    ncp(path.resolve(__dirname, '../ua'), path.resolve(__dirname, '../public/prerendered/ua'), function (err) {
      if (err) {return console.error(err)}
      console.log('ua copied!')
      rm(path.resolve(__dirname, '../ua'), err => {
        if (err) {return console.error(err)}
        console.log('ua removed!')
      })
    })
    ncp(path.resolve(__dirname, '../ru'), path.resolve(__dirname, '../public/prerendered/ru'), function (err) {
      if (err) {return console.error(err)}
      console.log('ru copied!')
      // remove prerendered from project root
      rm(path.resolve(__dirname, '../ru'), err => {
        if (err) {return console.error(err)}
        console.log('ru removed!')
      })
    })
  })
})
