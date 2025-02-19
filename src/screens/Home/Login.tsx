import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AuthContainer from '../../components/AuthContainer'
import InputField from '../../components/InputField'
import MyIconButton from '../../components/MyIconButton'
import AuthHeading from '../../components/AuthHeading'
import { responsiveHeight } from '../../helper/responsive'
import colors from '../../assets/colors'

const Login = ({navigation}:{navigation}) => {
  return (
    <AuthContainer>
      <AuthHeading halfDesc='login' showDesc text='Log In' />
      <View style={styles.subContainer}>
        <InputField placeholder='Stuart Rachel' inputContainer={{ marginBottom: responsiveHeight(4) }} heading='YOUR NAME' />
        <InputField placeholder='*******' secureTextEntry showIcon heading='YOUR PASSWORD' />
        <TouchableOpacity onPress={()=> navigation.navigate("ForgetPassword")} style={styles.forgotPasswordContainer}>
            <Text style={styles.text}>FORGOT PASSWORD</Text>
        </TouchableOpacity>
        <MyIconButton  onPress={()=> navigation.navigate("Main")}  label='Log In' buttonStyle={{ alignSelf: 'center', marginTop: responsiveHeight(4) }} />
      </View>
    </AuthContainer>
  )
}

export default Login

const styles = StyleSheet.create({
    subContainer: {
      padding: responsiveHeight(3),
      paddingTop: responsiveHeight(6)
    },
    text:{
      color: colors.text_color,
      marginTop: responsiveHeight(1),
    }
})