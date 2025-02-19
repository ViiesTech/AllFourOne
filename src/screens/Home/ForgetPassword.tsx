import { StyleSheet, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from '../../helper/responsive'
import AuthContainer from '../../components/AuthContainer'
import AuthHeading from '../../components/AuthHeading'
import InputField from '../../components/InputField'
import MyIconButton from '../../components/MyIconButton'

const ForgetPassword = ({navigation}:{navigation}) => {
  return (
    <AuthContainer>
      <AuthHeading longDesc={`Where would you like to receive a
Verification Code ?`} headingStyle={{ width: responsiveWidth(100) }} text='Forget Password' />
      <View style={styles.subContainer}>
        <InputField showIcon placeholder='hello@kijijijihub.com' heading='YOUR EMAIL' />
        <MyIconButton onPress={()=> navigation.navigate("OTP")} label='Next' buttonStyle={{ alignSelf: 'center', marginTop: responsiveHeight(4) }} />
      </View>
    </AuthContainer>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({
  subContainer: {
    padding: responsiveHeight(3),
    paddingTop: responsiveHeight(6)
  },
})