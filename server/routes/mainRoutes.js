import express  from "express";

//aqui se importan los controladores
import { index, createDummyData } from "../controllers/mainControllers.js";

//inicializo la ruta
const router = express.Router();

//aui van las rutas
router.get('/', index);
router.post('/', createDummyData);

export default router;