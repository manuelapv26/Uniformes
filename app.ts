import express from "express";
import bodyParser from 'body-parser';

import register from './routes/register';
import auth from './routes/auth';

import dotenv from "dotenv";
import getUniformes from "./routes/getUniforme";
dotenv.config();

const app = express().use(bodyParser.json());

app.use('/register', register);
app.use('/auth', auth);
app.use('/uniforme',getUniformes)

const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});
