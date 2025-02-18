import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { responsiveHeight } from '../helper/responsive';

interface SocialButtonProps {
    iconType: string;
}


const SocialButton: React.FC<SocialButtonProps> = () => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text>1</Text>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
    buttonContainer: {
        borderWidth: 1,
        borderColor: '#82858C',
        width: 130,
        height: responsiveHeight(7),
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }
});