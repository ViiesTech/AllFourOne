import { View, Text,TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Home from '../screens/Home/Home';
import Profile from '../screens/Home/Profile';
import Settings from '../screens/Home/Settings';
import PrivacyPolicy from '../screens/Home/PrivacyPolicy';
import TransactionHistory from '../screens/Home/TransactionHistory';
import Notifications from '../screens/Home/Notifications';
import PaymentMethod from '../screens/Home/PaymentMethod';
import { responsiveHeight, responsiveWidth } from '../helper/responsive';
import SendMoney from '../screens/Home/SendMoney';
import Statistics from '../screens/Home/Statistics';
import RequestMoney from '../screens/Home/RequestMoney';
import LinearGradient from 'react-native-linear-gradient';
import Wallet from '../screens/Home/Wallet';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



const TabStack = () => {
  return(
    <Tab.Navigator
    tabBar={(props) => <CustomBottomTab {...props} />}
    screenOptions={{headerShown:false, }}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="PaymentMethod" component={SendMoney} />
    <Tab.Screen name="Profile" component={Profile} />
    <Tab.Screen name="Statictis" component={Statistics} />

  </Tab.Navigator>
  )
}

const StackStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home'  screenOptions={{headerShown:false}}>
    <Stack.Screen name="Home" component={TabStack} />
    <Stack.Screen name="Settings" component={Settings} />
    <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
    <Stack.Screen name="TransactionHistory" component={TransactionHistory} />
    <Stack.Screen name="Notifications" component={Notifications} />
    <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
    <Stack.Screen name="RequestMoney" component={RequestMoney} />
    {/* <Stack.Screen name="MyDrawer" component={MyDrawer} /> */}

  </Stack.Navigator>
  )
}


function Main() {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <CustomDrawer {...props} />}
     screenOptions={{headerShown: false}}
     >
      <Drawer.Screen name="Homes" component={StackStack} />
      <Drawer.Screen name="TabStack" component={TabStack} />
      <Stack.Screen name="TransactionHistory" component={TransactionHistory} />
      <Stack.Screen name="Wallet" component={Wallet} />
    </Drawer.Navigator>
  );
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




const CustomDrawer = ({ navigation }) => {
  return (
    <View >
    <ImageBackground source={require('../assets/images/drawerbg.png')} style={{ height: responsiveHeight(100)  , padding:20}}>

      {/* Profile Section */}
      <View style={{  marginBottom: 30 }}>
        <Image
          source={require('../assets/images/profile.png')}
          style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 10 }}
        />
        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>William Smith</Text>
        <Text style={{ color: '#F5F5F5', fontSize: 14, fontWeight: 'bold' }}>william.smith@gmail.com</Text>
      </View>

      {/* Navigation Buttons */}
      <TouchableOpacity onPress={() => navigation.navigate('Wallet')} style={styles.button}>
        <Image source={require('../assets/images/redicon/walletred.png')} style={{height:responsiveHeight(4), width:responsiveHeight(4), resizeMode:'contain'}}/>
          <Text style={styles.buttonText}>My Wallet</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('TabStack',{screen : 'Profile'})} style={styles.button}>
      <Image source={require('../assets/images/redicon/profilered.png')} style={{height:responsiveHeight(4), width:responsiveHeight(4), resizeMode:'contain'}}/>
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => navigation.navigate('TabStack',{screen : 'Statictis'})} style={styles.button}>
      <Image source={require('../assets/images/redicon/staticred.png')} style={{height:responsiveHeight(4), width:responsiveHeight(4), resizeMode:'contain'}}/>
        <Text style={styles.buttonText}>Statistics</Text>
      </TouchableOpacity>



      <TouchableOpacity onPress={() => navigation.navigate('TransactionHistory')} style={styles.button}>
      <Image source={require('../assets/images/redicon/transferred.png')} style={{height:responsiveHeight(4), width:responsiveHeight(4), resizeMode:'contain'}}/>
        <Text style={styles.buttonText}>Transfer</Text>
      </TouchableOpacity>

      <TouchableOpacity  style={styles.button}>
      <Image source={require('../assets/images/redicon/settingred.png')} style={{height:responsiveHeight(4), width:responsiveHeight(4), resizeMode:'contain'}}/>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => navigation.navigate("Auth")} style={{marginTop:20}} >
        <LinearGradient colors={[ "#F96F0D","#C60E0E"]}  style={{height:responsiveHeight(7), width:responsiveWidth(60), alignSelf:'center', borderRadius:2000, alignItems:'center', justifyContent:'center'}}>

        <Text style={[styles.buttonText, { color: 'white' }]}>Logout</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ImageBackground>
    </View>
  );
};

const styles = {
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 10,
    flexDirection:'row',
    alignItems:'center',
    gap:15
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
};


export default Main