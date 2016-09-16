
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
    bgHead: {
        backgroundColor: primary,
        padding: 20
    },
    logoHeader: {
        width: 20,
        height: 28,
        alignSelf: 'center',
    },
    aheaderIcon: {

    },
    na :{},
    iosheaderIcon: {
        paddingTop: 30,
    },
    ioschannelBtn1: {
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.5)',
    },
    achannelBtn1: {
        borderWidth: 1,
        borderColor: '#ddd',
    },
    channelBtn2: {
        alignSelf: 'center',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20
    },
    channelBtnText: {
        fontSize: 12,
        fontWeight: '900',
        marginTop: -5
    },
    channelImg: {
        height: (deviceHeight/4) + 10,
        width: (deviceWidth/2),
    },
    ioschannelImgText: {
        fontSize: 12,
        fontWeight: '900',
        padding: 20,
        paddingLeft: 0,
        paddingBottom: 0,
        marginBottom: 0,
        marginLeft: 20,
        marginTop: (deviceHeight/6) + 10, 
    },
    achannelImgText: {
        fontSize: 12,
        fontWeight: '900',
        marginLeft: 20,
        marginTop: (deviceHeight/4) - 20, 
    },
});