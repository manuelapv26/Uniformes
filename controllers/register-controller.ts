import bcrypt from 'bcryptjs';
import UserRepository from '../repositories/UserRepository';
import { Request, Response } from "express";
import User from '../Dto/UserDto';

let register = async (req: Request, res: Response) => {
  try {
    // Extraer datos del cuerpo de la solicitud
    const { email, nombres, apellidos, telefono,domicilio, password } = req.body;

    // Validar que todos los campos requeridos estén presentes y no sean undefined
    if (!email || !nombres || !apellidos || !telefono ||!domicilio || !password) {
      throw new Error('Todos los campos son requeridos.');
    }

    // Generar la sal y hashear la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log('Datos recibidos:', req.body); // Imprimir datos recibidos

    // Crear una nueva instancia de User con los datos validados
    const newUser = new User(email, nombres, apellidos, telefono,domicilio, hashedPassword);

    // Llamar a UserRepository.add con la instancia newUser como parámetro
    const insertResult = await UserRepository.add(newUser);

    if (insertResult) {
      // Registro exitoso
      return res.status(201).send({
        status: 'register ok',
        password_hasheado: hashedPassword,
        user: newUser  // Incluir el usuario en la respuesta
      });
    } else {
      // Error en la inserción
      throw new Error('Error al insertar el usuario en la base de datos');
    }
  } catch (error: any) {
    console.log('Error durante el registro:', error);
    return res.status(400).send({ errorInfo: error.message });
  }
}

export default register;
