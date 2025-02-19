import React from "react";
import { View, FlatList, Image, StyleSheet } from "react-native";
import sendImg from '../assets/images/SentIcon.png';
import paymentImg from '../assets/images/payment.png';
import receivedImg from '../assets/images/Received.png';
import staticsImg from '../assets/images/StatsIcon.png';
import { responsiveHeight } from "../helper/responsive";

const images = [
  { id: "1", uri: sendImg },
  { id: "2", uri: paymentImg },
  { id: "3", uri: receivedImg },
  { id: "4", uri: staticsImg },
];

const WalletLogoSlider = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image source={item.uri} style={styles.image} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: responsiveHeight(2),
    paddingHorizontal: responsiveHeight(2),
    marginHorizontal: responsiveHeight(1),
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
   width: responsiveHeight(8),
   height: responsiveHeight(8),
   resizeMode: 'contain',
    marginHorizontal: 10,
  },
});

export default WalletLogoSlider;
