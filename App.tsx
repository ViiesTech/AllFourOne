import React from 'react'
import { View } from 'react-native'
import WelcomeScreen from './src/screens/Home/WelcomeScreen';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <WelcomeScreen />
    </View>
  );
};

export default App;
