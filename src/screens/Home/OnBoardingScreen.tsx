import React from 'react'
import { View, Text, Image } from 'react-native'
import { onBoardingStyles } from '../Styles/Home/OnBoardingStyles'
import PlayImg from '../../assets/images/play.png';
import MyIconButton from '../../components/MyIconButton';
import SocialButton from '../../components/SocialButton';

const OnBoardingScreen = () => {
  return (
        <View style={onBoardingStyles.onBoardingContainer}>
            <View>
                <Image source={PlayImg} style={onBoardingStyles.playImg} />
            </View>

            <View style={onBoardingStyles.easyTxtContainer}>
                <View>
                <Text style={onBoardingStyles.easyTxt}>Easy, Fast</Text>
                <Text style={onBoardingStyles.easyTxt}>& Trusted</Text>
                </View>

            <View style={onBoardingStyles.dotsContainer}>
                <View style={onBoardingStyles.dotOne} />
                <View style={onBoardingStyles.dotTwo} />
                <View style={onBoardingStyles.dotThree} />
            </View>

            <View style={onBoardingStyles.continueButtonContainer}>
                <MyIconButton label='Continue With Email' />
            </View>

            <View style={onBoardingStyles.socialButtons}>
                <SocialButton />
                <SocialButton />
            </View>

            <View>
                <Text style={onBoardingStyles.footerTxt}>By continuing you agree Kijiji Hub’s Terms of Services & Privacy Policy </Text>
            </View>
            </View>
        </View>
  );
};

export default OnBoardingScreen;