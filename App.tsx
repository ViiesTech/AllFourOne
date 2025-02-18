import React from 'react'
import { View } from 'react-native'
import WelcomeScreen from './src/screens/Home/WelcomeScreen';
import OnBoardingScreen from './src/screens/Home/OnBoardingScreen';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <WelcomeScreen /> */}
      <OnBoardingScreen />
    </View>
  );
};

export default App;
