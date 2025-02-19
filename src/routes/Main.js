import { View, Text,TouchableOpacity, ImageBackground, Image } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from '../screens/Home/Login';
import WelcomeScreen from '../screens/Home/WelcomeScreen'
import Signup from '../screens/Home/Signup';
import OTP from '../screens/Home/OTP';
import ForgetPassword from '../screens/Home/ForgetPassword';
import EmailScreen from '../screens/Home/EmailScreen';
import PasswordSuccessful from '../screens/Home/PasswordSuccessful';
import CreatePassword from '../screens/Home/CreatePassword';
import Home from '../screens/Home/Home';
import Profile from '../screens/Home/Profile';
import Settings from '../screens/Home/Settings';
import PrivacyPolicy from '../screens/Home/PrivacyPolicy';
import TransactionHistory from '../screens/Home/TransactionHistory';
import Notifications from '../screens/Home/Notifications';
import PaymentMethod from '../screens/Home/PaymentMethod';
import { responsiveWidth } from '../helper/responsive';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const Main = () => {
  return(
    <Tab.Navigator
    tabBar={(props) => <CustomBottomTab {...props} />}
    screenOptions={{headerShown:false, }}>
    <Tab.Screen name="Home" component={AppStacks} />
    <Tab.Screen name="PaymentMethod" component={PaymentMethod} />
    <Tab.Screen name="Profile" component={Profile} />
    <Tab.Screen name="Statictis" component={TransactionHistory} />

  </Tab.Navigator>
  )
}

const AppStacks = () => {
  return (
    <Stack.Navigator initialRouteName='Home'  screenOptions={{headerShown:false}}>
    <Stack.Screen name="Home" component={Home} />

    <Stack.Screen name="Settings" component={Settings} />
    <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
    <Stack.Screen name="TransactionHistory" component={TransactionHistory} />
    <Stack.Screen name="Notifications" component={Notifications} />
    {/* <Stack.Screen name="PasswordSuccessful" component={PasswordSuccessful} /> */}
  </Stack.Navigator>
  )
}



const CustomBottomTab = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ flexDirection: 'row', height: 60, backgroundColor: '#242424', elevation: 5 , borderTopRightRadius:20, borderTopLeftRadius:20, alignItems:'center', justifyContent:'space-between', paddingHorizontal:20, position: 'absolute', zIndex:10, bottom:0, width:responsiveWidth(100)}}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : route.name;

        const isFocused = state.index === index;
        const iconName = {
          Home: 'home-outline',
          PaymentMethod: 'card-outline',
          Profile: 'person-outline',
          Statistics: 'stats-chart-outline',
        }[route.name] || 'help-circle-outline';

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            
          >
            {/* <Icon name={iconName} size={24} color={isFocused ? 'white' : 'gray'} /> */}
            {
              label == "Home" ?
              <Image source={require('../assets/images/home.png')} style={{height:30, width:30, resizeMode:'contain'}}/>
              : label == "PaymentMethod" ?
              <Image source={require('../assets/images/Cards.png')} style={{height:30, width:30, resizeMode:'contain'}}/>
              : label == "Profile" ?
              <Image source={require('../assets/images/pro.png')} style={{height:30, width:30, resizeMode:'contain'}}/>
              :label == "Statictis" ?
              <Image source={require('../assets/images/Statistic.png')} style={{height:30, width:30, resizeMode:'contain'}} />
              :
              null
            }
            
          </TouchableOpacity>
        );
      })}
    </View>
  );
};


export default Main