import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { responsiveHeight } from '../helper/responsive';
import ProfileIcon from './ProfileIcon';
import EmailIcon from './EmailIcon';

interface RequestMoneySimpleInputProp{
    iconType: string;
    placeholderText: string;
    inputLabel: string;
}

const RequestMoneySimpleInput : React.FC<RequestMoneySimpleInputProp> = ({
    iconType,
    placeholderText,
    inputLabel,
}) => {
  return (
    <View>
      <Text style={styles.label}>{inputLabel}</Text>
      <View style={styles.inputContainer}>
      <View style={styles.icon}>
        {
            iconType === 'email' ? <EmailIcon size={20} color="#F96F0D" /> : <ProfileIcon size={20} color="#F96F0D" />  
        }
      
      </View>
      <TextInput 
        style={styles.input} 
        placeholder={placeholderText} 
        placeholderTextColor="#fff"
      />
    </View>
    </View>
  );
};

export default RequestMoneySimpleInput;

const styles = StyleSheet.create({
    label:{
        color: '#807F98',
        padding: responsiveHeight(0.5),
        paddingBottom: 0,
        paddingLeft: 0,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#F4F4F4',
        padding: responsiveHeight(0.5),
        paddingBottom: responsiveHeight(0.2),
        paddingTop: 0,
        paddingLeft: 0,
      },
      icon: {
        marginRight: 10,
        color: '#ccc',
      },
      input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
      },
});