
'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Image, View } from 'react-native';

export default class SplashPage extends Component {

    componentWillMount () {
        var navigator = this.props.navigator;
        setTimeout (() => {
            navigator.replace({
                id: 'login',
            });
        }, 1500);
    }
    render () {
        return (
            <Image source={require('../../../images/launchscreen.png')} style={{flex: 1, height: null, width: null}} />
        );
    }
}
