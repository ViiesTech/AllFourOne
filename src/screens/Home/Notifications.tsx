/* eslint-disable react-native/no-inline-styles */
import { View, Text, ImageBackground, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import  images  from '../../assets/images/Index'
import SvgIcons from '../../components/SvgIcons';
import { menu } from '../../assets/icons';
import { BoldText, NormalText } from '../../components/TextStyles';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from '../../helper/responsive';
import  Colors  from '../../assets/colors/index';
import Header from '../../components/Header';

const Notifications = () => {
  const data = [
    {
      id: 1,
      name: 'Benjamin Poole',
      caption: 'Hi @tranmautritam, when you have time please take a look at the new designs I just made in Figma. 👋',
      date: 'Nov 2nd',
    },
    {
      id: 2,
      name: 'Katharine Wells',
      caption: 'Please make the presentation as soon as possible Tam. We’re still waiting for it. 🏀',
      date: 'Nov 2nd',
    },
    {
      id: 3,
      name: 'Bertha Ramos',
      caption: 'Are you actually working? I don’t see any new stuffs from you. Be creative!!! 🤯',
      date: 'Nov 2nd',
    },
    {
      id: 4,
      name: 'Marie Bowen',
      caption: 'Are you actually working? I don’t see any new stuffs from you. Be creative!!! 🤯',
      date: 'Nov 2nd',
    },

  ];
  return (
    <ImageBackground style={{ flex: 1, padding: responsiveHeight(2) }} source={images.bgImage}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        {/* <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ justifyContent: 'center', flex: 0.5 }}>
            <SvgIcons xml={menu} height={20} width={20} />
          </TouchableOpacity>
          <BoldText title="Notifications" fontSize={2.5} fontWeight="600" color="#fff" />
        </View> */}
        <Header title="Notification" flex={0.5} justify="center" />
        <FlatList contentContainerStyle={{ gap: responsiveHeight(2), marginTop: responsiveHeight(4) }} data={data} renderItem={({ item }) => (
          <View>
            <NormalText color={Colors.grey} fontSize={1.8} title={`${item.name} mentioned you in Unity Gaming`} />
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.black, borderWidth: 2, marginTop: responsiveHeight(1), borderColor: '#575455', borderRadius: responsiveHeight(1.5), padding: responsiveHeight(2) }}>
              <View style={{ flexDirection: 'row', gap: responsiveHeight(2) }}>
                <Image source={images.notification1} style={{ height: responsiveHeight(5), width: responsiveWidth(10) }} />
                <View>
                  <NormalText color={Colors.white} title={item.name} />
                  <NormalText fontSize={1.8} width={70} color={Colors.grey} title="Hi @tranmautritam, when you have time please take a look at the new designs I just made in Figma. 👋" />
                </View>
              </View>
              <View style={{ position: 'absolute', right: 10, paddingTop: responsiveHeight(2) }}>
                <NormalText color={Colors.white} fontSize={1.7} title="Nov 2nd" />
              </View>
            </TouchableOpacity>
          </View>
        )} />
      </ScrollView>
    </ImageBackground>
  );
};

export default Notifications;
