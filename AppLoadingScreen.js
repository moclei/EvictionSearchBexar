import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';


export default class AppLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        this._retrieveData().then(consent => {
            console.log('Consent: ' + consent);
            this.props.navigation.navigate(consent==='true' ? 'Search' : 'Splash');
        });
    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('hasConsented');
            if (value !== null) {
                // We have data!!
                // console.log('Consent Value: ' + value);
                return value;
            }
        } catch (error) {
            // Error retrieving data
        }
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});