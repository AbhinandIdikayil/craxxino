import { IUser, IUserInfo } from "../interfaces";
import { IUserInfoRepo, IUserRepo } from "../interfaces/IRepo";
import { IAuthService } from "../interfaces/IService";
import { UserDoc } from "../models/user";
import { IUserInfoDoc } from "../models/userInfo";
import ErrorResponse from "../utils/errorResponse";


export class AuthService implements IAuthService {
    private userRepo: IUserRepo
    private userInfoRepo: IUserInfoRepo
    constructor(userRepo: IUserRepo, userInfoRepo: IUserInfoRepo) {
        this.userRepo = userRepo
        this.userInfoRepo = userInfoRepo
    }
    async createUser(data: IUser): Promise<UserDoc> {
        const existnigEmail = await this.userRepo.findByEmail(data.email);
        if (existnigEmail) {
            throw ErrorResponse.badRequest('Email already exist');
        }
        const existingMobile = await this.userRepo.findByMobile(data.mobileNumber)
        if (existingMobile) {
            throw ErrorResponse.badRequest('Mobile number already exist')
        }
        return this.userRepo.create(data)
    }
    async createUserInfo(data: IUserInfo, userId: string): Promise<IUserInfoDoc> {
        return this.userInfoRepo.create(data, userId)
    }
}