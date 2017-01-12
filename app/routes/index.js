var router = require('express').Router()
var cervezas = require('./cervezas')
var aficiones = require('./aficiones')

router.use('/cervezas', cervezas)
router.use('/aficiones',aficiones)


router.get('/', function (req, res) {
  res.status(200).json({ message: 'Estás conectado a nuestra API' })
})

module.exports = router