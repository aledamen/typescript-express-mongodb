import { Router } from 'express'
import { getFile } from '../controllers/upload'
import upload from '../middlewares/file'
import { checkJwt } from '../middlewares/session'

const router = Router()

router.post('/',checkJwt, upload.single('myFile'), getFile)

export {router}