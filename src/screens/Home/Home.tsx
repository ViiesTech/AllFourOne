import { View, Text, ImageBackground, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../helper/responsive'

const Home = () => {
  return (
    <ImageBackground source={require('../../assets/images/homebg.png')} style={{flex:1, backgroundColor:"black"}}>
        <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding:20}}>
            <Image source={require('../../assets/images/personeOne.png')} style={{height:30, width:30, resizeMode:'contain'}}/>
            <Image source={require('../../assets/images/noti.png')} style={{height:20, width:20, resizeMode:'contain'}}/>
        </View>
        
        <View style={{height:responsiveHeight(20)}}>

        </View>
        <View style={{position:'absolute', zIndex:20, alignSelf:'center', marginTop:150}}>
        <Image source={require('../../assets/images/Balance.png')} style={{height:200, width:200, resizeMode:'contain', alignSelf:'center'}}/>
        </View>

        <ImageBackground source={require('../../assets/images/Frame.png')} style={{height:responsiveHeight(100), width: responsiveWidth(100),}} resizeMode='cover'>
                <Image source={require('../../assets/images/plus.png')} style={{alignSelf:'flex-end', height:50, width:50, marginTop:20, marginRight:5}}/>

                    <View style={{ flex:1, marginTop:70, padding:20}}>

                <Text style={{color:'white', fontSize:responsiveFontSize(2), fontWeight:'bold'}}>My transaction</Text>

                    <View >
                    <FlatList
                    data={[{id:1}, {id:2},{id:3}, {id:4} ]}

                    renderItem={({item})=>{
                        return(
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/bars.png')} style={{width:responsiveWidth(90),resizeMode:'contain', height:responsiveHeight(10), marginTop:10}}/>
                            </TouchableOpacity>
                        )
                    }}
                    
                    />
                    </View>
                    </View>
        </ImageBackground>
        </ScrollView>
    </ImageBackground>
  )
}

export default Home