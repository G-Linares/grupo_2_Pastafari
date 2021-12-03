const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;

const mainRouters = require('./routers/mainRouter.js');

app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRouters);

app.listen (port, () => {
    console.log(`Escuchando en el puerto ${port}`);
})