import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext(); // Create a context object

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            axios.get("http://localhost:3000/api/auth/me")
                .then(response => setUser(response.data))
                .catch((error)=>{
                    console.log(error)
                    localStorage.removeItem('token')
                })
        }
    }, []);
    const login = async (formData) => {
        const response = await axios.post("http://localhost:3000/api/auth/login", formData);
        localStorage.setItem("token", response.data.token);
        setUser(response.data.user);
    };
    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}