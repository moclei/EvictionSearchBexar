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

    static navigationOptions = ({navigation}) => {
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
                        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                            <Title>About Bexar County Eviction Search</Title>
                            <Paragraph>This app allows you to search small claims court records in Bexar County, Texas
                                dating from 2010 to present
                            </Paragraph>
                            <Paragraph>
                                The records are provided as is, directly from free public records provided by the
                                Justice Precincts in Bexar County.
                                The records are not modified or reviewed before being uploaded. New records from the
                                previous week are uploaded typically every Monday. Sometimes
                                a week is missed and caught up with the following week. Sometimes the records are
                                uploaded on a Sunday.
                            </Paragraph>
                        </View>
                    </Card.Content>
                </Card>
                <Card style={styles.infoCard}>
                    <Card.Content>
                        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                            <Title>About Eviction Records</Title>
                            <Paragraph>
                                The records can be broken down into two types: Judgements and Filings. With judgements
                                you can see whether the ruling was for the
                                tenant or the landlord, and if it was for the landlord, how much was awarded as
                                "disposition". Alternatively, Filings are simply
                                a record of who was filed on for eviction. Filing records are no indication of any wrong
                                doing. Anyone can file on any tenant, it
                                can happen by mistake, by malicious prosecution, it can happen without good cause.
                                Similarly, someone can have judgements against them
                                on their record and still be a good customer. Having a judgement does not mean they did
                                not subsequently pay, and stay in the home. For
                                records of who was actually evicted, you would need to see the Writ of Possession filing
                                records, which are not yet available from the JP Courts.
                                For this reason, I recommend not using Filing or Judgement records as a basis to deny a
                                potential renter.
                            </Paragraph>
                            <Paragraph style={{fontWeight: "bold"}}>
                                Someone can have an eviction record and still be a good tenant. Use this information
                                wisely.
                            </Paragraph>
                        </View>
                    </Card.Content>
                </Card>
                <Card style={styles.infoCard}>
                    <Card.Content>
                        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                            <Title>About the Author</Title>
                            <Text style={{fontWeight: "bold"}}>Marc O Cleirigh</Text>
                            <Paragraph>
                                I am a full stack software engineer with over 12 years experience in application
                                development.
                            </Paragraph>
                            <Image
                                style={{width: 128, height: 128}}
                                source={require('./img/me_lg.png')}
                            />
                        </View>
                    </Card.Content>
                </Card>
                <Card style={styles.infoCard}>
                    <Card.Content>
                        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                            <Title>Contact Me</Title>
                            <Text style={{fontWeight: "bold"}}>Contact</Text>
                            <Paragraph>marc.ocleirigh@gmail.com
                            </Paragraph>
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