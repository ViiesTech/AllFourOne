import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import ImgBg from '../../assets/images/bgImage.png'
import WalletHeader from '../../components/WalletHeader';
import { walletStyles } from '../Styles/Home/Wallet';
import MultiCard from '../../assets/images/MultipleCards.png';
import WalletLogoSlider from '../../components/WalletLogoSlider';
import PlusIcon from '../../components/PlusIcon';

const Wallet = () => {
    const [activeTab, setActiveTab] = useState<Boolean>("Cards");
  return (
    <ImageBackground source={ImgBg} style={{width: '100%', height: '100%', backgroundColor: 'black'}}>
    <ScrollView style={{flex: 1}}>
    <View style={walletStyles.container}>
        <WalletHeader  title='Wallet' isRightIcon={true} />
        <View style={walletStyles.main}>
      <View style={walletStyles.tabContainerMain}>
      {/* Tabs */}
      <View style={walletStyles.tabContainer}>
        <TouchableOpacity
          style={[walletStyles.tab, activeTab === "Cards" && walletStyles.activeTab]}
          onPress={() => setActiveTab("Cards")}
        >
          <Text style={[walletStyles.tabText, activeTab === "Cards" && walletStyles.activeTabText]}>Cards</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[walletStyles.tab, activeTab === "Account" && walletStyles.activeTab]}
          onPress={() => setActiveTab("Account")}
        >
          <Text style={[walletStyles.tabText, activeTab === "Account" && walletStyles.activeTabText]}>Account</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={walletStyles.content}>

        {/* for tabs section  */}

        {/* {activeTab === "Cards" ? (
          <Text style={{color: 'white'}}>Content for Tab 1</Text>
        ) : (
          <Text style={{color: 'white'}}>Content for Tab 2</Text>
        )} */}

        <View style={{alignItems: 'center'}}>
            <Image source={MultiCard} style={walletStyles.multipleCardsImg} />

             <View style={walletStyles.dotsContainer}>
                            <View style={walletStyles.dotOne} />
                            <View style={walletStyles.dotTwo} />
                            <View style={walletStyles.dotThree} />
                </View>
        </View>

        <View>
            <WalletLogoSlider />
        </View>

        <View style={walletStyles.addCardContainer}>
            <View style={walletStyles.addCard}>
                <View style={walletStyles.addCardContentContainer}>
                    <PlusIcon width={25} height={25} color="#b3b3b3" />
                    <View style={walletStyles.addCardTextContainer}>
                    <Text style={walletStyles.addCardText}>Add Card</Text>
                    <Text style={walletStyles.creditCardText}>Add your debit/credit card</Text>
                    </View>
                             
                </View>
                <View style={walletStyles.inputContainer}>
                <TextInput
                    style={walletStyles.input}
                    placeholder="Enter first text"
                    placeholderTextColor="#F96F0D" // Placeholder text color
                />

                <TextInput
                    style={walletStyles.input}
                    placeholder="Enter second text"
                    placeholderTextColor="#F96F0D" // Placeholder text color
                />
                </View>
            </View>
        </View>

      </View>
    </View>
        </View>
    </View>
    </ScrollView>
    </ImageBackground>
  );
};

export default Wallet;