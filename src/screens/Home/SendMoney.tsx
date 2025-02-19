import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { financialStyles } from '../Styles/Home/FinancialStyles';
import Header from '../../components/Header';
import FinancialBg from '../../assets/images/bgImage.png'
import SmartCardImg from '../../assets/images/CreditCard.png'
import PlusIcon from '../../components/PlusIcon';
import MyButton from '../../components/MyButton';
import FinancialCardContent from '../../components/FinancialCardContent';
import CurrencyCard from '../../components/CurrencyCard';

const SendMoney = ({navigation}:{navigation}) => {
  return (
    <ImageBackground source={FinancialBg} style={{width: '100%', height: '100%', backgroundColor: 'black'}}>
    <View style={financialStyles.container}>
      <Header title='Send Money' isRightIcon={true} />
      <View style={financialStyles.card}>
        <View style={financialStyles.smartCardContainer}>
        <Image source={SmartCardImg} style={financialStyles.smartCard} />
        </View>
      
      <View style={financialStyles.secondCardContainer}>
        <View style={financialStyles.secondCard}>
          <Text style={financialStyles.sendToText}>Send to</Text>
        <FinancialCardContent />
        </View>
      </View>

      <CurrencyCard textOne='Enter Your Amount' textTwo='Change Currency?' textThree='USD' textFour='36.00' />

    <View style={financialStyles.sendButtonContainer}>
      <MyButton  onPress={()=> navigation.navigate("RequestMoney")} label='Send' />
    </View>

      </View>
    </View>
    </ImageBackground>
  );
};

export default SendMoney;
