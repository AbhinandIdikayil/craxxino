import { IUser } from ".";
import { UserDoc } from "../models/user";


export interface IAuthService {
    createUser(data:IUser): Promise<UserDoc>
}