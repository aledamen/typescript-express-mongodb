import { hash, compare } from 'bcryptjs'

const encrypt = async (pass: string) => {
    return await hash(pass, 8)
}
const verifiy = async(pass:string, passHashed:string) => {
    return await compare(pass, passHashed)
}

export { encrypt, verifiy }
