import mongoose, { Schema } from "mongoose"
import { DB_enum } from "../constants/db";

export interface IUserInfoDoc extends Document {
    personalInfo: {
        fullName: string,
        dob: Date,
        address: string,
        addressDuration: string,
        about: string
    },
    financialInfo: {
        employmentStatus: string,
        savingsOrInvestments: string
    }
}
const userInfoSchema = new Schema<IUserInfoDoc>({
    personalInfo: {
        fullName: {
            required: true,
            type: String
        },
        dob: {
            required: true,
            type: Date
        },
        address: {
            required: true,
            type: String
        },
        addressDuration: {
            required: true,
            type: String
        },
        about: {
            required: true,
            type: String
        },
    },
    financialInfo: {
        employmentStatus: { type: String, required: true },
        savingsOrInvestments: { type: String, required: true }
    }
});

export const UserInfoModel = mongoose.model(DB_enum.USER_INFO_MODEL, userInfoSchema);