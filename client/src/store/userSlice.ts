import { createSlice } from "@reduxjs/toolkit";
enum title {
    Mr = 'Mr',
    Mrs = 'Mrs',
}
enum Employed  {
    Unemoployed = 'Unemoployed',
    Emoployed = 'Emoployed'
}
export interface IUser {
    form: {
        id: string | null,
        personalInfo: {
            title: title | null;
            fullName: string | null,
            dob: Date | null,
            address: string | null,
            addressDuration: string | null,
            about: string | null
        },
        financialInfo: {
            employmentStatus: Employed | null,
            savingsOrInvestments: string | null
        }
    },
    currentStep: number | null
}

const initialState: IUser = {
    form: {
        id: null,
        financialInfo: {
            employmentStatus: null,
            savingsOrInvestments: ''
        },
        personalInfo: {
            title: null,
            fullName: '',
            dob: null, // Fixed type issue
            about: '',
            address: '',
            addressDuration: '',
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