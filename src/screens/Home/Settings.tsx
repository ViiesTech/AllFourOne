/* eslint-disable react-native/no-inline-styles */
import { ImageBackground, ScrollView, Switch, View } from 'react-native';
import React, { useState } from 'react';
import images  from '../../assets/images/Index';
import { forwardOrange, notification } from '../../assets/icons';
import Header from '../../components/Header';
import { responsiveHeight } from '../../helper/responsive';
import { NormalText } from '../../components/TextStyles';
import  Colors  from '../../assets/colors/index';
import ProfileList, { HR } from '../../components/ProfileList';

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <ImageBackground style={{ flex: 1 }} source={images.bgImage}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, paddingBottom: responsiveHeight(2) }}>

        <View style={{ padding: responsiveHeight(2) }}>
          <Header title="Settings" isRightIcon rightIconName={notification} />
        </View>
        <View style={{ marginTop: responsiveHeight(4), flex: 1, borderStartWidth: 2, borderTopWidth: 2, borderEndWidth: 2, borderColor: '#343233', padding: responsiveHeight(2.5), borderTopRightRadius: responsiveHeight(4), borderTopLeftRadius: responsiveHeight(4) }}>
          <NormalText title="General" color={'#5E6272'} />
          <View style={{ gap: responsiveHeight(2), marginTop: responsiveHeight(4) }}>

            <ProfileList title="Language" isLanguage isLeftIcon={false} icon2={forwardOrange} />
            <HR />
            <ProfileList title="My Profile" isLeftIcon={false} icon2={forwardOrange} />
            <HR />
            <ProfileList title="Contact Us" isLeftIcon={false} icon2={forwardOrange} />
            <HR />
            <NormalText mrgnTop={responsiveHeight(2)} title="Security" color={'#5E6272'} />

          </View>
          <View style={{ gap: responsiveHeight(2), marginTop: responsiveHeight(4) }}>

            <ProfileList title="Change Password" isLeftIcon={false} icon2={forwardOrange} />
            <HR />
            <ProfileList title="Privacy Policy" isLeftIcon={false} icon2={forwardOrange} />
            <HR />
            <NormalText title="Choose what data you share with us" color={'#5E6272'} />

          </View>

          <View style={{ marginTop: responsiveHeight(3), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <NormalText title="Biometric" color={Colors.white} />
            <Switch
              trackColor={{ false: Colors.orange, true: '#81b0ff' }}
              thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />

          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Settings;
