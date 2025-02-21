import mongoose, { Schema, Types } from "mongoose"
import { DB_enum } from "../constants/db";

enum Title {
    Mrs = 'Mrs',
    Mr = 'Mr'
}
export interface IUserInfoDoc extends Document {
    userId: Types.ObjectId,
    personalInfo: {
        title: Title,
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
    userId: {
        ref: DB_enum.USER_MODEL,
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    personalInfo: {
        title: {
            type: Object.values(Title),
            required: true
        },
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