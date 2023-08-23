import React, { useEffect } from "react";
import {View} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

const AuthStack = () => {
  
  const [isFirstLaunch, setFirstLauch] = React.useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
        setFirstLauch(true);
      } else {
        setFirstLauch(false);
      }
    }); // Add some error handling, also you can simply do setFirstLauch(null)
  
  }, []);

  let routeName;
  if (isFirstLaunch === null) {
    return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
  } else if (isFirstLaunch == true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName={routeName}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{header: () => null}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{header: () => null}} />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={({navigation}) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#f9fafd',
              shadowColor: '#f9fafd',
              elevation: 0, // for android
            },
            headerLeft: () => (
              <View style={{marginLeft: 10}}>
                <FontAwesome.Button 
                  name="long-arrow-left"
                  size={25}
                  backgroundColor="#f9fafd"
                  color="#333"
                  onPress={() => navigation.navigate('Login')}
                />
              </View>
            ),
          })}
      />
      </Stack.Navigator>
    //</NavigationContainer>
  );
};

export default AuthStack;
