
'use strict';

import { StyleSheet } from "react-native";
var React = require('react-native');
var { Dimensions } = React;
var primary = require('../../themes/variable').brandPrimary;
var deviceHeight = Dimensions.get('window').height;
module.exports = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: primary
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
        marginTop: 5
    },
    feedbackContainer: {
        marginTop: 30,
        paddingLeft: 20,
        paddingRight: 20
    },
    roundedButton: {
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius:30,
        width: 60,
        height:60
    },
    roundedCustomButton: {
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius:30,
        width: 60,
        height:60
    },

    iosInputGrp: {
        flexDirection: 'row',
        borderRadius: 25,
        backgroundColor: 'rgba(0,0,0,0.2)',
        marginBottom: 20,
        borderWidth: 0, 
        paddingLeft: 25,
       
    },
    inputGrp: {
        flexDirection: 'row',
        borderRadius: 25,
        backgroundColor: 'rgba(0,0,0,0.2)',
        marginBottom: 20,
        borderWidth: 0, 
        paddingLeft: 25,
    },
    input: {
        paddingLeft: 15
    },
    feedbackHeaderContainer: {
        padding: 20,
        paddingTop: 30,
        alignSelf: 'center',
        backgroundColor: 'transparent'

    },
    feedbackHeader: {
        fontSize: 22,
        paddingBottom: 10,
        fontWeight: '600',
        alignSelf: 'center'
    },
    feedbackHead: {
        opacity: 0.8,
        fontSize: 13,
        fontWeight: 'bold'
    },
    ContentIconsContainer: {
        paddingTop: 30,
        paddingLeft: 50,
        paddingRight: 50,
    },
    afeedbackInputBox : {
        borderBottomWidth: 1,
        borderBottomColor: '#797979',
    },
    iosfeedbackInputBox : {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.5)',
    },
    inputBox: {
        alignSelf: 'flex-start',
    },
    inputBoxIcon: {
        alignSelf: 'flex-end',
    },
    forwardIcon: {
        alignSelf: 'flex-end',
        paddingBottom: 5,
    },
});
