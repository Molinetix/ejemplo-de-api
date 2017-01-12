var router = require('express').Router()

var aficiones = {
  joven: ['Salir de marcha', 'Deportes', 'Jugar'],
  adulto: ['Salir de cena', 'Cuidar hijos'],
  mayor: ['Salir de comida', 'Cuidar nietos']
}

router.get('/', function(req, res) {
  res.status(200).json(aficiones)
})
router.get('/:edad', function(req, res) {
  res.status(200).json({aficiones: aficiones[req.params.edad]})
})

module.exports = router