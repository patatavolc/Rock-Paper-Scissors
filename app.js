const express = require('express');

const app = express();
const port = 3000;

// Rutas estaticas
app.use(express.static('public'));


// Rutas
app.get('/', (req, res) => {
  res.send('¡Hola, mundo! La aplicación está funcionando.');
});


app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});