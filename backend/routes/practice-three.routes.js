import { Router } from 'express'
import { getResultTask18, getResultTask21, getResultTask24, getResultTask27, getResultTask30 } from '../services/practice-three.service.js'
import { verifyAccess } from '../middlewares/verifyAccess.js'
const router = Router()

router
  .get('/task18', verifyAccess, getResultTask18)
  .get('/task21', verifyAccess, getResultTask21)
  .get('/task24', verifyAccess, getResultTask24)
  .get('/task27', verifyAccess, getResultTask27)
  .get('/task30', verifyAccess, getResultTask30)

export default router