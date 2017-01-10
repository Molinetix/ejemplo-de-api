//llamamos a Express
var express = require('express') 
var app = express()
// establecemos nuestro puerto               
var port = process.env.PORT || 8080  


app.get('/', function(req, res) {
  res.json({ mensaje: '¡Hola Mundo!' })   
})

app.listen(port)
console.log('API escuchando en el puerto ' + port)