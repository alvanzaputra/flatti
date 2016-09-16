
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
    background: {
        flex: 1,
        width: null,
        height:null,
    },
    slides: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: primary,
        height: deviceHeight
    },
    iosText: {
        fontSize: 16,
        lineHeight: 0,
        padding: 60,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    aText: {
        fontSize: 16,
        padding: 40,
        margin: 40,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    iospaginationText: {
        position: 'relative',
        top: -(deviceHeight/7),
        fontSize: 20,
        lineHeight: 0,
        fontWeight: 'bold',
    },
    apaginationText: {
        // position: 'relative',
        top: -(deviceHeight/9),
        fontSize: 20,
        padding: 20,
        textAlign: 'center',
        // lineHeight: 0,
        fontWeight: 'bold',
    },
    swiperDot: {
        backgroundColor:'rgba(0,0,0,.2)', 
        width: 50, 
        height: 1, 
        marginLeft: 3, 
        marginRight: 3, 
        marginTop: 3, 
        marginBottom: 20,
    },
    swiperActiveDot: {
        backgroundColor: '#fff', 
        width: 50, 
        height: 1, 
        marginLeft: 3, 
        marginRight: 3, 
        marginTop: 3, 
        marginBottom: 20,
    },
    imageIcons: {
        fontSize: 120,
    },
    Button: {
        alignSelf: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    iosButton: {

    },
});