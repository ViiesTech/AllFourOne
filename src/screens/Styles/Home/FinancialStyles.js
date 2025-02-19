import { StyleSheet } from "react-native";
import { responsiveHeight } from "../../../helper/responsive";

export const financialStyles = StyleSheet.create({
    container: {
        height: responsiveHeight(100),
    },
    card:{
        borderWidth: 1,
        borderColor: '#b1b1b1',
        height: responsiveHeight(100),
        borderRadius: 50
    },
    smartCardContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsiveHeight(4)
    },
    smartCard: {
        width: '90%',
        height: responsiveHeight(30),
        borderRadius: 20,
    },
    secondCardContainer:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    secondCard:{
        width: '90%',
        height: responsiveHeight(16),
        backgroundColor: '#181818',
        marginTop: responsiveHeight(3),
        borderRadius: 20,
        paddingTop: responsiveHeight(1),
        paddingHorizontal: responsiveHeight(1.5)
    },
    sendToText:{
        marginTop: responsiveHeight(0.5),
        color: '#f5f5f5',
    },
    sendButtonContainer:{
        marginTop: responsiveHeight(3),
        justifyContent: 'center',
        alignItems:'center'
    },
    secondCardTextContainer:{
        marginHorizontal: responsiveHeight(1),
        marginVertical: responsiveHeight(3),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    usdTxtContainer: {
        flexDirection: 'row',
        marginHorizontal: responsiveHeight(1),
    },
    amountTxt:{
        color: '#707070',
    },
    currencyTxt:{
        color: '#F96F0D'
    },
    usdTxt:{
        color: '#F5F5F5',
        fontSize: 25
    },
    usdRupeeTxt:{
        marginHorizontal: responsiveHeight(1),
        color: '#fff',
        fontSize: 25
    },
});