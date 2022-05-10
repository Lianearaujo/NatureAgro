const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('index'))
  .get('/login', (req, res) => res.render(__dirname+ '/views/login'))
  //res.sendFile(__dirname+ "/html/index.html")
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
