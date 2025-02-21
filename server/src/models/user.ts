import mongoose, { Document, Schema, Types } from 'mongoose'
import { DB_enum } from '../constants/db';
import bcrypt from 'bcryptjs'
export interface UserDoc extends Document {
    _id: Types.ObjectId | string,
    email: string,
    password: string,
    mobileNumber: string,
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
    mobileNumber: {
        type: String,
        required: true
    },

}, { timestamps: true });

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

export const UserModel = mongoose.model<UserDoc>(DB_enum.USER_MODEL, userSchema);