
'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Keyboard, Dimensions,Image, View, TouchableOpacity,Platform } from 'react-native';

import {popRoute} from '../../actions/route';

import {Container, Header, Content, Text, Input, Button, Icon, Card, CardItem, Thumbnail } from 'native-base';
import { Grid, Col, Row } from "react-native-easy-grid";

import theme from '../../themes/base-theme';
import styles from './style';
var primary = require('../../themes/variable').brandPrimary;

class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleHeight: Dimensions.get('window').height,
            offset: {
                x:0,
                y:0
            }
        };
        this.constructor.childContextTypes = {
            theme: React.PropTypes.object,
        }
    }
   
    componentWillMount () {
        Keyboard.addListener('keyboardWillShow', this.keyboardWillShow.bind(this))
        Keyboard.addListener('keyboardWillHide', this.keyboardWillHide.bind(this))
    }

    keyboardWillShow (e) {
        let newSize = Dimensions.get('window').height - e.endCoordinates.height
        this.setState({offset :{y: 80}});
    }

    keyboardWillHide (e) {
        this.setState({offset :{y: 0}});
    }
   
    popRoute() {
        this.props.popRoute();
    }
    
    render() {
        return (
            <Container theme={theme}>
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <Grid style={styles.headerContainer}>
                            <Col style={styles.headerBtns}>
                                <Button transparent onPress={() => this.popRoute()}>
                                    <Icon name="ios-arrow-back" style={styles.headerIcons} />
                                </Button>
                            </Col>
                            <Col style={styles.headerBtns}>
                                <Button transparent>
                                    <Icon name="ios-chatboxes-outline" style={styles.headerIcons} />
                                </Button>
                            </Col>
                            <Col style={styles.headerBtns}>
                                <Button transparent>
                                    <Text style={Platform.OS === 'android' ? styles.aheaderTextIcon : styles.iosheaderTextIcon}>Aa</Text>
                                </Button>
                            </Col>
                            <Col style={styles.headerBtns} >
                                <Button transparent>
                                    <Icon name="ios-bookmarks-outline"  style={styles.headerIcons} />
                                </Button>
                            </Col>
                            <Col style={styles.headerBtns}>
                                <Button transparent>
                                    <Icon name="ios-download-outline" style={styles.headerIcons} />
                                </Button>
                            </Col>
                        </Grid>
                    </Header>

                    <View style={styles.commentHeadbg}>
                        <Text style={styles.commentHeader}>23 COMMENTS</Text>
                        <Grid>
                            <Col>
                                <Button rounded primary block  style={Platform.OS === 'android' ? styles.achannelBtn1 : styles.ioschannelBtn1}   textStyle={Platform.OS === 'android' ? {fontSize: 12,fontWeight: '900',textAlign: 'center'} : {fontSize: 12,fontWeight: '900'}}>
                                    Best
                                </Button>
                            </Col>
                            <Col>
                                <Button transparent block  textStyle={{fontSize: 12,fontWeight: '900',textAlign: 'center'}}>
                                    Newest
                                </Button>
                            </Col>
                            <Col>
                                <Button transparent block  textStyle={{fontSize: 12,fontWeight: '900',textAlign: 'center'}}>
                                    Oldest
                                </Button>
                            </Col>
                        </Grid>
                    </View>
                    <Content>
                        <Card foregroundColor="#222" style={styles.card}>
                            <CardItem style={styles.cardHeader}  header>
                                <Thumbnail source={require('../../../images/contacts/sanket.png')} style={Platform.OS === 'android' ? {borderRadius: 40} : {}} />
                                <Text>Kumar Sanket</Text>
                                <Icon name="ios-time-outline"  style={ Platform.OS === 'android' ? styles.atimeIcon : styles.iostimeIcon} />
                                <Text style={Platform.OS === 'android' ? styles.adate : styles.iosdate}>May 24, 11 AM</Text>
                                <Icon name="ios-heart-outline" style={ Platform.OS === 'android' ? styles.alikeIcon : styles.ioslikeIcon} />
                                <Text style={Platform.OS === 'android' ? styles.adate : styles.iosdate}>12</Text>
                            </CardItem>

                            <CardItem style={styles.cardItem} >
                                <Text>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. 
                                </Text>
                            </CardItem>
                        </Card>

                        <Card foregroundColor="#222" style={styles.card}>
                            <CardItem style={styles.cardHeader}  header>
                                <Thumbnail source={require('../../../images/contacts/pratik.png')}  style={Platform.OS === 'android' ? {borderRadius: 40} : {}}/>
                                <Text>Kumar Pratik</Text>
                                <Icon name="ios-time-outline" style={ Platform.OS === 'android' ? styles.atimeIcon : styles.iostimeIcon} />
                                <Text style={Platform.OS === 'android' ? styles.adate : styles.iosdate}>May 24, 11 AM</Text>
                                <Icon name="ios-heart-outline" style={ Platform.OS === 'android' ? styles.alikeIcon : styles.ioslikeIcon} />
                                <Text style={Platform.OS === 'android' ? styles.adate : styles.iosdate}>12</Text>
                            </CardItem>
                            <CardItem style={styles.cardItem} >
                                <Text>
                                    It is a long established fact that a reader will be distracted by the readable content.
                                </Text>
                            </CardItem>
                        </Card>
                        
                        <Card foregroundColor="#222" style={styles.card}>
                            <CardItem style={styles.cardHeader}  header>
                                <Thumbnail source={require('../../../images/contacts/megha.png')}  style={Platform.OS === 'android' ? {borderRadius: 40} : {}}/>
                                <Text>Kumari Megha</Text>
                                <Icon name="ios-time-outline" style={ Platform.OS === 'android' ? styles.atimeIcon : styles.iostimeIcon} />
                                <Text style={Platform.OS === 'android' ? styles.adate : styles.iosdate}>Apr 02, 7 PM</Text>
                                <Icon name="ios-heart-outline" style={ Platform.OS === 'android' ? styles.alikeIcon : styles.ioslikeIcon} />
                                <Text style={Platform.OS === 'android' ? styles.adate : styles.iosdate}>8</Text>
                            </CardItem>
                            <CardItem style={styles.cardItem} >
                                <Text>
                                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                                </Text>
                            </CardItem>
                        </Card>
                    
                        <Card foregroundColor="#222" style={styles.card}>
                            <CardItem style={styles.cardHeader}  header>
                                <Thumbnail source={require('../../../images/contacts/saurav.png')}  style={Platform.OS === 'android' ? {borderRadius: 40} : {}}/>
                                <Text>Saurav Sahu</Text>
                                <Icon name="ios-time-outline" style={ Platform.OS === 'android' ? styles.atimeIcon : styles.iostimeIcon} />
                                <Text style={Platform.OS === 'android' ? styles.adate : styles.iosdate}>Feb 17, 4:30 PM</Text>
                                <Icon name="ios-heart-outline" style={ Platform.OS === 'android' ? styles.alikeIcon : styles.ioslikeIcon} />
                                <Text style={Platform.OS === 'android' ? styles.adate : styles.iosdate}>5</Text>
                            </CardItem>
                            <CardItem style={styles.cardItem} >
                                <Text>
                                    There are many variations of passages of Lorem Ipsum available.
                                </Text>
                            </CardItem>
                        </Card>

                        <Card foregroundColor="#222" style={styles.card}>
                            <CardItem style={styles.cardHeader}  header>
                                <Thumbnail source={require('../../../images/contacts/atul.png')}  style={Platform.OS === 'android' ? {borderRadius: 40} : {}}/>
                                <Text>Atul Ranjan</Text>
                                <Icon name="ios-time-outline" style={ Platform.OS === 'android' ? styles.atimeIcon : styles.iostimeIcon} />
                                <Text style={Platform.OS === 'android' ? styles.adate : styles.iosdate}>Feb 3, 1:00 PM</Text>
                                <Icon name="ios-heart-outline" style={ Platform.OS === 'android' ? styles.alikeIcon : styles.ioslikeIcon} />
                                <Text style={Platform.OS === 'android' ? styles.adate : styles.iosdate}>5</Text>
                            </CardItem>
                            <CardItem style={styles.cardItem} >
                                <Text>
                                    The generated Lorem Ipsum is therefore always free from repetition
                                </Text>
                            </CardItem>
                        </Card>

                        <Card foregroundColor="#222" style={styles.card}>
                            <CardItem style={styles.cardHeader}  header>
                                <Thumbnail source={require('../../../images/contacts/varun.png')}  style={Platform.OS === 'android' ? {borderRadius: 40} : {}}/>
                                <Text>Varun Sahu</Text>
                                <Icon name="ios-time-outline" style={ Platform.OS === 'android' ? styles.atimeIcon : styles.iostimeIcon} />
                                <Text style={Platform.OS === 'android' ? styles.adate : styles.iosdate}>Jan 12, 9:30 PM</Text>
                                <Icon name="ios-heart-outline" style={ Platform.OS === 'android' ? styles.alikeIcon : styles.ioslikeIcon} />
                                <Text style={Platform.OS === 'android' ? styles.adate : styles.iosdate}>4</Text>
                            </CardItem>
                            <CardItem style={styles.cardItem} >
                                <Text>
                                     Various versions have evolved over the years, sometimes by accident
                                </Text>
                            </CardItem>
                        </Card>
                    </Content>

                    <View style={styles.commentBox}>
                        <View style={styles.attachIconContainer}>
                            <Icon name="ios-attach" style={styles.attachIcon} />
                        </View>
                        <Input placeholder="Write something..." placeholderTextColor="#797979" style={styles.input}/>
                        <TouchableOpacity style={styles.arrowForwardIconContainer}>
                            <Icon name="ios-arrow-forward"  style={styles.arrowForwardIcon} />
                        </TouchableOpacity>
                    </View>
                </Image>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        popRoute: () => dispatch(popRoute())
    }
}

export default connect(null, bindAction)(Comments);