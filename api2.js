const express = require('express');
const mongoose = require('mongoose');
const user = require('./user.handler');
const app = express();
const port = 3000;

app.use(express.json());
mongoose.connect('mongodb+srv://0xtakemichi:Refuse 3Hankie1 Traverse3 Cosigner Slab Voyage2 Latticed@cluster0.zhm2eyc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

// Los Endpoints son rutas a las cuales puedes llegar a través de peticiones HTTP
app.get('/', user.list);
app.post('/', user.create);
app.get('/:id', user.get);
app.put('/:id', user.update);
app.patch('/:id', user.update);
app.delete('/:id', user.destroy);

// Manejo de errores 404
// Siempre debe ir al final de todas las rutas
app.get('*', (req, res) => {
    res.status(404).send('Not Found');
});
// Manejo de errores 404 para peticiones POST
// El usuario no realizara peticiones POST
app.post('*', (req, res) => {
    res.status(404).send('Not Found');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});