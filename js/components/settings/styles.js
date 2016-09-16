
'use strict';

var React = require('react-native');
var primary = require('../../themes/variable').brandPrimary;
var { StyleSheet, Dimensions } = React;

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;
module.exports = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
    },
    bg: {
        backgroundColor: primary,
    },
    aheaderIcon: {

    },
    iosheaderIcon: {
        paddingTop: 30,
    },
    logoHeader: {
        width: 20,
        height: 28,
        alignSelf: 'center',
        marginTop: 5,
    },
    mb20: {
        marginBottom: 20,
    },
    signupContainer: {
        marginTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
    },
    roundedButton: {
        alignSelf: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius:30,
        width: 60,
        height:60
    },
    signupHeader: {
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        padding: 5
    },
    switchText: {
        color: '#222',
        fontWeight: 'bold', 
        paddingTop: 10,
        paddingBottom: 10,
        alignSelf: 'flex-start'
    },
    aswitchText: {
        color: '#222',
        fontWeight: 'bold', 
        paddingTop: 10,
        paddingBottom: 10
    },
    switchContainer: {
        alignSelf: 'flex-end'
    },
    aswitchContainer: {
        // alignSelf: 'flex-end'
    },
    switch: {
        transform: [{scaleX: 0.75}, {scaleY: 0.75}],
        alignSelf: 'flex-end',
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: -5
    },
    aswitch: {
        transform: [{scaleX: 0.75}, {scaleY: 0.75}],
        alignSelf: 'flex-end',
        marginTop: -3
    },
    iosInputGrp: {
        flexDirection: 'row',
        borderRadius: 25,
        backgroundColor: 'rgba(0,0,0,0.2)',
        marginBottom: 20,
        borderWidth: 0, 
        paddingLeft: 15,
    },
    inputGrp: {
        flexDirection: 'row',
        borderRadius: 25,
        backgroundColor: 'rgba(0,0,0,0.2)',
        marginBottom: 20,
        borderWidth: 0, 
        paddingLeft: 15,
    },
    iosInputIcon: {
        alignSelf: 'center',
        paddingLeft: 20,
    },
    inputIcon: {
        alignSelf: 'center',
        marginLeft: 20
    },
    input: {
        paddingLeft: 15
    },
    notificationSwitchContainer: {
        backgroundColor: '#fff', 
        padding: 20
    },
    notificationHeader: {
        color: primary,
        fontWeight: 'bold',
        paddingBottom: 20
    },
    aProfilePic: {
        width: 60, 
        height: 60,
        borderRadius: 60,
    },
    iosProfilePic: {
        width: 60, 
        height: 60,
        borderRadius: 30,
    },
});