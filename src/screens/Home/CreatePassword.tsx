import { StyleSheet, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from '../../helper/responsive'
import AuthContainer from '../../components/AuthContainer'
import AuthHeading from '../../components/AuthHeading'
import InputField from '../../components/InputField'
import MyIconButton from '../../components/MyIconButton'

const CreatePassword = ({navigation}:{navigation}) => {
  return (
    <AuthContainer>
      <AuthHeading  showDesc={false} text='Create a New Password' />
      <View style={styles.subContainer}>
        <InputField secureTextEntry inputContainer={{marginBottom: responsiveWidth(6)}} showIcon placeholder='********' heading='NEW PASSWORD' />
        <InputField secureTextEntry showIcon placeholder='********' heading='CONFIRM NEW PASSWORD' />
        <MyIconButton onPress={()=> navigation.navigate("Login")} label='Next' buttonStyle={{ alignSelf: 'center', marginTop: responsiveHeight(4) }} />
      </View>
    </AuthContainer>
  )
}

export default CreatePassword;

const styles = StyleSheet.create({
  subContainer: {
    padding: responsiveHeight(3),
    paddingTop: responsiveHeight(6)
  },
})