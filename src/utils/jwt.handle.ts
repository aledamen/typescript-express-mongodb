import { sign, verify } from 'jsonwebtoken'
import { Types } from 'mongoose'
import 'dotenv/config'
const SECRET = <string>process.env.SECRET

const generateToken = (id: Types.ObjectId) => {
    return sign({ id }, SECRET, { expiresIn: '2hs' })
}

const verifiyToken = () => {}

export { generateToken, verifiyToken }
