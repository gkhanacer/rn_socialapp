import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { auth } from "@react-native-firebase/auth";

import { AuthContext, AuthProvider } from "./AuthProvider";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

const Routes = () => {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
	const {user, setUser} = useContext(AuthContext)
    // const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) {
		alert('firebase error');
		// TODO: use loader here
		return null;
	}

	return (
		<NavigationContainer>
			{ user ? <AppStack/> : <AuthStack />}
		</NavigationContainer>
	);
    
};

export default Routes;
