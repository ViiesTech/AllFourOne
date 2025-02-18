import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import CheckmarkIcon from './CheckMarkIcon';
import LinearGradient from 'react-native-linear-gradient';
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
              <LinearGradient start={{x: 0, y: 2}} end={{x: 1, y: 1.5}} colors={['#F96F0D', '#F96F0D', '#C60E0E']} style={styles.linearGradient}>
            <CheckmarkIcon />
            </LinearGradient>
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
      paddingHorizontal: 12,
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
    linearGradient:{
      width: 30,
      height: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      marginRight: 4
    }
  });

export default WelcomeScreenLabel;
