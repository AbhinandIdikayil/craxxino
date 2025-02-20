import { NextFunction, Request, Response } from "express";
import { IAuthService } from "../interfaces/IService";
import { authFormValidator } from "../utils/validation/authFormValidation";
import ErrorResponse from "../utils/errorResponse";
import { success } from "../utils/success";



export class AuthController {
    private service: IAuthService
    constructor(service: IAuthService) {
        this.service = service
    }

    async createAccount(req: Request, res: Response, next: NextFunction) {
        try {
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

            return success(res, { message: 'User created successfully', data: user })
        } catch (error) {
            next(error)
        }
    }
}   