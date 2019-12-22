const express = require('express')
const path = require('path')
const pessoas = require('./routes/pessoas')
const model = require('./models/index')

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('index'))
app.use('/pessoas', pessoas)

model.sequelize.sync({ force: true }).then(() => {
  app.listen(port, () => console.log('listening on ' + port))
})
