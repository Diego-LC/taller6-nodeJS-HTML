const express = require('express');
const app = express();
const ejs = require('ejs');

// Configuración del motor de plantillas EJS
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.urlencoded({ extended: false }));

// Ruta para renderizar la página con la tabla de colores
app.get('/', (req, res) => {
    idioma = 'esp';
    res.render('idioma_in', {idioma});
});

app.post('/procesar', (req, res) => {
    const idioma = req.body.idioma;
    res.render('idioma_out', { idioma});
});

app.listen(3055, () => {
    console.log('Servidor web en ejecución en el puerto 3055');
});