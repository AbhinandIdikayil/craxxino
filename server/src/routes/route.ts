import { Router } from 'express'
import { AuthController } from '../controller/AuthController'
import { AuthService } from '../service/AuthService'
import { UserRepo } from '../repo/userRepo'
import { UserInfoRepo } from '../repo/userInfoRepo'
export const router = Router()

const userRepo = new UserRepo()
const userInfoRepo = new UserInfoRepo()
const authService = new AuthService(userRepo, userInfoRepo);
const authController = new AuthController(authService)

router.route('/auth/account').post(authController.createAccount.bind(authController));

router.route('/auth/info').post(authController.createUserInfo.bind(authController));
router.route('/user/:id').get(authController.getUserInfo.bind(authController));
