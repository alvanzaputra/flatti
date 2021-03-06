
'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Image, View, Switch, TouchableOpacity, Platform, Keyboard, Dimensions } from 'react-native';

import {resetRoute} from '../../actions/route';
import {openDrawer} from '../../actions/drawer';

import {Container, Header, Content, Text, Button, Icon, Thumbnail, InputGroup, Input} from 'native-base';
import { Grid, Col, Row } from "react-native-easy-grid";

import theme from '../../themes/base-theme';
import styles from './styles';
var primary = require('../../themes/variable').brandPrimary;

class Settings extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            monSwitch: true,
            tueSwitch: false,
            wedSwitch: false,
            thuSwitch: false,
            friSwitch: false,
            satSwitch: false,
            sunSwitch: false,
            Username: '',
            email: '',
            password: '',
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
   resetRoute(route) {
        this.props.resetRoute(route);
    }

    render() {
        return (
            <Container theme={theme} >
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <Button transparent onPress={this.props.openDrawer}  style={Platform.OS === 'android' ? styles.aheaderIcon : styles.iosheaderIcon}>
                            <Icon name="ios-menu" />
                        </Button>
                        
                        <Image source={require('../../../images/Header-Logo.png')} style={styles.logoHeader} />
                        
                        <Button transparent style={Platform.OS === 'android' ? styles.aheaderIcon : styles.iosheaderIcon} onPress={() => this.resetRoute('login')}>
                            <Icon name="ios-power" style={Platform.OS === 'android' ? {paddingBottom: 10,marginTop: 8} : {}}/>
                        </Button>    
                    </Header>

                    <Content contentOffset={this.state.offset} scrollEnabled={true} >
                        <View  style={styles.bg}>
                            <Text style={styles.signupHeader}>SETTINGS</Text>
                            <View style={{marginTop: 20}}>
                                <Grid>
                                    <Col>
                                        <Button transparent style={styles.roundedButton}>
                                            <Icon name="ios-cloud-upload-outline" style={Platform.OS === 'android' ? {} : {lineHeight: 0}} />
                                        </Button>
                                    </Col>
                                    <Col>
                                        <TouchableOpacity style={{alignSelf: 'center'}}>
                                            <Thumbnail source={require('../../../images/contacts/sanket.png')} style={Platform.OS === 'android' ? styles.aProfilePic : styles.iosProfilePic} />
                                        </TouchableOpacity>
                                    </Col>
                                    <Col>
                                        <Button transparent style={styles.roundedButton}>
                                            <Icon name="ios-cloud-download-outline" style={Platform.OS === 'android' ? {} : {lineHeight: 0}} />
                                        </Button>
                                    </Col>
                                </Grid>   
                            </View>
                            <View style={styles.signupContainer}>
                                <InputGroup borderType="rounded" style={Platform.OS === 'android' ? styles.inputGrp : styles.iosInputGrp}>
                                    <Icon name="ios-person-outline" />
                                    <Input placeholder="Username"  style={styles.input}/>
                                </InputGroup>
                                <InputGroup borderType="rounded" style={Platform.OS === 'android' ? styles.inputGrp : styles.iosInputGrp}>
                                    <Icon name="ios-mail-open-outline" />
                                    <Input placeholder="Email"  style={styles.input}/>
                                </InputGroup>
                                <InputGroup borderType="rounded" style={Platform.OS === 'android' ? styles.inputGrp : styles.iosInputGrp}>
                                    <Icon name="ios-unlock-outline" />
                                    <Input placeholder="Password" secureTextEntry={true}  style={styles.input}/>
                                </InputGroup>
                            </View>
                        </View>
                        <View style={styles.notificationSwitchContainer}>
                            <Text style={styles.notificationHeader}>EMAIL NOTIFICATIONS</Text>
                            <View>
                                <Grid>
                                    <Col>
                                        <Text style={Platform.OS === 'android' ? styles.aswitchText : styles.switchText}>Monday</Text>
                                    </Col>
                                    <Col style={Platform.OS === 'android' ? styles.aswitchContainer : styles.switchContainer}>
                                        <Switch
                                            onValueChange={(value) => this.setState({monSwitch: value})}
                                            onTintColor={primary}
                                            style={Platform.OS === 'android' ? styles.aswitch : styles.switch}
                                            thumbTintColor="#ccc"
                                            tintColor="#aaa"
                                            value={this.state.monSwitch} />
                                    </Col>
                                </Grid>
                                <Grid>
                                    <Col>
                                        <Text style={Platform.OS === 'android' ? styles.aswitchText : styles.switchText}>Tuesday</Text>
                                    </Col>
                                    <Col style={Platform.OS === 'android' ? styles.aswitchContainer : styles.switchContainer}>
                                        <Switch
                                            onValueChange={(value) => this.setState({tueSwitch: value})}
                                            onTintColor={primary}
                                            style={Platform.OS === 'android' ? styles.aswitch : styles.switch}
                                            thumbTintColor="#ccc"
                                            tintColor="#aaa"
                                            value={this.state.tueSwitch} />
                                    </Col>
                                </Grid>
                                <Grid>
                                    <Col>
                                        <Text style={Platform.OS === 'android' ? styles.aswitchText : styles.switchText}>Wednesday</Text>
                                    </Col>
                                    <Col style={Platform.OS === 'android' ? styles.aswitchContainer : styles.switchContainer}>
                                        <Switch
                                            onValueChange={(value) => this.setState({wedSwitch: value})}
                                            onTintColor={primary}
                                            style={Platform.OS === 'android' ? styles.aswitch : styles.switch}
                                            thumbTintColor="#ccc"
                                            tintColor="#aaa"
                                            value={this.state.wedSwitch} />
                                    </Col>
                                </Grid>
                                <Grid>
                                    <Col>
                                        <Text style={Platform.OS === 'android' ? styles.aswitchText : styles.switchText}>Thursday</Text>
                                    </Col>
                                    <Col style={Platform.OS === 'android' ? styles.aswitchContainer : styles.switchContainer}>
                                        <Switch
                                            onValueChange={(value) => this.setState({thuSwitch: value})}
                                            onTintColor={primary}
                                            style={Platform.OS === 'android' ? styles.aswitch : styles.switch}
                                            thumbTintColor="#ccc"
                                            tintColor="#aaa"
                                            value={this.state.thuSwitch} />
                                    </Col>
                                </Grid>
                                <Grid>
                                    <Col>
                                        <Text style={Platform.OS === 'android' ? styles.aswitchText : styles.switchText}>Friday</Text>
                                    </Col>
                                    <Col style={Platform.OS === 'android' ? styles.aswitchContainer : styles.switchContainer}>
                                        <Switch
                                            onValueChange={(value) => this.setState({friSwitch: value})}
                                            onTintColor={primary}
                                            style={Platform.OS === 'android' ? styles.aswitch : styles.switch}
                                            thumbTintColor="#ccc"
                                            tintColor="#aaa"
                                            value={this.state.friSwitch} />
                                    </Col>
                                </Grid>
                                <Grid>
                                    <Col>
                                        <Text style={Platform.OS === 'android' ? styles.aswitchText : styles.switchText}>Saturday</Text>
                                    </Col>
                                    <Col style={Platform.OS === 'android' ? styles.aswitchContainer : styles.switchContainer}>
                                        <Switch
                                            onValueChange={(value) => this.setState({satSwitch: value})}
                                            onTintColor={primary}
                                            style={Platform.OS === 'android' ? styles.aswitch : styles.switch}
                                            thumbTintColor="#ccc"
                                            tintColor="#aaa"
                                            value={this.state.satSwitch} />
                                    </Col>
                                </Grid>
                                <Grid>
                                    <Col>
                                        <Text style={Platform.OS === 'android' ? styles.aswitchText : styles.switchText}>Sunday</Text>
                                    </Col>
                                    <Col style={Platform.OS === 'android' ? styles.aswitchContainer : styles.switchContainer}>
                                        <Switch
                                            onValueChange={(value) => this.setState({sunSwitch: value})}
                                            onTintColor={primary}
                                            style={Platform.OS === 'android' ? styles.aswitch : styles.switch}
                                            thumbTintColor="#ccc"
                                            tintColor="#aaa"
                                            value={this.state.sunSwitch} />
                                    </Col>
                                </Grid>
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
        openDrawer: ()=>dispatch(openDrawer()),
        resetRoute:(route)=>dispatch(resetRoute(route))
    }
}

export default connect(null, bindAction)(Settings);
