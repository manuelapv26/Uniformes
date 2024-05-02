import express from "express";
import getUniformes from "../controllers/getUniformer-controller";
import validatorToken from "../middleware/validatorToken";
const router = express.Router();


router.get('/', validatorToken, getUniformes);


export default router;
