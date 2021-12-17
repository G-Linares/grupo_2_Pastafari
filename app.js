const express = require('express');
const app = express();
const path = require('path');
const methodOverride =  require('method-override');

const port = process.env.PORT || 3000;

const mainRouters = require('./src/routers/mainRouter.js');
const productRouters = require ('./src/routers/productRouters.js');

//inicializamos el motor de vista a EJS
app.set('view engine', 'ejs');

//declaramos carpeta estatitica a public
app.use(express.static(path.join(__dirname, './public')));

//inicializamos middleware para POST
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//inicializo middleware para PUT y DELETE
app.use(methodOverride('_method'));

//incluyo los dos paths, users y products para diferentes views.
app.set('views', [path.join(__dirname + '/src/views/users'), path.join(__dirname + '/src/views/products')]);

// aqui vas los paths para el URL
app.use('/', mainRouters);
app.use('/producto', productRouters);

// ************ error handler ************
app.use((req, res, next) => next(createError(404)));
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen (port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});