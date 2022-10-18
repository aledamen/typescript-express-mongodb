import { Router } from 'express'
import { getOrder } from '../services/order'
const router = Router()

router.get('/', getOrder)


export { router }
