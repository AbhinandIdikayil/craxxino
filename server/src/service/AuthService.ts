import { IUser } from "../interfaces";
import { IUserRepo } from "../interfaces/IRepo";
import { IAuthService } from "../interfaces/IService";
import { UserDoc } from "../models/user";


export class AuthService implements IAuthService {
    private userRepo: IUserRepo
    constructor(userRepo: IUserRepo) {
        this.userRepo = userRepo
    }
    async createUser(data: IUser): Promise<UserDoc> {
        return this.userRepo.create(data)
    }
}