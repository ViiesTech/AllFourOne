import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Home/Login';
import WelcomeScreen from '../screens/Home/WelcomeScreen'
import Signup from '../screens/Home/Signup';
import OTP from '../screens/Home/OTP';
import ForgetPassword from '../screens/Home/ForgetPassword';
import EmailScreen from '../screens/Home/EmailScreen';
import PasswordSuccessful from '../screens/Home/PasswordSuccessful';
import CreatePassword from '../screens/Home/CreatePassword';
const Stack = createStackNavigator();


const Auth = () => {
  return (
    <Stack.Navigator initialRouteName='WelcomeScreen'  screenOptions={{headerShown:false}}>
    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="EmailScreen" component={EmailScreen} />
    <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
    <Stack.Screen name="OTP" component={OTP} />
    <Stack.Screen name="CreatePassword" component={CreatePassword} />
    <Stack.Screen name="PasswordSuccessful" component={PasswordSuccessful} />
  </Stack.Navigator>
  )
}

export default Auth