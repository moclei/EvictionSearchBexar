import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    ScrollView
} from 'react-native';
import {
    Card, Paragraph, Text,
    Title,
} from 'react-native-paper';

export default class MakeReadyListItem extends React.PureComponent {
    constructor() {
        super();
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'About & Contact',
            headerStyle: {
                backgroundColor: '#4A6572',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        };
    };

    render() {
        return (
            <ScrollView>
            <Card style={styles.infoCard}>
                <Card.Content>
                    <View  style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                        <Title>About Bexar County Eviction Search</Title>
                        <Paragraph> Search Eviction Records in Bexar county dating from 2010 to present
                        </Paragraph>
                        <Paragraph>
                            These records are provided as is, directly from free public records. Anyone can obtain these records, this application
                            simply provides an interface to search them. The records are updated every Monday although this is done on a voluntary basis
                            and you should not depend on it.
                        </Paragraph>
                        <Paragraph>
                            The records can be broken down into two types: Judgements and Filings. With judgements you can see whether the ruling was for the
                            tenant or the landlord, and if it was for the landlord, how much was awarded as "disposition". Alternatively, Filings are simply
                            a record of who was filed on for eviction. Filing records are no indication of any wrong doing. Anyone can file on any tenant, it
                            can happen by mistake, by malicious prosecution, it can happen without good cause. For this reason, I recommend not using Filing records
                            as a basis to deny a potential renter.
                        </Paragraph>
                        <Paragraph>
                            Someone can have an eviction record and still be a good tenant. Use this information wisely.
                        </Paragraph>
                    </View>
                </Card.Content>
            </Card>
            <Card style={styles.infoCard}>
                <Card.Content>
                    <View  style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                <Title>About the Author</Title>
                    <Text  style={{fontWeight: "bold"}}>Marc O Cleirigh</Text>
                    <Paragraph> I am a full stack software engineer with over 12 years experience in application development.
                </Paragraph>
                <Image
                    style={{width: 128, height: 128}}
                    source={require('./img/me_lg.png')}
                    />
                </View>
                </Card.Content>
            </Card>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
    listitem: {
        flex: 1,
        paddingVertical: 0,
        paddingHorizontal: 8,
        marginHorizontal: 8
    },
    containerToolbar: {
        flex: 1,
        //justifyContent: 'center',
        justifyContent: 'flex-start',
        // https://github.com/facebook/react-native/issues/2957#event-417214498
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
    toolbar: {
        backgroundColor: '#e9eaed',
        height: 56,
    },
    infoCard: {
        margin: 16,
        flex: 1
    },
});