const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')

const sequelize = new Sequelize('cadastro-orm', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql',
})

const models = {}
fs.readdirSync(__dirname)
  .filter((file) => file !== 'index.js')
  .forEach((file) => {
  const model = sequelize.import(path.join(__dirname, file))
  models[model.name] = model
})

sequelize.import('./pessoas.js')

module.exports = {
  sequelize,
  models
}