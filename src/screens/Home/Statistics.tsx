import { View, Text, ImageBackground, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../helper/responsive'
import colors from '../../assets/colors';

const weekDays = [
  {
    id: 1,
    text: 'Mon',
  },
  {
    id: 2,
    text: 'Tue',
  },
  {
    id: 3,
    text: 'Wed',
  },
  {
    id: 4,
    text: 'Thu',
  },
  {
    id: 5,
    text: 'Fri',
  },
  {
    id: 1,
    text: 'Sat',
  },
  {
    id: 1,
    text: 'Sun',
  }
]

const Statistics = () => {
  const [chooseIncomeType, setChooseIncomeType] = useState('Income');
  const [weeekDay, setWeekDay] = useState(0);
  const [tabType, settabType] = useState("Week");
  return (
    <ImageBackground source={require('../../assets/images/homebg.png')} style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <Image source={require('../../assets/images/back.png')} style={{ height: responsiveHeight(2), width: responsiveHeight(2), resizeMode: 'contain' }} />
          <Text style={{ color: 'white', fontSize: responsiveFontSize(3), alignSelf: 'center', fontWeight: 'bold' }}>Statistics</Text>
          <View />
        </View>

        <View style={{ flexDirection: 'row', backgroundColor: '#181818', height: 50, width: responsiveWidth(90), borderRadius: 200 }}>
          <TouchableOpacity onPress={() => settabType("Week")}>
            {
              tabType == "Week" ?
                <ImageBackground source={require('../../assets/images/bgtabs.png')} style={{ height: 50, width: responsiveWidth(30), alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ color: "#FFFFFF" }}>Week</Text>
                </ImageBackground>
                :
                <View style={{ height: 50, width: responsiveWidth(30), alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ color: "#F96F0D" }}>Week</Text>
                </View>
            }
          </TouchableOpacity>

          <TouchableOpacity onPress={() => settabType("Month")}>
            {
              tabType == "Month" ?
                <ImageBackground source={require('../../assets/images/bgtabs.png')} style={{ height: 50, width: responsiveWidth(30), alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ color: "#FFFFFF" }}>Month</Text>
                </ImageBackground>
                :
                <View style={{ height: 50, width: responsiveWidth(30), alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ color: "#F96F0D" }}>Month</Text>
                </View>
            }

          </TouchableOpacity>

          <TouchableOpacity onPress={() => settabType("Year")}>
            {
              tabType == "Year" ?
                <ImageBackground source={require('../../assets/images/bgtabs.png')} style={{ height: 50, width: responsiveWidth(30), alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ color: "#FFFFFF" }}>Year</Text>
                </ImageBackground>
                :
                <View style={{ height: 50, width: responsiveWidth(30), alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ color: "#F96F0D" }}>Year</Text>
                </View>
            }
          </TouchableOpacity>
        </View>


        <Text style={{ color: "#F96F0D", alignSelf: 'center', marginTop: 20, fontSize: 25 }}>Total Spendings</Text>
        <Text style={{ color: "#FFFFFF", alignSelf: 'center', marginTop: 10, fontSize: 20, fontWeight: 'bold' }}>$3,660.00</Text>
      </View>

      <View style={{ height: responsiveHeight(100), width: responsiveWidth(100), backgroundColor: '#181818', borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
        <View style={{ flexDirection: 'row', gap: responsiveHeight(7), alignSelf: 'center', width: responsiveWidth(70), justifyContent: 'space-between', paddingTop: 20 }}>
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: responsiveWidth(30) }} onPress={() => setChooseIncomeType('Income')}>
            <View style={chooseIncomeType === 'Income' ? { borderBottomColor: colors.orange, borderBottomWidth: 2.5, paddingBottom: 5, width: '100%', alignItems: 'center' } : {}}>
              <Text style={{ color: chooseIncomeType === 'Income' ? '#FFFFFF' : colors.orange, fontSize: responsiveFontSize(2), textAlign: 'center' }}>Income</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: responsiveWidth(30) }} onPress={() => setChooseIncomeType('Outcome')}>
            <View style={chooseIncomeType === 'Outcome' ? { borderBottomColor: colors.orange, borderBottomWidth: 2.5, paddingBottom: 5, width: '100%', alignItems: 'center' } : {}}>
              <Text style={{ color: chooseIncomeType === 'Outcome' ? '#FFFFFF' : colors.orange, fontSize: responsiveFontSize(2), textAlign: 'center' }}>Outcome</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{padding: responsiveHeight(3),}}>
              <Text style={{color: colors.white,fontSize: responsiveFontSize(2.6)}}>Overview</Text>
              <ImageBackground  style={{alignItems: 'center', justifyContent: 'flex-end', position: 'relative'}} imageStyle={{
                height: responsiveHeight(40),
                width: responsiveWidth(95),

              }} source={images.statistics}>
                <View style={{bottom:responsiveHeight(-40)}}>
                <FlatList 
                  data={weekDays}
                  horizontal
                  contentContainerStyle={{gap:20}}
                  
                  renderItem={({item,index}) => {
                    console.log("item........", item)
                    return (
                            <TouchableOpacity onPress={() => setWeekDay(index)}>
                              <Text style={{color: index == weeekDay ? colors.orange : '#FFFFFF',fontSize: responsiveFontSize(2)}}>{item.text}</Text>
                            </TouchableOpacity>
                    )
                  }}  
                />
                </View>
                </ImageBackground>  
              </View>
      </View>

    </ImageBackground>
  )
}

export default Statistics