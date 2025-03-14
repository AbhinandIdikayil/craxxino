import { IUser, IUserInfo } from ".";
import { UserDoc } from "../models/user";
import { IUserInfoDoc } from "../models/userInfo";


export interface IAuthService {
    createUser(data:IUser): Promise<UserDoc>
    createUserInfo(data:IUserInfo,userId: string): Promise<IUserInfoDoc>
    getUserInformation(id: string): Promise<any>
}