import { ImageBackground, ScrollView, View } from 'react-native';
import React from 'react';
import  images  from '../../assets/images/Index';
import { responsiveHeight } from '../../helper/responsive';
import Header from '../../components/Header';
import { NormalText } from '../../components/TextStyles';
import { Colors } from '../../assets/Utils/Colors';

const PrivacyPolicy = () => {
  return (
    <ImageBackground source={images.bgImage} style={{ flex: 1, }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, paddingBottom: responsiveHeight(2) }}>
        <View style={{ padding: responsiveHeight(2) }}>

          <Header title="Privacy Policy" flex={0.5} justify="center" />
        </View>

        <View style={{ flex: 1, gap: responsiveHeight(2), marginTop: responsiveHeight(2), opacity: 0.7, borderTopRightRadius: responsiveHeight(4), borderTopLeftRadius: responsiveHeight(4), padding: responsiveHeight(2), backgroundColor: '#411027' }}>
          <NormalText alignSelf="center" fontWeight="400" color={'#93878B'} title="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu" />
          <NormalText alignSelf="center" fontWeight="400" color={'#93878B'} title="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." />
          <NormalText alignSelf="center" fontWeight="400" color={'#93878B'} title="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />
          <NormalText alignSelf="center" fontWeight="400" color={'#93878B'} title="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />
          <NormalText alignSelf="center" fontWeight="400" color={'#93878B'} title="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form" />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default PrivacyPolicy;
