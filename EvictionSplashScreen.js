import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar, ScrollView,
} from 'react-native';
import { AsyncStorage } from "react-native"
import {
    Button,
    Paragraph,
    Checkbox,
    Title,
    Card,
} from "react-native-paper";


type Props = {};
export default class EvictionSplashScreen extends Component<Props> {

    /*static navigationOptions = {
        title: 'Search Eviction Records in Bexar County',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };*/

    constructor() {
        super();
            this.state = {
                hasConsented: false,
                checking: true,
            }
    }

    render() {
        const {hasConsented } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#4A6572"
                />
                <Card style={styles.card}>
                    <Card.Content  style={{flex: 4}}>
                        <Title style={styles.instructions}>
                            Terms and conditions
                        </Title>
                        <ScrollView contentContainerStyle={styles.consent}>
                            <View>
                                <Paragraph>
                                    The eviction and small claims court record information provided through this internet-based
                                    website (“site”) is a free public service.
                                    The information accessible on the site consists solely of publicly available eviction and small
                                    claims court data provided to the site sponsors by Bexar County Information Services and the JP
                                    courts serving Bexar County.
                                    Neither Bexar County nor the JP courts, judges nor their employees are in any way responsible
                                    for the operation of this site.
                                    Use of this search constitutes agreement with the Terms and Conditions of Use below.
                                </Paragraph>
                                <Paragraph>
                                    By accessing this site and/or its information, the individual or entity (“Visitor”)
                                    agrees to the Disclaimer, Terms and Conditions of Use, and to use this site, its information,
                                    or both in accordance with all applicable local ordinances as well as Texas and federal laws.

                                    All information available through this site is provided “as is;” subject to changes and
                                    updates at any time; and provided with no warranties, express or implied, as to quality,
                                    content, accuracy, validity, reliability, timeliness, or completeness. In no event shall
                                    the site sponsors or Bexar County be liable for any damages, of any nature whatsoever,
                                    arising out of the use of, or the inability to use this site or the site's information.
                                    The site’s information is not for official use.
                                    Commercial use of the site’s information is strictly prohibited.
                                    The site’s information is extracted from multiple sources and is not subject to independent verification.
                                    Any links to external servers do not imply any endorsement of the opinions or ideas expressed therein,
                                    or guarantee the validity of the information provided.
                                    We assume no liability for availability or compatibility with web site users’ software or computers.
                                    Any unauthorized use or misuse of the site or the site's information by Visitor may subject Visitor
                                    to civil or criminal proceedings, or both.  For legal advice, you should contact a lawyer.
                                    If you disagree with this disclaimer please do not use this site
                                </Paragraph>
                                <Text>
                                    {"\n"}
                                    {"\n"}
                                    {"\n"}
                                </Text>
                                <Text>
                                    {"\n"}
                                    {"\n"}
                                    {"\n"}
                                </Text>
                            </View>
                        </ScrollView>
                    </Card.Content>
                    <Card.Actions  style={{flex: 1}}>
                        <View style={{flex: 1}}>
                            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', paddingBottom: 16}}>
                                <Checkbox.Android
                                    status={this.state.hasConsented ? 'checked' : 'unchecked'}
                                    onPress={() => { this.onConsentChecked(); }}
                                />
                                <Text>I agree to the terms and conditions</Text>
                            </View>
                            <Button
                                mode="contained"
                                color={colors.accent}
                                onPress={() => { this.props.navigation.navigate('Search'); }}
                                disabled={!hasConsented}>
                                Go to Search
                            </Button>

                        </View>
                    </Card.Actions>
                </Card>
            </View>


        );
    }

    /*
    <Button
                                color={colors.accent}
                                onPress={() => {this._retrieveData(); }}>
                                Get Consent
                            </Button>
     */
    /*
    <View style={{flex: 1, paddingBottom: 16}}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Checkbox
                                status={this.state.hasConsented ? 'checked' : 'unchecked'}
                                onPress={() => { this.setState({ hasConsented: !hasConsented }); }}
                            />
                            <Text>I agree to the terms and conditions</Text>
                        </View>
                        <Button
                            mode="contained"
                            color={colors.accent}
                            onPress={() => { this.props.navigation.navigate('Search'); }}
                            disabled={!hasConsented}>
                            Go to Search
                        </Button>
                    </View>
     */
    renderDisclaimer() {
        const {hasConsented } = this.state;
        return (
            <Card style={styles.card}>
                <Card.Content>
                    <Title style={styles.instructions}>
                        Terms and conditions
                    </Title>
                    <ScrollView contentContainerStyle={styles.consent}
                    showsHorizontalScrollIndicator={true}>
                        <View style={{flex: 1}}>
                        <Paragraph>
                            The eviction and small claims court record information provided through this internet-based
                            website (“site”) is a free public service.
                            The information accessible on the site consists solely of publicly available eviction and small
                            claims court data provided to the site sponsors by Bexar County Information Services and the JP
                            courts serving Bexar County.
                            Neither Bexar County nor the JP courts, judges nor their employees are in any way responsible
                            for the operation of this site.
                            Use of this search constitutes agreement with the Terms and Conditions of Use below.
                        </Paragraph>
                        <Paragraph>
                            By accessing this site and/or its information, the individual or entity (“Visitor”)
                            agrees to the Disclaimer, Terms and Conditions of Use, and to use this site, its information,
                            or both in accordance with all applicable local ordinances as well as Texas and federal laws.

                            All information available through this site is provided “as is;” subject to changes and
                            updates at any time; and provided with no warranties, express or implied, as to quality,
                            content, accuracy, validity, reliability, timeliness, or completeness. In no event shall
                            the site sponsors or Bexar County be liable for any damages, of any nature whatsoever,
                            arising out of the use of, or the inability to use this site or the site's information.
                            The site’s information is not for official use.
                            Commercial use of the site’s information is strictly prohibited.
                            The site’s information is extracted from multiple sources and is not subject to independent verification.
                            Any links to external servers do not imply any endorsement of the opinions or ideas expressed therein,
                            or guarantee the validity of the information provided.
                            We assume no liability for availability or compatibility with web site users’ software or computers.
                            Any unauthorized use or misuse of the site or the site's information by Visitor may subject Visitor
                            to civil or criminal proceedings, or both.  For legal advice, you should contact a lawyer.
                            If you disagree with this disclaimer please do not use this site
                        </Paragraph>
                        <Text>
                            {"\n"}
                            {"\n"}
                            {"\n"}
                        </Text>
                        <Text>
                            {"\n"}
                            {"\n"}
                            {"\n"}
                        </Text>
                        </View>
                    </ScrollView>
                </Card.Content>
                <Card.Actions>

                    <Button
                        mode="contained"
                        color={colors.accent}
                        onPress={() => { this.props.navigation.navigate('Search'); }}
                        disabled={!hasConsented}>
                        Go to Search
                    </Button>
                </Card.Actions>
            </Card>
        )
    }
    renderSplash() {
        const {hasConsented } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#4A6572"
                />
                <Card style={styles.card}>
                    <Card.Content  style={{flex: 4}}>
                        <Title style={styles.instructions}>
                            Terms and conditions
                        </Title>
                        <ScrollView contentContainerStyle={styles.consent}>
                            <View>
                                <Paragraph>
                                    The eviction and small claims court record information provided through this internet-based
                                    website (“site”) is a free public service.
                                    The information accessible on the site consists solely of publicly available eviction and small
                                    claims court data provided to the site sponsors by Bexar County Information Services and the JP
                                    courts serving Bexar County.
                                    Neither Bexar County nor the JP courts, judges nor their employees are in any way responsible
                                    for the operation of this site.
                                    Use of this search constitutes agreement with the Terms and Conditions of Use below.
                                </Paragraph>
                                <Paragraph>
                                    By accessing this site and/or its information, the individual or entity (“Visitor”)
                                    agrees to the Disclaimer, Terms and Conditions of Use, and to use this site, its information,
                                    or both in accordance with all applicable local ordinances as well as Texas and federal laws.

                                    All information available through this site is provided “as is;” subject to changes and
                                    updates at any time; and provided with no warranties, express or implied, as to quality,
                                    content, accuracy, validity, reliability, timeliness, or completeness. In no event shall
                                    the site sponsors or Bexar County be liable for any damages, of any nature whatsoever,
                                    arising out of the use of, or the inability to use this site or the site's information.
                                    The site’s information is not for official use.
                                    Commercial use of the site’s information is strictly prohibited.
                                    The site’s information is extracted from multiple sources and is not subject to independent verification.
                                    Any links to external servers do not imply any endorsement of the opinions or ideas expressed therein,
                                    or guarantee the validity of the information provided.
                                    We assume no liability for availability or compatibility with web site users’ software or computers.
                                    Any unauthorized use or misuse of the site or the site's information by Visitor may subject Visitor
                                    to civil or criminal proceedings, or both.  For legal advice, you should contact a lawyer.
                                    If you disagree with this disclaimer please do not use this site
                                </Paragraph>
                                <Text>
                                    {"\n"}
                                    {"\n"}
                                    {"\n"}
                                </Text>
                                <Text>
                                    {"\n"}
                                    {"\n"}
                                    {"\n"}
                                </Text>
                            </View>
                        </ScrollView>
                    </Card.Content>
                    <Card.Actions  style={{flex: 1}}>
                        <View style={{flex: 1}}>
                            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', paddingBottom: 16}}>
                                <Checkbox
                                    status={this.state.hasConsented ? 'checked' : 'unchecked'}
                                    onPress={() => { this.onConsentChecked(); }}
                                />
                                <Text>I agree to the terms and conditions</Text>
                            </View>
                            <Button
                                mode="contained"
                                color={colors.accent}
                                onPress={() => { this.props.navigation.navigate('Search'); }}
                                disabled={!hasConsented}>
                                Go to Search
                            </Button>
                            <Button
                                color={colors.accent}
                                onPress={() => {this._retrieveData(); }}>
                                Get Consent
                            </Button>
                        </View>
                    </Card.Actions>
                </Card>
            </View>


        );
    }
    _storeData = async () => {
        try {
            await AsyncStorage.setItem('hasConsented', '' + !this.state.hasConsented);
        } catch (error) {
            // Error saving data
        }
    };
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
    onConsentChecked = () => {
        this.setState({ hasConsented: !this.state.hasConsented });
        this._storeData();
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    card: {
        margin: 16,
    },
    heading: {
        fontSize: 20,
        textAlign: 'center',
    },
    instructions: {
        textAlign: 'center',
        marginBottom: 5,
        fontWeight: '700',
        color: 'black',
    },
    consent: {
        margin: 16,
        marginTop: 32,
        backgroundColor: '#F5FCFF'
    },
});

const colors = {
    accent: '#F9AA33',
};
