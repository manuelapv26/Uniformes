import { Request, Response } from "express";
import db from '../config/config-db';

export const getUniformes = async (req: Request, res: Response) => {
    try {
        const data = await db.query('SELECT * FROM uniforme');
        res.json({
            data
        });
    } catch (error) {
        console.error("Error al ejecutar la consulta:", error);
        return res.status(500).json({
            error: "Error al obtener usuarios"
        });
    }
};

export default getUniformes;