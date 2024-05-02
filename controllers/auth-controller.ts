const db = require('../config/config-db.js');
import { Request, Response} from "express";
import authMiddleware from "../middleware/authMiddleware";


const authController = (req: Request, res: Response)=> {
    authMiddleware(req, res);
}

export default authController;