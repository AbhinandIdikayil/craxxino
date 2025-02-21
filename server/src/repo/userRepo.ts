import mongoose from "mongoose";
import { IUser } from "../interfaces";
import { IUserRepo } from "../interfaces/IRepo";
import { UserDoc, UserModel } from "../models/user";
import { DB_enum } from "../constants/db";


export class UserRepo implements IUserRepo {
    async create(data: IUser): Promise<UserDoc> {
        return await UserModel.create(data)
    }
    async findByEmail(data: string): Promise<UserDoc | null> {
        return await UserModel.findOne({ email: data })
    }
    async findByMobile(data: string): Promise<UserDoc | null> {
        return await UserModel.findOne({ mobileNumber: data })
    }
    async getUser(id: string): Promise<any> {
        return await UserModel.aggregate([
            { $match: { _id: new mongoose.Types.ObjectId(id) } },
            {
                $lookup:{
                    from:DB_enum.USER_INFO_MODEL,
                    localField:'_id',
                    foreignField:'userId',
                    as:'userInfo'
                }
            },
            {
                $unwind:'$userInfo'
            }
        ]);
    }
}

