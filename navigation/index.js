import React from "react";
import Routes from "./Routes";
import { AuthProvider } from "./AuthProvider";

const Providers = ({... prob}) => {
    return(
        <AuthProvider>
            <Routes/>
        </AuthProvider>
    );
};

export default Providers;