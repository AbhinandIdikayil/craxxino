

export interface IUser  {
    email: string,
    password: string,
    mobile_number: string,
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