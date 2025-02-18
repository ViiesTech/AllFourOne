import React from 'react'
import { StyleSheet, Text, TouchableOpacity,  } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { responsiveHeight } from '../helper/responsive';

interface MyButtonProps {
    label: string;
}

const MyButton: React.FC<MyButtonProps> = ({label}) => {
  return (
    <TouchableOpacity>
    <LinearGradient start={{x: 0, y: 2}} end={{x: 1, y: 1}} colors={['#F96F0D', '#F96F0D', '#C60E0E']} style={styles.linearGradient}>
    <Text style={styles.buttonText}>
      {label}
    </Text>
  </LinearGradient>
    </TouchableOpacity>
  )
}

export default MyButton;

const styles = StyleSheet.create({
    linearGradient: {
    width: 200,
    paddingLeft: responsiveHeight(1),
    paddingRight: responsiveHeight(1),
    borderRadius: 40,
    },
    buttonText: {
      fontSize: 18,
      textAlign: 'center',
      margin: responsiveHeight(1.6),
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
  });