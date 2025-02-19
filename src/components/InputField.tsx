import { StyleSheet, Text, TextInput, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import colors from '../assets/colors';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../helper/responsive';
import SVGXml from './SVGIcons';
import { cross, eyes } from '../assets/icons';

interface fieldProps {
  heading: string,
  value: string,
  inputContainer: ViewStyle;
  onChangeText: () => void,
  keyboardType: string,
  secureTextEntry: boolean;
  showIcon: boolean;
  placeholder: string;
  inputStyle: ViewStyle;
  leftIcon: boolean;
}

const InputField = (props: fieldProps) => {
  return (
    <View style={[styles.inputWrapper,props?.inputContainer]}>
      <Text style={styles.heading}>{props?.heading}</Text>
      <View style={styles.inputContainer}>
        {props?.leftIcon &&
            <SVGXml icon={props?.leftIcon} />
        }
        <TextInput  secureTextEntry={props?.secureTextEntry} value={props?.value} onChangeText={props?.onChangeText} placeholderTextColor={colors.white} placeholder={props?.placeholder} style={[styles.input,props?.inputStyle]} />
        {props?.showIcon &&
        <TouchableOpacity style={styles.crossView}>
        <SVGXml height={'10'} width={'10'} icon={props?.secureTextEntry ?  eyes : cross} />
        </TouchableOpacity>
        }
      </View>
    </View>
  )
}

export default InputField

const styles = StyleSheet.create({
  inputWrapper: {
  },
  heading: {
    color: colors.input_heading,
    fontSize: responsiveFontSize(2)
  },
  inputContainer: {
    marginTop: responsiveHeight(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: colors.white,
    borderBottomWidth: 0.8,
  },
  input: {
    width: responsiveWidth(80),
    color: colors.white,
    fontSize: responsiveFontSize(2),
    // fontWeight: 'bold',
  },
  crossView:{
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(2.5),
    width: responsiveHeight(2.5),
    borderRadius: 100,
  }
})