const express = require('express')
const path = require('path')
const pessoas = require('./routes/pessoas')

const port = process.env.PORT || 3000

const app = express()

app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('index'))
app.use('/pessoas', pessoas)

app.listen(port, () => console.log('listening on ' + port))
