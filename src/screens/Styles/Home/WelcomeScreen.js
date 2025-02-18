import { StyleSheet } from "react-native";

export const WelcomeStyles = StyleSheet.create({
    welcomeScreenContainer: {
        flex: 1,
        backgroundColor: '#587909',
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
        paddingTop: 30,
        position: 'relative'
    },
    labelThreeContainer: {
        position: 'absolute',
        top: 0,
        right: 90,
        zIndex: 999
    },
    personeThreeContainer: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 30,
        position: 'relative',
    },
    lastSection: {
        paddingHorizontal: 30,
    },
    walletContainer: {
        paddingTop: 70,
        marginLeft: -10,
    },
    welcomeTxt: {},
    allTxt: {},
    yourBestTxt: {},
})