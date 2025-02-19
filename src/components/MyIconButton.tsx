import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle,  } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { responsiveHeight } from '../helper/responsive';
import MailIcon from '../assets/icons/MailIcon';

interface MyIconButtonProps {
    label: string;
    isShowMailIcon?: boolean;
    buttonStyle: ViewStyle;
    onPress: ()=> void
}

const MyIconButton: React.FC<MyIconButtonProps> = ({label, isShowMailIcon,buttonStyle, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <LinearGradient start={{x: 0, y: 2}} end={{x: 1, y: 1}} colors={['#F96F0D', '#F96F0D', '#C60E0E']} style={[styles.linearGradient,buttonStyle]}>
       <View style={isShowMailIcon ? {flexDirection: 'row', alignItems: 'center'} : {}}>
        {isShowMailIcon && (
            <MailIcon width={20} height={20} color="white" />
        )}
    <Text style={styles.buttonText}>
      {label}
    </Text>
        </View>
  </LinearGradient>
    </TouchableOpacity>
  )
}

export default MyIconButton;

const styles = StyleSheet.create({
    linearGradient: {
    width: 300,
    paddingLeft: responsiveHeight(1),
    paddingRight: responsiveHeight(1),
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
    },
    buttonText: {
      fontSize: 14,
      textAlign: 'center',
      margin: responsiveHeight(1.6),
      marginLeft: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
  });