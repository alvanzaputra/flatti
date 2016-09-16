
'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Image, View, TouchableOpacity, Platform } from 'react-native';

import {replaceRoute} from '../../actions/route';
import {openDrawer} from '../../actions/drawer';

import {Container, Header, Content, Text, Button, Icon, Thumbnail} from 'native-base';
import { Grid, Col, Row } from "react-native-easy-grid";

import theme from '../../themes/base-theme';
import styles from './styles';


class Profile extends Component {

    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    render() {
        return (
            <Container theme={theme}>
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <Button transparent onPress={this.props.openDrawer}  style={Platform.OS === 'android' ? styles.aheaderIcon : styles.iosheaderIcon}>
                            <Icon name="ios-menu" />
                        </Button>
                        
                        <Image source={require('../../../images/Header-Logo.png')} style={styles.logoHeader} />
                        
                        <Button transparent  style={Platform.OS === 'android' ? styles.aheaderIcon : styles.iosheaderIcon}>
                            <Icon name="ios-search" />
                        </Button>    
                    </Header>

                    <View style={styles.profileInfoContainer}>
                        <TouchableOpacity style={{alignSelf: 'center'}}>
                            <Thumbnail source={require('../../../images/contacts/sanket.png')} style={styles.profilePic} />
                        </TouchableOpacity>
                        <View style={styles.profileInfo}>
                            <TouchableOpacity>
                                <Text style={styles.profileUser}>Kumar Sanket</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text note  style={styles.profileUserInfo}>CEO, GeekyAnts</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.linkTabs}>
                        <Grid>
                            <Col>
                                <TouchableOpacity  style={styles.linkTabs_header}>
                                    <Text style={Platform.OS === 'android' ? styles.alinkTabs_tabCounts : styles.linkTabs_tabCounts}>13</Text>
                                    <Text note style={styles.linkTabs_tabName}>Comments</Text>
                                </TouchableOpacity>
                            </Col>
                            <Col>
                                <TouchableOpacity  style={styles.linkTabs_header}>
                                    <Text style={Platform.OS === 'android' ? styles.alinkTabs_tabCounts : styles.linkTabs_tabCounts}>12</Text>
                                    <Text note style={styles.linkTabs_tabName}>Channels</Text>
                                </TouchableOpacity>
                            </Col>
                            <Col>
                                <TouchableOpacity  style={styles.linkTabs_header}>
                                    <Text style={Platform.OS === 'android' ? styles.alinkTabs_tabCounts : styles.linkTabs_tabCounts}>52</Text>
                                    <Text note style={styles.linkTabs_tabName}>Bookmarks</Text>
                                </TouchableOpacity>
                            </Col>
                        </Grid>
                    </View>
                    
                    <Content>
                        <View style={{backgroundColor: '#fff'}}>
                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.replaceRoute('home')}>
                                <Image source={require('../../../images/NewsIcons/1.jpg')} style={styles.newsImage} />
                                <View style={styles.newsContent}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        Lorem Ipsum is simply dummy text of the printing
                                    </Text>
                                    <Grid style={{marginTop: 25}}>
                                        <Col>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>CDC</Text>
                                            </TouchableOpacity>
                                        </Col>
                                        <Col>
                                            <TouchableOpacity style={styles.newsTypeView}>
                                                <Text style={styles.newsTypeText}>ENVIRONMENT</Text>
                                            </TouchableOpacity>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.replaceRoute('home')}>
                                <Image source={require('../../../images/NewsIcons/3.jpg')} style={styles.newsImage} />
                                <View style={styles.newsContent}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                                    </Text>
                                    <Grid style={{marginTop: 25}}>
                                        <Col>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>SPACE.com</Text>
                                            </TouchableOpacity>
                                        </Col>
                                        <Col>
                                            <TouchableOpacity style={styles.newsTypeView}>
                                                <Text style={styles.newsTypeText}>SCIENCE</Text>
                                            </TouchableOpacity>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.replaceRoute('home')}>
                                <Image source={require('../../../images/NewsIcons/4.jpg')} style={styles.newsImage} />
                                <View style={styles.newsContent}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>It has survived not only five centuries</Text>
                                    <Grid style={{marginTop: 25}}>
                                        <Col>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>SKY.com</Text>
                                            </TouchableOpacity>
                                        </Col>
                                        <Col>
                                            <TouchableOpacity style={styles.newsTypeView}>
                                                <Text style={styles.newsTypeText}>WORLD</Text>
                                            </TouchableOpacity>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.replaceRoute('home')}>
                                <Image source={require('../../../images/NewsIcons/10.jpg')} style={styles.newsImage} />
                                <View style={styles.newsContent}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        Lorem Ipsum is simply dummy text of the printing
                                    </Text>
                                    <Grid style={{marginTop: 25}}>
                                        <Col>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>ANI.com</Text>
                                            </TouchableOpacity>
                                        </Col>
                                        <Col>
                                            <TouchableOpacity style={styles.newsTypeView}>
                                                <Text style={styles.newsTypeText}>ANIMATION</Text>
                                            </TouchableOpacity>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.replaceRoute('home')}>
                                <Image source={require('../../../images/NewsIcons/9.jpg')} style={styles.newsImage} />
                                <View style={styles.newsContent}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                                    </Text>
                                    <Grid style={{marginTop: 25}}>
                                        <Col>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>STYLE.com</Text>
                                            </TouchableOpacity>
                                        </Col>
                                        <Col>
                                            <TouchableOpacity style={styles.newsTypeView}>
                                                <Text style={styles.newsTypeText}>FASHION</Text>
                                            </TouchableOpacity>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.replaceRoute('home')}>
                                <Image source={require('../../../images/NewsIcons/12.jpg')} style={styles.newsImage} />
                                <View style={styles.newsContent}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>It has survived not only five centuries</Text>
                                    <Grid style={{marginTop: 25}}>
                                        <Col>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>ART.com</Text>
                                            </TouchableOpacity>
                                        </Col>
                                        <Col>
                                            <TouchableOpacity style={styles.newsTypeView}>
                                                <Text style={styles.newsTypeText}>ART</Text>
                                            </TouchableOpacity>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Content>
                </Image>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        replaceRoute:(route)=>dispatch(replaceRoute(route))
    }
}

export default connect(null, bindAction)(Profile);
