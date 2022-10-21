import { sign, verify } from 'jsonwebtoken'
import { Types } from 'mongoose'
import 'dotenv/config'
const SECRET = <string>process.env.SECRET

const generateToken = (id: Types.ObjectId) => {
    return sign({ id }, SECRET, { expiresIn: '2h' })
}

const verifyToken = (jwt:string) => {
    return verify(jwt, SECRET)
}

export { generateToken, verifyToken }
