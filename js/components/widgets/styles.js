
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
    logoHeader: {
        width: 20,
        height: 28,
        alignSelf: 'center'
    },
    aheaderIcon: {

    },
    iosheaderIcon: {
        paddingTop: 30,
    },
    overviewHeaderContainer: {
        padding: 30,
        paddingTop: 40,
        alignSelf: 'center',
        backgroundColor: primary,
        width: deviceWidth
    },
    iosoverviewHeader: {
        fontSize: 22,
        fontWeight: '700',
        alignSelf: 'center'
    },
    aoverviewHeader: {
        fontSize: 22,
        fontWeight: '700',
        paddingBottom: 10,
        alignSelf: 'center'
    },
    overviewHead: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 14,
        fontWeight: 'bold'
    },
    overviewInfoHeader: {
        alignSelf: 'flex-start',
        fontSize: 14,
        fontWeight: '900'
    },
    overviewInfoPerc: {
        alignSelf: 'flex-end',
        fontSize: 14,
        fontWeight: '900'
    },
    mainWidget: {
        height: (deviceHeight/2) - 70,
        width: null
    },
    otherWidget: {
        height: (deviceHeight/3) + 20,
        width: deviceWidth/2
    },
    weatherInfo: {
        fontWeight: '900',
        fontSize: 18
    },
    weatherTime: {
        fontSize: 10,
        fontWeight: '700',
        opacity: 0.8,
    },
    weatherInfoContainer: {
        flex: 9,
        padding: 20,
        marginTop: 100,
        alignItems: 'center'
    },
    detailsBtn: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: 'rgba(0,0,0,0.2)',
        alignSelf: 'center',
        marginTop: 80
    },
    iosratingPerc: {
        fontSize: 32,
        fontWeight: '800',
        lineHeight: 0,
        paddingTop: 10,
        paddingBottom:10
    },
    aratingPerc: {
        fontSize: 32,
        fontWeight: '800',
        paddingTop: 10,
        paddingBottom:10
    },
    ratingNum: {
        color: '#ccc',
        fontWeight: '800',
    },
    
    widgetName: {
        color: '#222',
        fontWeight: '700',
        fontSize: 12
    },
    mainWidgetContainer: {
        flex: 10,
        flexDirection: 'row',
        padding: 20,
    },
    aWeather: {
        fontSize: 80,
        paddingBottom: 70,
        fontWeight: '700',
        marginTop: - 15,
    },
    iosWeather: {
        fontSize: 120,
        lineHeight: 0,
        fontWeight: '700',
        marginTop: -20,
    },
    otherWidgetContainer: {
        flex: 2,
        padding: 20,
        paddingTop: 10,
    },
});

