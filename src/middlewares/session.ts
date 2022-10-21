import { Response, Request, NextFunction } from "express"
import { RequestExt } from "../interfaces/req.interface";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = async (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtUser = req.headers.authorization || ""
        const jwt = jwtUser.split(' ').pop()
        const verfiedUser = verifyToken(`${jwt}`) as { id: string }
        req.user = verfiedUser
        next() 
    } catch (e) {
        res.status(400).send('NO_VALIDATE_SESSION')
    }
}

export {checkJwt}