//import la base de datos
import DummyData from "../models/dummyData.js";

//exporto los controladores de uno en uno para que el router las cache
export const index = async (req,res) => {
    try {
        // asigno todos los resultados de la BD y lo hago funcion asincrona
        const allDummyData = await DummyData.find();
        //se imprime y lo mando a imprimir en pantalla
        console.log(allDummyData);
        res.status(200).json(allDummyData);

    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const createDummyData = async (req,res) => {
    const dumbData = req.body;
    const newDumbData = new DummyData(dumbData);

    try {

       await newDumbData.save();
        res.status(201).json(newDumbData);

    } catch (error) {
        //409 es cuando hay conlficto en cliente
        res.status(409).json({ message: error.message });
        
    }
}

