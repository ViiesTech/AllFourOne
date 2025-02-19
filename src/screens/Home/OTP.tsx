import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AuthContainer from '../../components/AuthContainer'
import AuthHeading from '../../components/AuthHeading'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../helper/responsive';
import MyIconButton from '../../components/MyIconButton';
import colors from '../../assets/colors';
import CodeInput from '../../components/CodeInput';

const OTP = ({navigation}:{navigation}) => {
  const [otpCode,setOtpCode] = useState<string>(null)

  return (
    <AuthContainer>
      <AuthHeading descStyle={{ alignSelf: 'center' }} headingStyle={{ alignSelf: 'center', width: responsiveWidth(25) }} longDesc='Please enter the code we sent you to email' text='Verify' />
      <View style={styles.subContainer}>
        <CodeInput value={otpCode?.toString()} setValue={setOtpCode} />
              <Text style={[styles.heading,{marginTop: responsiveHeight(3)}]}>{`Didn't Recieve the code ?`}</Text>
              <Text style={[styles.heading,{color: colors.white,fontWeight: 'bold',marginBottom: responsiveHeight(4)}]}>{`Resend Code`}</Text>
            <MyIconButton onPress={()=> navigation.navigate("CreatePassword")} label={'Verify'} />
      </View>
    </AuthContainer>
  )
};

export default OTP;

const styles = StyleSheet.create({
  subContainer:{
    alignItems: 'center',
    paddingTop: responsiveHeight(3),
  },
  heading:{
    color: colors.text_color2,
    fontSize: responsiveFontSize(2)
  }
})