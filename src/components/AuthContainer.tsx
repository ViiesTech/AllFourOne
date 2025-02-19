import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import images from '../assets/images/Index';

interface authContainerProps {
  children: ReactNode;
}

const AuthContainer = (props: authContainerProps) => {
  return (
      <ImageBackground style={{flex: 1}} source={images.auth_bg}>
        {props?.children}
      </ImageBackground>
  )
}

export default AuthContainer

const styles = StyleSheet.create({})