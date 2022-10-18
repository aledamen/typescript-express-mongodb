import { Auth } from '../interfaces/auth.interface'
import { User } from '../interfaces/user.interface'
import UserModel from '../models/user.model'
import { generateToken } from '../utils/jwt.handle'
import { encrypt, verifiy } from '../utils/pass.handle'


const registerNewUser = async ({ email, password, name }: User) => {
    const userExist = await UserModel.findOne({ email })
    if (userExist) return 'USER_ALREADY_EXIST'
    const passHashed = await encrypt(password)
    return await UserModel.create({ email, password: passHashed, name })
}
const loginUser = async ({ email, password }: Auth) => {
    const userExist = await UserModel.findOne({ email })
    if (!userExist) return 'USER_NOT_FOUND'
    const checkedPass = await verifiy(password, userExist.password)
    if (!checkedPass) return 'INCORRECT_PASSWORD'
    const token = generateToken(userExist._id)
    const data = {
        token,
        data:userExist,
    }
    return data
}

export { registerNewUser, loginUser }
