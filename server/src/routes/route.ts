import { Router } from 'express'
import { AuthController } from '../controller/AuthController'
import { AuthService } from '../service/AuthService'
import { UserRepo } from '../repo/userRepo'
export const router = Router()

const userRepo = new UserRepo()
const authService = new AuthService(userRepo)
const authController = new AuthController(authService)

router.route('/auth').post(authController.createAccount.bind(authController))