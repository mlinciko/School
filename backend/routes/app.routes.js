import { Router } from 'express'
import authRoutes from './auth.routes.js'
import userRoutes from './user.routes.js'
import chatRoutes from './chat.routes.js'
import imageRoutes from './image.routes.js'
import practiceThreeRoutes from './practice-three.routes.js'
import gradeRoutes from './grade.routes.js'

const router = Router()

router.use('/auth', authRoutes)
router.use('/user', userRoutes)
router.use('/chat', chatRoutes)
router.use('/image', imageRoutes)
router.use('/practice-three', practiceThreeRoutes)
router.use('/grade', gradeRoutes)

export default router
