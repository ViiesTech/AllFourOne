import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import WelcomeScreenLabel from '../../components/WelcomeScreenLabel';
import { WelcomeStyles } from '../Styles/Home/WelcomeStyles';
import PersoneOne from '../../assets/images/personeOne.png';
import PersoneTwo from '../../assets/images/personeTwo.png';
import PersoneThree from '../../assets/images/personeThree.png';
import Wallet from '../../assets/images/wallet.png';
import MyButton from '../../components/MyButton';
import LinearGradient from 'react-native-linear-gradient';

const WelcomeScreen = ({navigation}:{navigation}) => {
  return (
    <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} locations={[0,0.5,2]} colors={['#000000', '#36353E', '#FE0879']} style={WelcomeStyles.welcomeScreenContainer}>
    <View style={WelcomeStyles.welcomeScreenContainer}>
        <View>
        <View style={WelcomeStyles.personeOneContainer}>
            <View style={WelcomeStyles.labelOneContainer}>
                 <WelcomeScreenLabel label='Send' title='$29.00' />
            </View>
            <Image source={PersoneOne} width={66} height={66} />
        </View>

        <View style={WelcomeStyles.personeTwoContainer}>
            <View style={WelcomeStyles.labelTwoContainer}>
                 <WelcomeScreenLabel label='Received' title='$46.70' />
            </View>
            <Image source={PersoneTwo} width={66} height={66} />
        </View>

        <View style={WelcomeStyles.personeThreeContainer}>
            <View style={WelcomeStyles.labelThreeContainer}>
                 <WelcomeScreenLabel label='Send' title='$29.00' />
            </View>
            <Image source={PersoneThree} width={66} height={66} />
        </View>

        <View style={WelcomeStyles.lastSection}>
        <View style={WelcomeStyles.walletContainer}>
            <Image source={Wallet} width={66} height={66} />
        </View>

        <View>
            <Text style={WelcomeStyles.welcomeTxt}>Welcome to</Text>
            <Text style={WelcomeStyles.allTxt}>All Four One, LLC.</Text>
            <Text style={WelcomeStyles.yourBestTxt}>Your Best Money Transfer Partner.</Text>
        </View>

            <View style={WelcomeStyles.getStartedButton}>
                <MyButton  onPress={()=> navigation.navigate("Login")}  label='Get Started' />
            </View>
       
        </View>
        </View>
    </View>
    </LinearGradient>
  );
};

export default WelcomeScreen;
