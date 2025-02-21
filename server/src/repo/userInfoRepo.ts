import { IUserInfo } from "../interfaces";
import { IUserInfoRepo } from "../interfaces/IRepo";
import { IUserInfoDoc, UserInfoModel } from "../models/userInfo";



export class UserInfoRepo implements IUserInfoRepo {
    async create(data: IUserInfo, userId: string): Promise<IUserInfoDoc> {
        return await UserInfoModel.create({ ...data, userId })
    }
}