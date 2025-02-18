import { StyleSheet } from "react-native";
import { responsiveHeight } from "../../../helper/responsive";

export const WelcomeStyles = StyleSheet.create({
    welcomeScreenContainer: {
        // flex: 1,
        height: responsiveHeight(100),
    },
    labelOneContainer: {
        position: 'absolute',
        top: 39,
        right: 80,
        zIndex: 999
    },
    personeOneContainer: {
        flex: 1,
        alignItems: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 50,
        position: 'relative',
    },
    labelTwoContainer: {
        position: 'absolute',
        top: 25,
        left: 61,
        zIndex: 999
    },
    personeTwoContainer: {
        paddingHorizontal: 2,
        paddingTop: responsiveHeight(3),
        position: 'relative'
    },
    labelThreeContainer: {
        position: 'absolute',
        top: 0,
        right: 14,
        zIndex: 999
    },
    personeThreeContainer: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: responsiveHeight(3),
        position: 'relative',
    },
    lastSection: {
        paddingHorizontal: responsiveHeight(3),
    },
    walletContainer: {
        paddingTop: responsiveHeight(20),
        marginLeft: -10,
    },
    welcomeTxt: {
        fontFamily: 'Poppins', 
        fontWeight: '700', 
        fontSize: 47.76, 
        lineHeight: 38, 
        letterSpacing: 0,
        paddingTop: responsiveHeight(3),
        color: '#fff'
    },
    allTxt: {
        fontFamily: 'Poppins', 
        fontWeight: '400', 
        fontSize: 29.72, 
        lineHeight: 38, 
        letterSpacing: 0,
        paddingTop: responsiveHeight(1),
        color: '#fff',
    },
    yourBestTxt: {
        fontFamily: 'Poppins', 
        fontWeight: '400',
        fontSize: 14, 
        lineHeight: 21, 
        paddingTop: responsiveHeight(1),
        letterSpacing: 0,
        color: '#F5F5F5'
    },
    getStartedButton:{
    marginTop: responsiveHeight(6)
    }
})