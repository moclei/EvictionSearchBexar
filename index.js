/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider as PaperProvider,
    DefaultTheme, } from 'react-native-paper';
import React from "react";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#344955',
        accent: '#F9AA33',
    },
};

export default function Main() {
    return (
        <PaperProvider theme={theme}>
            <App />
        </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
