
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
    profileInfoContainer: {
        backgroundColor: primary,
        paddingTop: 10
    },
    aheaderIcon: {

    },
    iosheaderIcon: {
        paddingTop: 30,
    },
    profileUser: {
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom:5
    },
    profileUserInfo: {
        alignSelf: 'center',
        opacity: 0.8,
        fontWeight: 'bold'
    },
    profilePic: {
        width: 80, 
        height: 80,
        borderRadius: 40
    },
    profileInfo: {
        alignSelf: 'center',
        paddingTop: 5,
        paddingBottom: 10
    },
    linkTabs: {
        backgroundColor: '#fff'
    },
    linkTabs_header: {
        padding: 15,
        alignSelf: 'center'
    },
    alinkTabs_tabCounts: {
        fontSize: 22,
        fontWeight: 'bold',
        color: primary,
        alignSelf: 'center',
        paddingBottom:3,
    },
    linkTabs_tabCounts: {
        fontSize: 22,
        fontWeight: 'bold',
        color: primary,
        alignSelf: 'center',
    },
    linkTabs_tabName: {
        color: '#444',
        fontWeight: 'bold'
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
});
