import { StyleSheet } from "react-native";
import { responsiveHeight } from "../../../helper/responsive";

export const RequestMoneyStyles = StyleSheet.create({
  container: {
    height: responsiveHeight(100),
  },
  card:{
    borderWidth: 1,
    borderColor: '#b1b1b1',
    height: responsiveHeight(100),
    borderRadius: 50,
    marginTop: responsiveHeight(3),
    },
    cardContent:{
    padding: responsiveHeight(3),
    },
    sendButtonContainer:{
        marginTop: responsiveHeight(6),
        justifyContent: 'center',
        alignItems:'center'
    },
    emailInputContainer:{
        marginVertical: responsiveHeight(2)
    },
    cardContentTwo: {
        padding: responsiveHeight(3),
        paddingTop:0,
        paddingBottom:0,
    }
});
