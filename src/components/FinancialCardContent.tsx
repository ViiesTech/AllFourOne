import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import PlusIcon from './PlusIcon';
import { responsiveHeight } from '../helper/responsive';

const data = [
  { id: '1', title: 'Add', image: 'icon' },
  { id: '2', title: 'Yamilet', image: require('../assets/images/cardimgOne.png') },
  { id: '3', title: 'Alexa', image: require('../assets/images/cardimgTwo.png') },
  { id: '4', title: 'Yakub', image: require('../assets/images/cardimgThree.png') },
  { id: '5', title: 'Krishna', image: require('../assets/images/cardimgFour.png') },
];

const FinancialCardContent = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={[styles.imageContainer, item.image === 'icon' ? { backgroundColor: '#F9700E'} : {}]}>
        {item.image === 'icon' ? <PlusIcon width={30} height={30} color="white" /> : <Image source={item.image} style={styles.image} />}
      </View>
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.list}
    />
  );
};

export default FinancialCardContent;

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row'
  },
  card: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    marginTop: responsiveHeight(2),
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  text: {
    marginTop: 5,
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
});
