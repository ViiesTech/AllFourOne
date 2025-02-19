import { View, Text, ImageBackground, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../helper/responsive'

const TransactionHistory = () => {
  return (
        <ImageBackground source={require('../../assets/images/homebg.png')} style={{flex:1, padding:20}}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginBottom:20}}>
                <Image source={require('../../assets/images/back.png')} style={{height:responsiveHeight(2), width:responsiveHeight(2) , resizeMode:'contain'}}/>
      <Text style={{color:'white', fontSize:responsiveFontSize(3), alignSelf:'center', fontWeight:'bold' }}>Transaction History</Text>
      <View/>
            </View>

            <FlatList
                          data={[{id:1}, {id:2},{id:3}, {id:4},{id:5}, {id:6},{id:7}, {id:8}, ]}
                          renderItem={({item})=>{
                              return(
                                  <TouchableOpacity>
                                      <Image source={require('../../assets/images/bars.png')} style={{width:responsiveWidth(90),resizeMode:'contain', height:responsiveHeight(10), marginTop:10}}/>
                                  </TouchableOpacity>
                              )
                          }}
                          
                          />
    </ImageBackground>
  )
}

export default TransactionHistory