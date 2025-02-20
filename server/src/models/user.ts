import mongoose, { Document, Schema, Types } from 'mongoose'
import { DB_enum } from '../constants/db';

export interface UserDoc extends Document {
    _id: Types.ObjectId | string,
    email: string,
    password: string,
    mobileNumber: string,
    personalInfo: {
        fullName: string,
        dob: Date,
        address: string,
        address_duration: string,
        about: string
    },
    financialInfo: {
        employmentStatus: string,
        savingsOrInvestments: string
    }
}


const userSchema = new Schema<UserDoc>({
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    mobileNumber:{
        type: String,
        required: true
    },
    personalInfo: {
        fullName: {
            required: true,
            type: String
        },
        mobile_number: {
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
        address_duration: {
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
}, { timestamps: true });

export const UserModel = mongoose.model<UserDoc>(DB_enum.USER_MODEL, userSchema);