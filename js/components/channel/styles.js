
'use strict';

import { StyleSheet } from "react-native";
var React = require('react-native');
var { Dimensions } = React;

var deviceHeight = Dimensions.get('window').height;
module.exports = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
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
    aheaderIcon: {

    },
    iosheaderIcon: {
        paddingTop: 30,
    },
    newsContentWrap: {
        flexDirection: 'column',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: '#ddd'
    },
    newsContent: {
        paddingTop: 20,
        paddingBottom: 20
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
        height: (deviceHeight/4) + 10,
        width: null,
        position: 'relative'
    },
    ioschanelHeader: {
        fontSize: 20,
        fontWeight: '900',
        alignSelf: 'center',
        padding: 20,
        paddingTop: 30
    },
    achanelHeader: {
        fontSize: 20,
        fontWeight: '900',
        alignSelf: 'center',
        padding: 20,
        marginTop: 20,
        textAlign: 'center',
    },
    followBtn: {
        alignSelf: 'center',
        backgroundColor: '#fff',
    },
    noOfFollowers: {
        fontSize: 12,
        fontWeight: '900',
        alignSelf: 'center',
        textAlign: 'center',
        padding: 20,
        paddingTop: 10,
        marginTop: 10,
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
});

