import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";

export const getUser = async(
    req: Request,
    res: Response
): Promise<void>=>{
    try {
        const token = req.headers.authorization as string;
           
        const tokenData = new Authenticator().getTokenData(token)
    
        const user = await getUser(tokenData.id);
    
        res.status(200).send({
          id: user.id,
          email: user.email,
        });
      } catch (err) {
        res.status(400).send({
          message: err.message,
        });
      }
    };