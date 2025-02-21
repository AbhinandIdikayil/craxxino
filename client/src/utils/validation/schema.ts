import * as z from 'zod';

export const accountSchema = z.object({
    email: z.string()
        .email('Invalid email format')
        .min(1, 'Email is required'),
    password: z.string()
        .min(6, 'Password must be at least 6 characters')
        .regex(/[A-Z]/, 'must contain one uppercase letter')
        .regex(/[0-9]/, 'must contain one number'),
    confirmPassword: z.string(),
    mobileNumber: z.string()
        .regex(/^\+?[1-9]\d{9,11}$/, 'Invalid phone number'),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Password do not match',
    path: ['confirmPassword']
})


export const personalInfoSchema = z.object({
    title: z.enum(["Mr", "Mrs"], {
        required_error: "Please select a title", 
        message:'Required'
    }),
    fullName: z.string().min(1, 'Full name is required'),
    address: z.string().min(1, 'Address is required'),
    about: z.string().min(1, 'About is required'),
    addressDuration: z.string().min(1, 'Duration is required'),
    dob: z.date({ required_error: 'Date is required' })
});



export const financialInfoSchema = z.object({
    employmentStatus:z.enum(["Employed", "Unemployed"], {
        required_error: "Please select a title", 
        message:'Required'
    }),
    savingsOrInvestments: z.string().min(1, 'Annual income is required'),
});


export type AccountFormData = z.infer<typeof accountSchema>;
export type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;
export type FinancialInfoFormData = z.infer<typeof financialInfoSchema>;