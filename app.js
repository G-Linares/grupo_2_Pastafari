const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, () => console.log('Servidor montado en puerto 3000'));

app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname,'views/home.html'));
});

app.get('/carrito',function(req,res){
    res.sendFile(path.resolve(__dirname,'views/carrito.html'));
});

app.get('/login',function(req,res){
    res.sendFile(path.resolve(__dirname,'views/login.html'));
});

app.get('/producto',function(req,res){
    res.sendFile(path.resolve(__dirname,'views/producto.html'));
});
