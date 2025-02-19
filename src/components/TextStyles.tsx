/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React from 'react';
import { responsiveFontSize, responsiveWidth } from '../helper/responsive';

interface TextProps {
  title: string,
  fontWeight?: string,
  fontSize?: number,
  color?: string,
  width?: number,
  txtAlign?:string,
  alignSelf?:string,
  mrgnTop?:number
}
export const BoldText: React.FC<TextProps> = ({ title, fontWeight, fontSize, color, width,txtAlign,alignSelf,mrgnTop }) => {
  return (
    <View>
      <Text style={{ fontWeight: fontWeight ? fontWeight : '500',textAlign:txtAlign,alignSelf:alignSelf,marginTop:mrgnTop, fontSize: fontSize ? responsiveFontSize(fontSize) : responsiveFontSize(2), color: color, width: responsiveWidth(width) }}>{title}</Text>
    </View>
  );
};
export const NormalText: React.FC<TextProps> = ({ title, fontWeight, fontSize, color, width,txtAlign,alignSelf,mrgnTop }) => {
  return (
    <View>
      <Text style={{ fontWeight: fontWeight ? fontWeight : '500',textAlign:txtAlign,alignSelf:alignSelf,marginTop:mrgnTop, fontSize: fontSize ? responsiveFontSize(fontSize) : responsiveFontSize(2), color: color, width: responsiveWidth(width) }}>{title}</Text>
    </View>
  );
};


