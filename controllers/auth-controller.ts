import { Request, Response} from "express";
import generateToken from "../helpers/generateToken";
import Auth from "../Dto/UserAuthDto";
import UserService from "../services/UserServices";


const authController = async (req: Request, res: Response)=> {
    try {
        const {email, password} = req.body;
        const result : any= await UserService.auth(new Auth(email,password));
        if (result.logged){
            return res.status(200).json({
                status: "Succesful Authentication",
                token:  await generateToken(email)
            })
        }
        return res.status(401).json({ 
            status: 'Incorrect username or password'
        });
    } catch (error) {
        console.log(error);
    }
}

export default authController;