/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator, createSwitchNavigator} from 'react-navigation';
import EvictionListScreen from "./EvictionListScreen";
import ContactScreen from "./ContactScreen";
import EvictionDetailScreen from "./EvictionDetailScreen"
import EvictionSplashScreen from "./EvictionSplashScreen";
import SplashScreen from 'react-native-splash-screen'
import AppLoadingScreen from "./AppLoadingScreen";


export default class App extends Component {
    render() {
        return <RootNavigator />;
    }
    componentDidMount() {
        SplashScreen.hide()
    }
}

const EvictionStack = createStackNavigator({
    List: {
        screen: EvictionListScreen,
    },
    Detail: {
        screen: EvictionDetailScreen,

    },
    Contact: {
        screen: ContactScreen
    },
});

const RootNavigator = createSwitchNavigator(
    {
        Search: {
            screen: EvictionStack
        },
        Splash: {
            screen: EvictionSplashScreen
        },
        Loading: {
            screen: AppLoadingScreen
        },
    },
    {
        initialRouteName: 'Loading',
    },
);
