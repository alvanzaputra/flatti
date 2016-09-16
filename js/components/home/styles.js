
'use strict';

import { StyleSheet } from "react-native";
var React = require('react-native');
var { Dimensions } = React;

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;
module.exports = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
    },
    profileInfo: {
        alignSelf: 'center',
        paddingTop: 5,
        paddingBottom: 10
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
    },
    newsImage: {
        width: 100, 
        height: 130
    },
    newsContent: {
        flexDirection: 'column',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: '#ddd'
    },
    newsHeader: {
        color: '#444',
        fontWeight: 'bold'
    },
    newsLink: {
        color: '#666',
        fontSize: 12,
        alignSelf: 'flex-start',
        fontWeight: 'bold'
    },
    newsTypeView: {
        borderBottomWidth: 1,
        borderBottomColor: '#666',
        alignSelf: 'flex-end'
    },
    newsTypeText: {
        color: '#666',
        fontSize: 12,
        fontWeight: 'bold',
        paddingBottom: 5
    },
    newsPoster: {
        height: (deviceHeight/2) + 10,
        width: null,
        position: 'relative'
    },
    newsPosterHeader: {
        fontWeight: '900',
    },
    newsPosterContent: {
        marginTop: (deviceHeight/3) - 20,
        flexDirection: 'column',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1,
    },
    newsPosterLink: {
        opacity: 0.8,
        fontSize: 12,
        alignSelf: 'flex-start',
        fontWeight: 'bold'
    },
    newsPosterTypeView: {
        borderBottomWidth: 1,
        borderBottomColor: '#666',
        alignSelf: 'flex-end',
    },
    newsPosterTypeText: {
        opacity: 0.8,
        fontSize: 12,
        fontWeight: 'bold',
        paddingBottom: 5,
    },
    iostimeIcon: {
        fontSize: 20,
        paddingLeft: 20,
        paddingRight: 10,
        marginTop: 5,
        color: '#666',
    },
    atimeIcon: {
        fontSize: 20,
        marginLeft: 15,
        paddingRight: 10,
        marginTop: -2,
        color: '#666',
    },
    iosHeadertimeIcon: {
        fontSize: 20,
        paddingLeft: 20,
        paddingRight: 10,
        marginTop: 5,
        color: '#fff',
    },
    aHeadertimeIcon: {
        fontSize: 20,
        marginLeft: 15,
        paddingRight: 10,
        marginTop: -2,
        color: '#fff',
    },
    slide: {
        flex: 1,
        width: null,
        backgroundColor: 'transparent'
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        flex: 1
    },
    swiperSlide: {
        height: (deviceHeight/2),
        width: null,
        position: 'relative'
    },
    swiperTextContent: {
        // marginBottom: 170,
        marginTop: deviceHeight/4 + 20,
        width: deviceWidth,
        padding: 20
    },
    swiperDot: {
        backgroundColor:'rgba(0,0,0,.8)', 
        width: 8, 
        height: 8,
        borderRadius: 4, 
        marginLeft: 3, 
        marginRight: 3, 
        marginTop: 3, 
        marginBottom: 0,
    },
    swiperActiveDot: {
        backgroundColor: '#fff', 
        width: 8, 
        height: 8, 
        borderRadius: 4, 
        marginLeft: 3, 
        marginRight: 3, 
        marginTop: 3, 
        marginBottom: 0,
    },
    swiperContentBox: {
        paddingTop: 20,
        paddingBottom: 20,
    },
});