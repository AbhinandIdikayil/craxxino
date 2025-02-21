import { IUser, IUserInfo } from ".";
import { UserDoc } from "../models/user";
import { IUserInfoDoc } from "../models/userInfo";



export interface IUserRepo  {
    create(data:IUser): Promise<UserDoc>
    findByEmail(data:string): Promise<UserDoc | null>
    findByMobile(data: string): Promise<UserDoc | null>
}

export interface IUserInfoRepo {
    create(data:IUserInfo): Promise<IUserInfoDoc>
}