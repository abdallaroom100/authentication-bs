import mongoose, { Document, Schema } from "mongoose";

export interface UserModelTypes extends Document {
    email: string,
    name: string,
    password: string,
    lastLogin: Date,
    isVerified: boolean,
    resetPasswordToken: (string | undefined),
    resetPasswordExpiresAt: (string | undefined),
    verificationToken: (string | undefined),
    verificationTokenExpiresAt: (string | undefined),
}

const userModel = new Schema<UserModelTypes>({
    email: {
        required: true,
        type: String,
        unique:true,
    },
    name: {
        required: true,
        type: String,
        minLength: [3, "name field must be atleast 3 chars"]
    },
    password: {
        required: true,
        type: String,
        minLength: [6, "password field must be atleast 6 chars"]
    },
    lastLogin: {
        type: Date,
        default: Date.now()
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: String,
    verificationToken: String,
    verificationTokenExpiresAt: String,

}, {
    timestamps: true
})

const User = mongoose.model<UserModelTypes>("authUser", userModel)

export default User