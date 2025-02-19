import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../helper/responsive'
import colors from '../assets/colors'

interface headingProps {
  text: string;
  showDesc: boolean;
  halfDesc: string;
  headingStyle: ViewStyle,
  longDesc: string;
  descStyle: ViewStyle;
}

const AuthHeading = (props: headingProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.heading, props?.headingStyle]}>{props?.text}</Text>
      {props?.longDesc ?
        <Text style={[styles.desc,props?.descStyle]}>
          {props?.longDesc}
        </Text>
        : props?.showDesc &&
        <Text style={styles.desc}>Using <Text style={{ color: colors.white, fontWeight: 'bold', textDecorationLine: 'underline' }}>hijijikub.com</Text> to {props?.halfDesc}</Text>
      }
    </View>
  )
}

export default AuthHeading;

const styles = StyleSheet.create({
  container: {
    padding: responsiveHeight(3),
    paddingTop: responsiveHeight(13),
  },
  heading: {
    color: colors.white,
    fontSize: responsiveFontSize(4),
    width: responsiveWidth(60),
    fontWeight: 'bold',
  },
  desc: {
    color: colors.input_heading,
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(2),
  }
})