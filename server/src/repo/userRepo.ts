import { IUser } from "../interfaces";
import { IUserRepo } from "../interfaces/IRepo";
import { UserDoc, UserModel } from "../models/user";


export class UserRepo implements IUserRepo {
    async create(data: IUser): Promise<UserDoc> {
        return await UserModel.create(data)
    }
}