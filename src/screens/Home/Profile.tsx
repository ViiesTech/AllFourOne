import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { address, cards, edit, forward, message, notification, notificationSmall, payment, personal, settings } from '../../assets/icons'
import images  from '../../assets/images/Index'
import { responsiveHeight, responsiveWidth } from '../../helper/responsive'
import { NormalText } from '../../components/TextStyles'
import Colors  from '../../assets/colors/index'
import SvgIcons from '../../components/SvgIcon'
import ProfileList, { HR } from '../../components/ProfileList'

const Profile = () => {
  return (
    <ImageBackground style={{ flex: 1 }} source={images.bgImage}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, paddingBottom: responsiveHeight(2) }}>

        <View style={{ padding: responsiveHeight(2) }}>
          <Header title="Profile" isRightIcon rightIconName={notification} />
        </View>
        <View style={{ marginTop: responsiveHeight(4), flex: 1, borderStartWidth: 2, borderTopWidth: 2, borderEndWidth: 2, borderColor: '#343233', padding: responsiveHeight(2.5), borderTopRightRadius: responsiveHeight(4), borderTopLeftRadius: responsiveHeight(4) }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: responsiveHeight(2) }}>
              <Image source={images.profile} style={{ height: responsiveHeight(10), width: responsiveWidth(18) }} resizeMode="contain" />
              <View>
                <NormalText title="William Smith" color={Colors.white} />
                <NormalText title="william.smith@gmail.com" color={Colors.grey} />
              </View>
            </View>
            <TouchableOpacity style={{ backgroundColor: Colors.orange, borderRadius: responsiveHeight(2.5), height: responsiveHeight(5), width: responsiveWidth(10), justifyContent: 'center', alignItems: 'center' }}>
              <SvgIcons xml={edit} height={20} width={20} />
            </TouchableOpacity>
          </View>
          <View style={{ gap: responsiveHeight(2.5), marginTop: responsiveHeight(4) }}>
            <ProfileList icon1={personal} title="Personal Information" icon2={forward} />
            <HR />
            <ProfileList icon1={payment} title="Payment Preferences" icon2={forward} />
            <HR />

            <ProfileList icon1={cards} title="Banks and Cards" icon2={forward} />
            <HR />

            <ProfileList icon1={notificationSmall} title="Notifications" isRightIcon={false} icon2={forward} />
            <HR />

            <ProfileList icon1={message} title="Message Center" icon2={forward} />
            <HR />

            <ProfileList icon1={address} title="Address" icon2={forward} />
            <HR />

            <ProfileList icon1={settings} title="Settings" icon2={forward} />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Profile;
