import { Request, Response, Router } from 'express'
import { getItem, getItems } from '../controllers/item'

const router = Router()

router.get('/', getItems)
router.get('/:id', getItem)
router.post('/', getItems)
router.put('/:id', getItem)
router.delete('/:id', getItem)

export {router}