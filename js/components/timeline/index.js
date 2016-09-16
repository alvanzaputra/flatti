
'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Image, View,Platform } from 'react-native';

import {openDrawer} from '../../actions/drawer';

import {Container, Header, Content, Text, Button, Icon} from 'native-base';
import { Grid, Col, Row } from "react-native-easy-grid";
import ProgressBar from "./../loaders/ProgressBar";

import theme from '../../themes/base-theme';
import styles from './styles';

class Timeline extends Component {

    render() {
        return (
            <Container theme={theme} style={styles.bg} >
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
                    <View style={styles.overviewHeaderContainer}>
                        <Text style={styles.overviewHeader}>MONDAY</Text>
                        <Text note  style={styles.overviewHead}>April 6, 2016</Text>
                    </View>

                    <Content >
                        <View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text></Text>
                                </View>
                            </View>

                            <View style={styles.contentContainer}>
                                <Grid>
                                    <Col style={{flexDirection:'row'}}>
                                        <Icon name="ios-bookmark"  style={[styles.timelineIcon,{marginLeft: 2}]} />
                                        <View  style={{paddingLeft: 27}}>
                                            <Text style={Platform.OS === 'android' ? styles.atimelineContentHeading : styles.iostimelineContentHeading}>BOOKMARKED</Text>
                                        </View>
                                    </Col>   
                                    <Col>
                                        <View style={Platform.OS === 'android' ? styles.anewsTypeView : styles.iosnewsTypeView}>
                                            <Icon name="ios-time-outline" style={ Platform.OS === 'android' ? styles.atimeIcon : styles.iostimeIcon} />
                                            <Text style={styles.time}>9:34am</Text>
                                        </View>
                                    </Col>
                                </Grid>
                            </View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text style={styles.timelineTextHeader}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text></Text>
                                </View>
                            </View>
                            <View style={styles.contentContainer}>
                                <Grid>
                                    <Col style={{flexDirection:'row'}}>
                                        <Icon name="ios-chatboxes-outline" style={styles.timelineIcon} />
                                        <View style={{paddingLeft: 18}}>
                                            <Text style={Platform.OS === 'android' ? styles.atimelineContentHeading : styles.iostimelineContentHeading}>COMMENTED</Text>
                                        </View>
                                    </Col>   
                                    <Col>
                                        <View  style={Platform.OS === 'android' ? styles.anewsTypeView : styles.iosnewsTypeView}>
                                            <Icon name="ios-time-outline" style={ Platform.OS === 'android' ? styles.atimeIcon : styles.iostimeIcon} />
                                            <Text style={styles.time}>10:05am</Text>
                                        </View>
                                    </Col>
                                </Grid>
                            </View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text  style={styles.timelineTextHeader}>
                                        It has roots in a piece of classical Latin literature from 45 BC.
                                    </Text>
                                    <Text numberOfLines={2} style={styles.timelineTextComment}>
                                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text></Text>
                                </View>
                            </View>
                            <View style={styles.contentContainer}>
                                <Grid>
                                    <Col style={{flexDirection:'row'}}>
                                        <Icon name="ios-done-all" style={styles.timelineIcon} />
                                        <View style={{paddingLeft: 30}}>
                                            <Text style={Platform.OS === 'android' ? styles.atimelineContentHeading : styles.iostimelineContentHeading}>FOLLOWED</Text>
                                        </View>
                                    </Col>   
                                    <Col>
                                        <View  style={Platform.OS === 'android' ? styles.anewsTypeView : styles.iosnewsTypeView}>
                                            <Icon name="ios-time-outline" style={ Platform.OS === 'android' ? styles.atimeIcon : styles.iostimeIcon} />
                                            <Text style={styles.time}>5:36pm</Text>
                                        </View>
                                    </Col>
                                </Grid>
                            </View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text  style={styles.timelineTextHeader}>"SPORTS" channel</Text>
                                </View>
                            </View>
                        </View>

                        <View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text></Text>
                                </View>
                            </View>
                            <View style={styles.contentContainer}>
                                <Grid>
                                    <Col style={{flexDirection:'row'}}>
                                        <Icon name="ios-download-outline" style={styles.timelineIcon} />
                                        <View style={{paddingLeft: 25}}>
                                            <Text style={Platform.OS === 'android' ? styles.atimelineContentHeading : styles.iostimelineContentHeading}>SHARED</Text>
                                        </View>
                                    </Col>   
                                    <Col>
                                        <View  style={Platform.OS === 'android' ? styles.anewsTypeView : styles.iosnewsTypeView}>
                                            <Icon name="ios-time-outline" style={ Platform.OS === 'android' ? styles.atimeIcon : styles.iostimeIcon} />
                                            <Text style={styles.time}>6:00pm</Text>
                                        </View>
                                    </Col>
                                </Grid>
                            </View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text style={styles.timelineTextHeader}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </Text>
                                </View>
                            </View>
                        </View>


                        <View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text></Text>
                                </View>
                            </View>
                            <View style={styles.contentContainer}>
                                <Grid>
                                    <Col style={{flexDirection:'row'}}>
                                        <Icon name="ios-thumbs-up-outline" style={styles.timelineIcon} />
                                        <View style={{paddingLeft: 25}}>
                                            <Text style={Platform.OS === 'android' ? styles.atimelineContentHeading : styles.iostimelineContentHeading}>LIKED</Text>
                                        </View>
                                    </Col>   
                                    <Col>
                                        <View  style={Platform.OS === 'android' ? styles.anewsTypeView : styles.iosnewsTypeView}>
                                            <Icon name="ios-time-outline" style={ Platform.OS === 'android' ? styles.atimeIcon : styles.iostimeIcon} />
                                            <Text style={styles.time}>9:13pm</Text>
                                        </View>
                                    </Col>
                                </Grid>
                            </View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text  style={styles.timelineTextHeader}>
                                        Various versions have evolved over the years, sometimes by accident
                                    </Text>
                                </View>
                            </View>
                        </View>


                        <View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text></Text>
                                </View>
                            </View>
                            <View style={styles.contentContainer}>
                                <Grid>
                                    <Col style={{flexDirection:'row'}}>
                                        <Icon name="ios-copy-outline" style={styles.timelineIcon} />
                                        <View style={{paddingLeft: 25}}>
                                            <Text style={Platform.OS === 'android' ? styles.atimelineContentHeading : styles.iostimelineContentHeading}>SAVED</Text>
                                        </View>
                                    </Col>   
                                    <Col>
                                        <View  style={Platform.OS === 'android' ? styles.anewsTypeView : styles.iosnewsTypeView}>
                                            <Icon name="ios-time-outline" style={ Platform.OS === 'android' ? styles.atimeIcon : styles.iostimeIcon} />
                                            <Text style={styles.time}>11:03pm</Text>
                                        </View>
                                    </Col>
                                </Grid>
                            </View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text  style={styles.timelineTextHeader}>
                                        Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text></Text>
                                </View>
                            </View>
                            <View style={styles.contentContainer}>
                                <Grid>
                                    <Col style={{flexDirection:'row'}}>
                                        <Icon name="ios-archive-outline" style={styles.timelineIcon} />
                                        <View style={{paddingLeft: 25}}>
                                            <Text style={Platform.OS === 'android' ? styles.atimelineContentHeading : styles.iostimelineContentHeading}>ARCHIVED</Text>
                                        </View>
                                    </Col>   
                                    <Col>
                                        <View  style={Platform.OS === 'android' ? styles.anewsTypeView : styles.iosnewsTypeView}>
                                            <Icon name="ios-time-outline" style={ Platform.OS === 'android' ? styles.atimeIcon : styles.iostimeIcon} />
                                            <Text style={styles.time}>11:53pm</Text>
                                        </View>
                                    </Col>
                                </Grid>
                            </View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text  style={styles.timelineTextHeader}>
                                        There are many variations of passages of Lorem Ipsum available
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </Content>
                </Image>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer())
    }
}

export default connect(null, bindAction)(Timeline);
