import * as Joi from 'joi';

export const authFormValidator = Joi.object({
    email: Joi
        .string()
        .required()
        .email()
        .messages({
            'string.email': 'Please enter a valid email address.',
            'string.empty': 'Email is required.'
        }),
    password: Joi.string()
        .min(6)
        .pattern(/^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$/, 'alphanumeric with one uppercase and one number')
        .required()
        .messages({
            'string.min': 'Password must be at least 6 characters long.',
            'string.pattern.base': 'Password must contain at least one uppercase letter and one number.',
            'string.empty': 'Password is required.'
        }),
    mobileNumber: Joi
        .string()
        .required()
        .pattern(/^\d{10}$/, '10-digit mobile number') // Example: 10-digit number
        .messages({
            'string.pattern.base': 'Please enter a valid 10-digit mobile number.',
            'string.empty': 'Mobile number is required.'
        }),
});

export const userInfoFormValidator = Joi.object({
    personalInfo: Joi.object({
        fullName: Joi
            .string()
            .required()
            .pattern(/^[a-zA-Z\s]+$/, 'letters and spaces only')
            .min(3)
            .messages({
                'string.pattern.base': 'Full name can only contain letters and spaces.',
                'string.empty': 'Full name is required.',
                'string.min': 'Full name should have at least 3 characters.'
            }),
        dob: Joi
            .date()
            .required()
            .max('now') // Prevents future dates
            .messages({
                'date.max': 'Date of birth cannot be in the future.',
                'date.base': 'Please enter a valid date of birth.',
                'date.empty': 'Date of birth is required.'
            }),
        address: Joi
            .string()
            .required()
            .min(5)
            .messages({
                'string.min': 'Address should have at least 5 characters.',
                'string.empty': 'Address is required.'
            }),
        addressDuration: Joi
            .string() // Or .number() if you want to store it as a number of years/months
            .required()
            .messages({
                'string.empty': 'Address duration is required.'
            }),
        about: Joi
            .string()
            .allow('') // Allow empty "about" field
            .max(500) //Example max length
            .messages({
                'string.max': 'About section cannot exceed 500 characters.'
            })
    }).required(),
    financialInfo: Joi.object({
        employmentStatus: Joi
            .string()
            .required()
            .messages({
                'string.empty': 'Employment status is required.'
            }),
        savingsOrInvestments: Joi
            .string()
            .required()
            .messages({
                'string.empty': 'Savings/Investments info is required.'
            })
    }).required()
})