import { View, Text, ImageBackground, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import React, { useState } from 'react';
import AuthContainer from '../../components/AuthContainer';
import { BoldText, NormalText } from '../../components/TextStyles';
import  Colors  from '../../assets/colors/index';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../helper/responsive';
import images  from '../../assets/images/Index';
import MyIconButton from '../../components/MyIconButton';

const PaymentMethod = () => {
  const [activeCategory, setActiveCategory] = useState('Visa');
  const data = [
    {
      id: 1,
      image: images.visa,
      title: 'Visa',
    },
    {
      id: 2,
      image: images.paypal,
      title: 'Pay Pal',
    },
    {
      id: 3,
      image: images.americanExpress,
      title: 'American Express',
    },
    {
      id: 4,
      image: images.venmo,
      title: 'Venmo',
    },
    {
      id: 5,
      image: images.masterCard,
      title: 'Master Card',
    },
  ];
  return (
    <AuthContainer padding={responsiveHeight(2)}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ flex: 0.3, justifyContent: 'flex-end' }}>

          <BoldText title="Payment Methods" color={Colors.white} fontSize={3.5} fontWeight="700" />
        </View>
        <FlatList data={data} contentContainerStyle={{ marginTop: responsiveHeight(4), gap: responsiveHeight(3) }} renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setActiveCategory(item.title)} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: responsiveHeight(2), borderWidth: 2, borderColor: Colors.white, borderRadius: responsiveHeight(1) }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: responsiveHeight(2) }}>
              <Image source={item.image} style={{ height: 40, width: responsiveWidth(15) }} resizeMode="cover" />
              <NormalText title={item.title} color={Colors.white} />
            </View>
            <TouchableOpacity onPress={() => setActiveCategory(item.title)} style={{ borderWidth: 2, borderColor: Colors.white, borderRadius: responsiveHeight(2), width: responsiveWidth(7), height: responsiveHeight(3.5), alignItems: 'center', justifyContent: 'center' }}>
              {activeCategory === item.title && (
                <View style={{ height: responsiveHeight(1.4), width: responsiveWidth(2.5), borderRadius: responsiveHeight(2), backgroundColor: '#49A6C2' }} />
              )}
            </TouchableOpacity>
          </TouchableOpacity>
        )} />
        <MyIconButton buttonStyle={{ width: '100%', height: responsiveHeight(7) }} isShowMailIcon={false} label="Continue" />
      </ScrollView>
    </AuthContainer>
  );
};

export default PaymentMethod;
