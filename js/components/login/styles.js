
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
    iosShadow: {
        flex: 1,
        width: (deviceWidth/4),
        height:  (deviceHeight/4),
        alignSelf: 'center',
        marginTop: (deviceHeight/5) ,
    },
    aShadow: {
        flex: 1,
        width:  (deviceWidth/4) + 2,
        height: (deviceHeight/4) + 2,
        padding: 20,
        alignSelf: 'center',
        marginTop: (deviceHeight/5) - 40,
    },
    iosInputGrp: {
        flexDirection: 'row',
        borderRadius: 25,
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginBottom: 20
    },
    inputGrp: {
        flexDirection: 'row',
        borderRadius: 25,
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginBottom: 20
    },
    iosInputIcon: {
        alignSelf: 'center',
        paddingLeft: 20
    },
    inputIcon: {
        alignSelf: 'center',
        marginLeft: 20
    },
    input: {
        paddingLeft: 15
    },
    background: {
        flex: 1,
        width: null,
        height:null,
        backgroundColor: primary,
    },
    bg: {
        flex: 1,
        marginTop: (deviceHeight/6) - 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 70
    },
    abg: {
        flex: 1,
        marginTop: (deviceHeight/6) - 35,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 70
    },
    loginBtn: {
        marginTop: 10,
        height: 50,
    },
    helpBtns: {
        opacity: 0.9,
        fontSize: 14,
        fontWeight: 'bold',
    },
    aOtherLinksContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    iosOtherLinksContainer: {
        flexDirection: 'row',
    },
});
