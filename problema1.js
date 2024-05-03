const express = require('express');
const app = express();
const ejs = require('ejs');
function getColor(m, n) {/*...*/}

// Configuración del motor de plantillas EJS
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.urlencoded({ extended: false }));

// Ruta para renderizar la página con la tabla de colores
app.get('/', (req, res) => {
    const m = 4;
    const n = 10;
    res.render('tabla_pl', { getColor, m, n });
});

app.post('/procesar', (req, res) => {
    const {m, n} = req.body;
    console.log(m, n);
    res.render('tabla_pl_out', { getColor, m, n });
});

app.listen(3055, () => {
    console.log('Servidor web en ejecución en el puerto 3055');
});