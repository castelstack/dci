import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const AdminContext = createContext({
    adminActive: false,

    adminInfo: undefined,

    isLoggedIn: { status: false, value: undefined }
});

export const AdminProvider = ({ children }) => {
    const [adminActive, setAdminActive] = useState(false);

    const [isLoggedIn, setLoggedIn] = useState({
        status: false,
        value: undefined
    });

    const [adminInfo, setAdminInfo] = useState({
    name: "<name>",

    email: "<email>"
    });

    // api call with axios in useEffect hook
    useEffect(() => {
        const URL = "https://jln-api.herokuapp.com"

        // const URL = "http://127.0.0.1:5000/"
        console.log(isLoggedIn);
        if (isLoggedIn.status === true) {
            axios
            .get(`${URL}/api/v1/admins/${isLoggedIn.value}`, { withCredentials: true })
            .then((res) => {  
                if (res.data.status === "SUCCESS") {
                    console.log(res.data);
                    setAdminActive(true);
                    setAdminInfo({ name: res.data.admin.name, email: res.data.admin.email });
                }
            })
            .catch((err) => {
                (err.response) ?
                    console.log(err.response.data) :
                    console.log(err)
            });
        }
        
    }, [isLoggedIn]);

    return (
    <AdminContext.Provider
        value={{ adminActive, setAdminActive, adminInfo, setAdminInfo, isLoggedIn, setLoggedIn }}
    >
        {children}
    </AdminContext.Provider>
    );
};
