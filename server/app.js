import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

//aqui importo el sistema de ruteo 
import mainRoutes from './routes/mainRoutes.js'

const app = express();

app.use('/', mainRoutes);

// enabilito los PORT con un limite de subida de 30MB
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

//enabilito el CORS para problemas de puertos
app.use(cors());

// aqui tienes que hacer tu base de datos cloud.mongodb.com
// variable de contrasenia de prefencia en archivo .ENV

const CONNECTION_URL =
  "mongodb+srv://GLinares:admin123@mern.yktji.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//puerto donde se va a contruir
const PORT = process.env.PORT || 5000;

//inicializo la base de datos y si se puede conectar corre servidor
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`))
  )
  .catch((error) => console.log(error.message));
