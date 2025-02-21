import { createSlice } from "@reduxjs/toolkit";
import { string } from "zod";

export interface IUser {
    form: {
        id: string | null,
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
        id: null,
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
    currentStep: 0
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAccountInfo: (state, { payload }) => {
            state.form.id = payload
        },
        setPersonalInfo: (state, { payload }) => {
            state.form.personalInfo = payload;
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