import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
// import  {  SvgUri } from 'react-native-svg';

// Define the props interface correctly
interface WcProp {
    title: string;
    label: string;
}

const WelcomeScreenLabel: React.FC<WcProp> = ({ title, label }) => {
  return (
    <View style={styles.container}>
        <View style={styles.mainContainer}>
            {/* <View style={{backgroundColor: 'white'}}>
            <SvgUri width={20} height={20} uri={require('../assets/images/CorrectImg.svg')} />
                    </View> */}
            <View>
                <Text style={styles.title}>{label}</Text>
                <Text style={styles.label}>{title}</Text>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      paddingVertical: 10,
      paddingHorizontal: 18,
      backgroundColor: 'rgba(38, 42, 52, 1)',
      borderRadius: 40,
      width: 150,
    },
    mainContainer:{
        flexDirection:'row'
    },
    title: {
      color: '#f6f6f6',
      fontFamily: 'Poppins', // Ensure the font is correctly linked
      fontWeight: '700', 
      fontSize: 12,
      lineHeight: 12.27,
      letterSpacing: 0,
    },
    label: {
      fontSize: 12,
      color: '#b3b3b3',
      fontFamily: 'Poppins',
    },
  });

export default WelcomeScreenLabel;
