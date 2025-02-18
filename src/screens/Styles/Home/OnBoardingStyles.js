import { StyleSheet } from "react-native";
import { responsiveHeight } from "../../../helper/responsive";

export const onBoardingStyles = StyleSheet.create({
    onBoardingContainer: {
        height: responsiveHeight(100),
    },
    playImg:{
        width: responsiveHeight(50),
        height: responsiveHeight(50),
    },
    easyTxtContainer:{
        marginVertical: responsiveHeight(4),
        marginHorizontal: responsiveHeight(6),
    },
    easyTxt: {
        fontFamily: 'Poppins-SemiBold', // Ensure the correct font name based on your setup
        fontSize: 40,
        lineHeight: 48,
        letterSpacing: 0,
    },
    dotsContainer:{
        marginVertical: responsiveHeight(2),
        flexDirection: 'row',
    },
    dotOne:{
        width: responsiveHeight(1),
        height: responsiveHeight(1),
        backgroundColor: '#F96F0D',
        borderRadius: responsiveHeight(1),
    },
    dotTwo:{
        marginHorizontal: responsiveHeight(1),
        width: responsiveHeight(1),
        height: responsiveHeight(1),
        backgroundColor: '#b3b3b3',
        borderRadius: responsiveHeight(1),
    },
    dotThree:{
        width: responsiveHeight(1),
        height: responsiveHeight(1),
        backgroundColor: '#b3b3b3',
        borderRadius: responsiveHeight(1),
    },
    continueButtonContainer:{
        marginVertical: responsiveHeight(3),
    },
    socialButtons:{
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    footerTxt:{
        fontFamily: 'Poppins-Regular', // Ensure the correct font file is available
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0,
        textAlign: 'center',
        color: '#82858C',
        marginHorizontal: responsiveHeight(1),
        marginVertical: responsiveHeight(2),
    }
});