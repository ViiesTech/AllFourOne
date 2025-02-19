import React from 'react'
import { View } from 'react-native'
import WelcomeScreen from './src/screens/Home/WelcomeScreen';
import OnBoardingScreen from './src/screens/Home/OnBoardingScreen';
import EmailScreen from './src/screens/Home/EmailScreen';
import Home from './src/screens/Home/Home';
import TransactionHistory from './src/screens/Home/TransactionHistory';
import Signup from './src/screens/Home/Signup';
import Login from './src/screens/Home/Login';
import ForgetPassword from './src/screens/Home/ForgetPassword';
import CreatePassword from './src/screens/Home/CreatePassword';
import PasswordSuccessful from './src/screens/Home/PasswordSuccessful';
import OTP from './src/screens/Home/OTP';
import EditProfile from './src/screens/Home/EditProfile';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/Routes';

const App = () => {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>

    // <View style={{flex: 1}}>
    //   <WelcomeScreen />
    //   {/* <OnBoardingScreen /> */}
    //   {/* <EmailScreen /> */}
    //   {/* <Signup /> */}
    //   {/* <Login /> */}
    //   {/* <ForgetPassword /> */}
    //   {/* <CreatePassword /> */}
    //   {/* <PasswordSuccessful /> */}
    //   {/* <OTP /> */}
    //   {/* <EditProfile /> */}
    // </View>
  );
};

export default App;

//Auth done//
//faraz screens is also there//
//Kashif pending work//

//1. Sent Money
//2. Request Money
//3. Wallet
//4. Statistics
//5. FAQS
