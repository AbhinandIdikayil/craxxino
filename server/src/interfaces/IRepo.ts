import { IUser } from ".";
import { UserDoc } from "../models/user";



export interface IUserRepo  {
    create(data:IUser): Promise<UserDoc>
}