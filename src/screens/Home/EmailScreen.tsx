import { StyleSheet,  View } from 'react-native'
import React from 'react'
import AuthContainer from '../../components/AuthContainer'
import AuthHeading from '../../components/AuthHeading'
import { responsiveHeight } from '../../helper/responsive'
import InputField from '../../components/InputField'
import MyIconButton from '../../components/MyIconButton'

const EmailScreen = ({navigation}:{navigation}) => {
  return (
    <AuthContainer>
            <AuthHeading text={`What's your email${'\n'}address?`} />
            <View style={styles.subContainer}>
                <InputField placeholder='hello@kijijihub.com' showIcon heading='YOUR EMAIL' />
               <MyIconButton onPress={()=> navigation.navigate("OTP")} isShowMailIcon label={'Continue With Email'}  buttonStyle={{marginTop: responsiveHeight(4),alignSelf: 'center'}} />
            </View>
    </AuthContainer>
  )
}

export default EmailScreen

const styles = StyleSheet.create({
  subContainer:{
    padding: responsiveHeight(3),
    paddingTop: responsiveHeight(4)
  }
})