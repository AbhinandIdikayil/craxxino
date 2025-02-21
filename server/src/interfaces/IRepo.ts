import { IUser, IUserInfo } from ".";
import { UserDoc } from "../models/user";
import { IUserInfoDoc } from "../models/userInfo";



export interface IUserRepo  {
    create(data:IUser): Promise<UserDoc>
    findByEmail(data:string): Promise<UserDoc | null>
    findByMobile(data: string): Promise<UserDoc | null>
    getUser(id: string): Promise<any>
}

export interface IUserInfoRepo {
    create(data:IUserInfo, userId: string): Promise<IUserInfoDoc>
}