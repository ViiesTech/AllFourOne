import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthContainer from '../../components/AuthContainer'
import AuthHeading from '../../components/AuthHeading'
import InputField from '../../components/InputField'
import { responsiveHeight } from '../../helper/responsive'
import MyIconButton from '../../components/MyIconButton'

const Signup = () => {
  return (
    <AuthContainer>
      <AuthHeading halfDesc='signup' showDesc text='Sign Up' />
      <View style={styles.subContainer}>
        <InputField placeholder='hello@kijijihub.com' inputContainer={{ marginBottom: responsiveHeight(4) }} heading='YOUR NAME' />
        <InputField  placeholder='**********' secureTextEntry showIcon heading='YOUR PASSWORD' />
        <MyIconButton label='Sign Up' buttonStyle={{ alignSelf: 'center', marginTop: responsiveHeight(4) }} />
      </View>
    </AuthContainer>
  )
}

export default Signup

const styles = StyleSheet.create({
  subContainer: {
    padding: responsiveHeight(3),
    paddingTop: responsiveHeight(6)
  }
})