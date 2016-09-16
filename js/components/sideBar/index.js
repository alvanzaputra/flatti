
'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { TouchableOpacity, Image, Platform } from 'react-native';

import {replaceOrPushRoute, resetRoute} from '../../actions/route';
import {closeDrawer} from '../../actions/drawer';

import {Container, Content, View, Text, Button, Icon, List, ListItem, Thumbnail} from 'native-base';
import { Grid, Col, Row } from "react-native-easy-grid";

import styles from "./style";

class SideBar extends Component {

    navigateTo(route) {
        this.props.closeDrawer();
        this.props.replaceOrPushRoute(route);
    }
    resetRoute(route) {
        this.props.closeDrawer();
        this.props.resetRoute(route);
    }
    
    render(){
        return (
            <Container>
                <Image source={require('../../../images/sid.png')} style={styles.background} >
                    <Content style={Platform.OS === 'android' ? styles.adrawerContent : styles.drawerContent}>
                        <List  foregroundColor={"white"} >
                            <ListItem button onPress={() => this.navigateTo('home')} iconLeft style={Platform.OS === 'android' ? styles.alinks : styles.links} >
                                <Icon name="ios-grid-outline" />
                                <Text style={styles.linkText} >NEWS</Text>
                            </ListItem>
                            <ListItem button onPress={() => this.navigateTo('channels')}  iconLeft style={Platform.OS === 'android' ? styles.alinks : styles.links} >
                                <Icon name="ios-keypad-outline" />
                                <Text style={styles.linkText}>CHANNELS</Text>
                            </ListItem>
                            <ListItem button onPress={() => this.navigateTo('overview')}  iconLeft style={Platform.OS === 'android' ? styles.alinks : styles.links} >
                              <Icon name="ios-stats" />
                              <Text style={styles.linkText}> OVERVIEW</Text>
                            </ListItem>
                            <ListItem button onPress={() => this.navigateTo('calendar')}  iconLeft style={Platform.OS === 'android' ? styles.alinks : styles.links} >
                                <Icon name="ios-calendar-outline" />
                                <Text style={styles.linkText}>CALENDAR</Text>
                            </ListItem>
                            <ListItem button onPress={() => this.navigateTo('timeline')}  iconLeft style={Platform.OS === 'android' ? styles.alinks : styles.links} >
                                <Icon name="ios-timer-outline" />
                                <Text style={styles.linkText}>TIMELINE</Text>
                            </ListItem>
                            <ListItem button onPress={() => this.navigateTo('profile')} iconLeft style={Platform.OS === 'android' ? styles.alinks : styles.links} >
                                <Icon name="ios-person-outline" />
                                <Text style={styles.linkText}> PROFILE</Text>
                            </ListItem>
                            <ListItem button onPress={() => this.navigateTo('widgets')}  iconLeft style={Platform.OS === 'android' ? styles.alinks : styles.links} >
                                <Icon name="ios-grid" />
                                <Text style={styles.linkText}>WIDGETS</Text>
                            </ListItem>
                            <ListItem button onPress={() => this.navigateTo('settings')} iconLeft style={Platform.OS === 'android' ? styles.alinks : styles.links}>
                                <Icon name="ios-settings-outline" />
                                <Text style={styles.linkText}>SETTINGS</Text>
                            </ListItem>
                            <ListItem button onPress={() => this.navigateTo('feedback')} iconLeft style={Platform.OS === 'android' ? styles.alinks : styles.links} >
                                <Icon name="ios-paper-outline" />
                                <Text style={styles.linkText}>FEEDBACK</Text>
                            </ListItem>
                        </List>
                 
                        <View style={styles.logoutContainer}>
                            <View style={styles.logoutbtn}  foregroundColor={"white"}>
                                <Grid>
                                    <Col>
                                        <TouchableOpacity onPress={() => this.resetRoute('login')} style={{alignSelf: 'flex-start'}}>
                                            <Text style={{fontWeight: 'bold'}}>LOG OUT</Text>
                                            <Text note >Kumar Sanket</Text>
                                        </TouchableOpacity>
                                    </Col>
                                    <Col>
                                        <TouchableOpacity style={{alignSelf: 'flex-end'}}  onPress={() => this.navigateTo('profile')}>
                                            <Thumbnail source={require('../../../images/contacts/sanket.png')} style={Platform.OS === 'android' ? styles.aProfilePic : styles.iosProfilePic} />
                                        </TouchableOpacity>
                                    </Col>
                                </Grid>
                            </View>
                        </View>
                    </Content>
                </Image>
            </Container>
        );
    }
}

function bindAction(dispatch) {
    return {
        closeDrawer: ()=>dispatch(closeDrawer()),
        replaceOrPushRoute:(route)=>dispatch(replaceOrPushRoute(route)),
        resetRoute:(route)=>dispatch(resetRoute(route))
    }
}

export default connect(null, bindAction)(SideBar);
