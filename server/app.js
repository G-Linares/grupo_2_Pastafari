const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const menuRoutes = require('./routes/menuRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const db = require('./models');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

//rutas
app.use('/menu', menuRoutes);
app.use('/users', userRoutes);

// enabilito los PORT con un limite de subida de 30MB
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

//enabilito el CORS para problemas de puertos


db.sequelize.sync().then(()=>{
  app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`))
})

