import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {RequestMoneyStyles} from '../Styles/Home/RequestMoney';
import FinancialBg from '../../assets/images/bgImage.png';
import Header from '../../components/Header';
import RequestMoneySimpleInput from '../../components/RequestMoneySimpleInput';
import CurrencyCard from '../../components/CurrencyCard';
import MyButton from '../../components/MyButton';
import MonthlyDueInput from '../../components/MonthlyDueInput';

const RequestMoney = ({navigation}:{navigation}) => {
  return (
    <ImageBackground
      source={FinancialBg}
      style={{width: '100%', height: '100%', backgroundColor: 'black'}}>
      <View style={RequestMoneyStyles.container}>
        <Header title='Request Money' isRightIcon={true} />
        <View style={RequestMoneyStyles.card}>
            <View style={RequestMoneyStyles.cardContent}>
            <RequestMoneySimpleInput inputLabel='Player Name' iconType='profile' placeholderText='Tanya Myroniuk' />
            <View style={RequestMoneyStyles.emailInputContainer}>
            <RequestMoneySimpleInput inputLabel='Email Address' iconType='email' placeholderText='Tanya Myroniuk@gmail.com' />
            </View>
            <RequestMoneySimpleInput inputLabel='Description' iconType='profile' placeholderText='Tanya Myroniuk' />
            </View>

            <View style={RequestMoneyStyles.cardContentTwo}>
                <Text style={{color: 'white'}}>Monthly Due By</Text>

                <View>
                    <MonthlyDueInput />
                </View>
            </View>
            
            <View>
            <CurrencyCard textOne='Enter Your Amount' textTwo='Change Currency?' textThree='USD' textFour='26.00.00' />
            </View>

            <View style={RequestMoneyStyles.sendButtonContainer}>
                <MyButton onPress={()=> navigation.navigate("Home")} label='Send' />
            </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default RequestMoney;
