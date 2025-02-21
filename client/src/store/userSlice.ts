import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
    form: {
        email: string | null,
        password: string | null,
        mobile_number: string | null,
        personalInfo: {
            fullName: string | null,
            dob: Date | null,
            address: string | null,
            address_duration: string | null,
            about: string | null
        },
        financialInfo: {
            employmentStatus: string | null,
            savingsOrInvestments: string | null
        }
    },
    currentStep: number | null
}

const initialState: IUser = {
    form: {
        email: '',
        mobile_number: '',
        password: '',
        financialInfo: {
            employmentStatus: '',
            savingsOrInvestments: ''
        },
        personalInfo: {
            fullName: '',
            dob: null, // Fixed type issue
            about: '',
            address: '',
            address_duration: '',
        }
    },
    currentStep: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAccountInfo: (state, action) => {
            state.form.email = action.payload;
            state.form.password = action.payload;
            state.form.mobile_number = action.payload;
        },
        setPersonalInfo: (state, action) => {
            state.form.personalInfo = action.payload;
        },
        setFinancialInfo: (state, action) => {
            state.form.financialInfo = action.payload;
        },
        setCurrentStep: (state, action) => {
            state.currentStep = action.payload;
        }
    }
})

export const { setAccountInfo, setPersonalInfo, setFinancialInfo, setCurrentStep } = userSlice.actions;
export default userSlice.reducer;