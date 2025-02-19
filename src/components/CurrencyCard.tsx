import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { financialStyles } from '../screens/Styles/Home/FinancialStyles'

interface currencyProp{
    textOne: string,
    textTwo: string,
    textThree: string,
    textFour: string,
}

const CurrencyCard : React.FC<currencyProp> = ({textOne, textTwo, textThree, textFour}) => {
  return (
    <View style={financialStyles.secondCardContainer}>
            <View style={financialStyles.secondCard}>
              <View style={financialStyles.secondCardTextContainer}>
                <Text style={financialStyles.amountTxt}>{textOne}</Text>
                <TouchableOpacity>
                <Text style={financialStyles.currencyTxt}>{textTwo}</Text>
                </TouchableOpacity>
              </View>
              <View style={financialStyles.usdTxtContainer}>
              <Text style={financialStyles.usdTxt}>{textThree}</Text>
              <Text style={financialStyles.usdRupeeTxt}>{textFour}</Text>
              </View>
            </View>
          </View>
  )
}

export default CurrencyCard