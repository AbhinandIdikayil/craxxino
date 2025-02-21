import axios, { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import React, { useContext } from 'react';

interface ErrorResponse {
    message: string;
}

export const AXIOS_INSTANCE = axios.create({
    baseURL: process.env.SERVER,
    withCredentials: true,
});

export const GlobalErrorContext = React.createContext<(error: string) => void>(() => { });

AXIOS_INSTANCE.interceptors.request.use((request: InternalAxiosRequestConfig) => {
    return request;
});

AXIOS_INSTANCE.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    async (error: AxiosError<ErrorResponse>) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & {
            _retry?: boolean;
            _retryCount?: number;
        };

        if (!originalRequest) {
            return Promise.reject(error);
        }

        const setError = useContext(GlobalErrorContext);

        if (error.response?.status === 401) {
            setError("Unauthorized. Please log in again.");
        } else if (error.response?.status === 403) {
            setError("Forbidden. You don't have permission to access this resource.");
        } else if (error.response?.data?.message) {
            setError(error.response.data.message); 
        } else if (error.message === 'Network Error') {
            setError('A network error occurred. Please check your internet connection and try again.');
        }
        else {
            setError("An unexpected error occurred. Please try again later.");
        }

        return Promise.reject(error); 
    }
);
