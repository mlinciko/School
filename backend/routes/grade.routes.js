import { Router } from 'express'
import {
  verifyAccess
} from '../middlewares/index.js'
import { getGradesForCurrentUser } from '../services/grade.service.js'

const router = Router()

router
  .get('/', verifyAccess, getGradesForCurrentUser)

export default router