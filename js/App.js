
'use strict';

import AppNavigator from './AppNavigator';
import React,{Component} from "react";
import CodePush from 'react-native-code-push';
import { StyleSheet, AppState, Dimensions, Image} from 'react-native';
import Modal from 'react-native-modalbox';
import {Container, Header, Title, Content, Text, Button, Icon, List, ListItem, View} from 'native-base';
import theme from './themes/base-theme';
import ProgressBar from './components/loaders/ProgressBar';

var height = Dimensions.get('window').height;
let styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
    },
    box: {
        padding: 10,
        backgroundColor: 'transparent',
        flex: 1,
        height: height-70
    },
    space: {
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center'
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal1: {
        height: 300,
        width: 300
    }
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDownloadingModal: false,
            showInstalling: false,
            downloadProgress: 0
        }
    }

    componentDidMount() {
        /* Uncomment this code for testing the update modal */
        // this.setState({showDownloadingModal: true});
        // //this.setState({showInstalling: true});
        // this.refs.modal.open();
        // var intervalId = setInterval(() => {
        //     if(this.state.downloadProgress == 99) {
        //         clearInterval(intervalId);
        //         this.setState({showDownloadingModal: false});
        //     }
        //     this.setState({downloadProgress: this.state.downloadProgress + 1});
        // }, 300);

        // Prompt the user when an update is available
        // and then display a "downloading" modal 
        CodePush.sync({ updateDialog: true, installMode: CodePush.InstallMode.IMMEDIATE }, 
          (status) => {
              switch (status) {
                  case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
                      this.setState({showDownloadingModal: true});
                      this.refs.modal.open();
                      break;
                  case CodePush.SyncStatus.INSTALLING_UPDATE:
                      this.setState({showInstalling: true});
                      break;
                  case CodePush.SyncStatus.UPDATE_INSTALLED:
                      this.refs.modal.close();
                      this.setState({showDownloadingModal: false});
                      break;
              }
          },
          ({ receivedBytes, totalBytes, }) => { 
            this.setState({downloadProgress: receivedBytes / totalBytes * 100});
          }
        );
    }

    render() {
        if(this.state.showDownloadingModal)
            return ( 
                <Container theme={theme} style={{backgroundColor: theme.brandSecondary}}>
                    <Image source={require('../images/glow2.png')} style={styles.container} >
                        <Modal style={[styles.modal, styles.modal1]} backdrop={false} ref={"modal"} swipeToClose={false} >

                            <View style={{flex:1, alignSelf: 'stretch', justifyContent: 'center', padding:20}}>
                                {this.state.showInstalling ?
                                    <Text style={{color: theme.brandSecondary, textAlign: 'center',marginBottom: 15, fontSize: 15 }}>
                                        Installing update...
                                    </Text> :
                                    <View style={{flex:1, alignSelf: 'stretch', justifyContent: 'center', padding:20}}>
                                        <Text style={{color: theme.brandSecondary, textAlign: 'center',marginBottom: 15, fontSize: 15 }}>Downloading update... {parseInt(this.state.downloadProgress) + ' %'}</Text>
                                        <ProgressBar color={theme.brandSecondary} progress={parseInt(this.state.downloadProgress)} />
                                    </View>
                                }
                            </View>

                        </Modal>
                    </Image>
                </Container>

            );
        else 
            return(
                <AppNavigator store={this.props.store} />
            );
    }
}

export default App
