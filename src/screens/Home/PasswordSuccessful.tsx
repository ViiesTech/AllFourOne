import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthContainer from '../../components/AuthContainer'
import images from '../../assets/images/Index'
import { responsiveHeight, responsiveWidth } from '../../helper/responsive'

const PasswordSuccessful = () => {
  return (
      <AuthContainer>
        <View style={styles.subContainer}>
            <Image style={styles.imageStyle} source={images.password_success} />
        </View>
      </AuthContainer>
  )
}

export default PasswordSuccessful

const styles = StyleSheet.create({
  subContainer:{
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  imageStyle:{
    height: responsiveHeight(50),
    borderRadius: 80,
    width: responsiveHeight(42)
  }
})