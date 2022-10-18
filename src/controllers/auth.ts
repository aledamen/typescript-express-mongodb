import { Request, Response } from 'express'
import { registerNewUser, loginUser } from '../services/auth'

const registerController = async ({ body }: Request, res: Response) => {
    const user = await registerNewUser(body)
    if (typeof user === 'string') return res.status(403).send(user)
    else return res.status(200).send(user)
}

const loginController = async ({ body }: Request, res: Response) => {
    const user = await loginUser(body)
    if (typeof user === 'string') return res.status(403).send(user)
    else return res.status(200).send(user)
}

export { registerController, loginController }
