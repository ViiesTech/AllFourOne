import { StyleSheet } from "react-native";
import { responsiveHeight } from "../../../helper/responsive";

export const walletStyles = StyleSheet.create({
    container: {
    },
    main:{
        marginHorizontal: responsiveHeight(1)
    },
    tabContainerMain: {
        paddingTop: responsiveHeight(1),
      },
      tabContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
      },
      tab: {
        paddingVertical: 10,
        width: "45%",
        alignItems: "center",
      },
      activeTab: {
        borderBottomWidth: 3,
        borderBottomColor: "#F96F0D",
      },
      tabText: {
        fontSize: 18,
        color: "#fff",
      },
      activeTabText: {
        color: "#F96F0D",
        fontWeight: "bold",
      },
      content: {
        marginTop: responsiveHeight(2),
      },
      multipleCardsImg: {
        marginTop: responsiveHeight(2),
        width: '90%',
        height: responsiveHeight(36),
        resizeMode:'contain'
      },
      dotsContainer:{
        marginTop: responsiveHeight(5),
        marginBottom: responsiveHeight(2),
        flexDirection: 'row',
    },
    dotOne:{
        width: responsiveHeight(0.8),
        height: responsiveHeight(0.8),
        backgroundColor: '#0EA6C2',
        borderRadius: responsiveHeight(1),
    },
    dotTwo:{
        marginHorizontal: responsiveHeight(1),
        width: responsiveHeight(0.8),
        height: responsiveHeight(0.8),
        backgroundColor: '#b3b3b3',
        borderRadius: responsiveHeight(1),
    },
    dotThree:{
        width: responsiveHeight(0.8),
        height: responsiveHeight(0.8),
        backgroundColor: '#b3b3b3',
        borderRadius: responsiveHeight(1),
    },
    addCardContainer:{
        marginTop: responsiveHeight(2),
        marginHorizontal: responsiveHeight(2),
    },
    addCard:{
        borderWidth: 0.1,
        borderColor: '#b1b1b1',
        height: responsiveHeight(28),
        backgroundColor: '#181818',
        borderRadius: 20,
        padding: responsiveHeight(2.5),
    },
    addCardContentContainer:{
        flexDirection: 'row'
    },
    addCardText:{
        color: '#fff',
        fontSize: 20,
    },
    creditCardText:{
        fontSize: 16,
        color: '#F96F0D'
    },
    addCardTextContainer:{
        marginHorizontal: responsiveHeight(1.5)
    },
    inputContainer:{
        marginVertical: responsiveHeight(5)
    },
    input: {
        width: "100%",
        height: responsiveHeight(5),
        backgroundColor: "#000", // Background color
        color:'#F96F0D', // Text color
        borderRadius: 20,
        paddingHorizontal: responsiveHeight(1.5),
        marginBottom: responsiveHeight(3),
      },
});
