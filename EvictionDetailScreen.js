import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    ScrollView
} from 'react-native';
import {
    Title,
    Paragraph,
    Card,
    CardContent,
    Text
} from 'react-native-paper';

export default class EvictionDetailScreen extends Component {
    constructor() {
        super();
        this.state = {
            eviction: null,
        }
    }

   static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            headerTitle: params ? params.eviction.defendantFirstName + ' ' + params.eviction.defendantLastName: '',
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
        const eviction = this.props.navigation.getParam('eviction', {});
        if (eviction.caseFileDate) {
            let caseFileDate = eviction.caseFileDate;
            let dateStr = caseFileDate.split('T')[0];
            return (
                <ScrollView>
                    <Card style={styles.infoCard}>
                        <Card.Content>
                            <Title>Case Information</Title>
                            <Paragraph>
                                <Text  style={{fontWeight: "bold"}}>Case File Date: </Text>
                                <Text>{dateStr}</Text>
                            </Paragraph>
                            {this.renderRecordType()}
                            <Paragraph>
                                <Text  style={{fontWeight: "bold"}}>Case Status: </Text>
                                <Text>{eviction.caseStatus}</Text>
                            </Paragraph>
                            <Paragraph>
                                <Text  style={{fontWeight: "bold"}}>Case Number: </Text>
                                <Text>{eviction.caseNumber}</Text>
                            </Paragraph>
                        </Card.Content>
                    </Card>

                    {this.renderDisposition()}

                    <Card  style={styles.infoCard}>
                        <Card.Content>
                            <Title>Defendant</Title>
                            <Paragraph>
                                <Text  style={{fontWeight: "bold"}}>First Name: </Text>
                                <Text>{eviction.defendantFirstName}</Text>
                            </Paragraph>
                            <Paragraph>
                                <Text  style={{fontWeight: "bold"}}>Last Name: </Text>
                                <Text>{eviction.defendantLastName}</Text>
                            </Paragraph>
                            <Paragraph>
                                <Text  style={{fontWeight: "bold"}}>Address: </Text>
                                <Text>{eviction.combinedDefAddress}</Text>
                            </Paragraph>
                            {this.renderDefendantDOB}
                        </Card.Content>
                    </Card>

                    <Card  style={styles.infoCard}>
                        <Card.Content>
                            <Title>Plaintiff</Title>
                            <Paragraph>
                                <Text  style={{fontWeight: "bold"}}>Name: </Text>
                                <Text>{eviction.plaintiffName}</Text>
                            </Paragraph>
                            <Paragraph>
                                <Text  style={{fontWeight: "bold"}}>Address: </Text>
                                <Text>{eviction.combinedPlAddress}</Text>
                            </Paragraph>
                            <Paragraph>
                                <Text  style={{fontWeight: "bold"}}>Phone: </Text>
                                <Text>{eviction.plaintiffPhone}</Text>
                            </Paragraph>
                            <Paragraph>
                                <Text  style={{fontWeight: "bold"}}>Plaintiff is a corporation? </Text>
                                <Text>{eviction.plaintiffCorp}</Text>
                            </Paragraph>
                            <Paragraph>
                                <Text  style={{fontWeight: "bold"}}>Plaintiff ID Code </Text>
                                <Text>{eviction.personAliasId}</Text>
                            </Paragraph>
                        </Card.Content>
                    </Card>

                </ScrollView>
            );
        }
    }

     renderDisposition() {
        const eviction = this.props.navigation.getParam('eviction', {});
        if(eviction.recordType === 'JUDGEMENT'){
            let dispDateStr = '---';
            if(eviction.dispositionDate){
                let dispDate = eviction.dispositionDate;
                let dispDateStr = dispDate.split('T')[0];
            }
            return (
                    <Card  style={styles.infoCard}>
                        <Card.Content>
                            <Title>Disposition:</Title>
                            <Paragraph>Disposition Date: {dispDateStr}</Paragraph>
                            <Paragraph>Disposition: {eviction.disposition}</Paragraph>
                            <Paragraph>Disposition Amount: ${eviction.dispositionAmount}</Paragraph>
                        </Card.Content>
                    </Card>
            )
        }
    }
    renderDefendantDOB() {
        const eviction = this.props.navigation.getParam('eviction', {});
        if(eviction.defendantDOB){
            return (
                <Paragraph>
                    <Text  style={{fontWeight: "bold"}}>Defendant Date of Birth: </Text>
                    <Text>{eviction.defendantDOB}</Text>
                </Paragraph>
            )
        } else {
            return (
                <Paragraph>
                    <Text  style={{fontWeight: "bold"}}>No Date of Birth Recorded for Defendant</Text>
                </Paragraph>
            )
        }
    }
    renderRecordType() {
        const eviction = this.props.navigation.getParam('eviction', {});
        if(eviction.recordType){
            return (
                <Paragraph>
                    <Text  style={{fontWeight: "bold"}}>Record Type: </Text>
                    <Text>{eviction.recordType}</Text>
                </Paragraph>
            )
        } else {
            return (
                <Paragraph>
                    <Text  style={{fontWeight: "bold"}}>Record Type: </Text>
                    <Text>Unknown</Text>
                </Paragraph>
            )
        }
    }
}

function showObject(obj, append: string) {
    let result = "";
    for (let p in obj) {
        if( obj.hasOwnProperty(p) ) {
            result += append + ": " + p + " , " + obj[p] + "\n";
        }
    }
    console.log(result);
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
    },
});
/*<Icon.ToolbarAndroid
                   title="Make Ready Details"
                   titleColor="black"
                   style={styles.toolbar}
                   navIconName="md-arrow-back"
                   onIconClicked={() => navigate('Home', { data: 'Jane' })}
               >
               </Icon.ToolbarAndroid>*/