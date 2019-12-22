const express = require('express')
const pessoasController = require('../controllers/pessoas')

const router = express.Router()

router.get('/', pessoasController.index)

module.exports = router
