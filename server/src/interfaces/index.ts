

export interface IUser {
    email: string,
    password: string,
    mobileNumber: string,
}

export interface IUserInfo {
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