import React, { createContext, useState } from 'react';
import { getTokenCookie } from '../services/AuthService.service';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(getTokenCookie('access_token'));
    const [refreshToken, setRefreshToken] = useState(getTokenCookie('refresh_token'));
    const [isLoading, setIsloading] = useState(true);

    return (
        <AuthContext.Provider value={{ accessToken, refreshToken, isLoading, setAccessToken, setRefreshToken, setIsloading }}>
            {children}
        </AuthContext.Provider>
    );
};