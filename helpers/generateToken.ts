import jwt from "jsonwebtoken";

function generateToken(email: string){
    try {
        const token = jwt.sign({ email: email }, 'Manuela', { expiresIn: '30s'});
        return token;
    } catch (error) {
        console.error('Error al generar el token:', error);
        throw new Error('Error al generar el token');
    }
}

export default generateToken;