import { NextFunction, Request, Response } from "express";
import { IAuthService } from "../interfaces/IService";
import { authFormValidator, userInfoFormValidator } from "../utils/validation/authFormValidation";
import ErrorResponse from "../utils/errorResponse";
import { success } from "../utils/success";



export class AuthController {
    private service: IAuthService
    constructor(service: IAuthService) {
        this.service = service
    }

    async createAccount(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(req.body)
            const { value, error } = authFormValidator.validate(req.body, { abortEarly: false })
            console.log(error)
            if (error) {
                const formattedErrors = error.details.map((err) => ({
                    message: err.message.replace(/["\\]/g, ''),
                    field: err.path.join('.'),
                }));

                throw ErrorResponse.badRequest(
                    formattedErrors,
                );
            }
            const user = await this.service.createUser(value);

            return success(res, { message: 'User created successfully', data: user._id })
        } catch (error) {
            next(error)
        }
    }

    async createUserInfo(req: Request, res: Response, next: NextFunction) {
        try {
            const { value, error } = userInfoFormValidator.validate(req.body, { abortEarly: false })
            if (error) {
                console.log(error)
                const formattedErrors = error?.details.map((err) => ({
                    message: err.message.replace(/["\\]/g, ''),
                    field: err.path.join('.'),
                }));

                throw ErrorResponse.badRequest(
                    formattedErrors,
                );
            }
            const { userId } = req.query
            if (!userId) {
                throw ErrorResponse.badRequest('userId is not provided')
            }
            const data = await this.service.createUserInfo(value, userId as string)
            return success(res, { message: 'User info created successfully', data })
        } catch (error) {
            next(error)
        }
    }

    async getUserInfo(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params
            if (!id) {
                throw ErrorResponse.badRequest('id is required')
            }
            const data = await this.service.getUserInformation(id)
            return success(res, { message: 'Successfull', data })
        } catch (error) {
            next(error)
        }
    }
}   