import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ActivityIndicator,
    FlatList,
    KeyboardAvoidingView, AsyncStorage
} from 'react-native';
import { Eviction } from "./eviction.model"
import EvictionListItem from "./EvictionListItem";
import {
    Button,
    Card,
    Text,
    Checkbox,
    Dialog,
    Portal,
    TextInput,} from "react-native-paper";
// import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Icon from 'react-native-vector-icons/FontAwesome';

class LogoTitle extends React.Component {
    render() {
        return (
            <View style={{flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',}}>
                <Text style={styles.title}>Eviction Record Search</Text>

            </View>
        );
    }
}

type Props = {};
export default class EvictionListScreen extends Component<Props> {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <LogoTitle/>,
            headerRight: (
                <Button
                    onPress={navigation.getParam('goToContact')}
                style={{padding: 0, margin: 0}}>
                    <Icon name="info"
                          size={24}
                          color={'white'}/>
                </Button>
            ),
            headerStyle: {
                backgroundColor: '#4A6572',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        };
    };
    constructor() {
        super();
        this.state = {
            results: null,
            visible: false,
            hasConsented: true,
            searching: false,
            firstName: '',
            lastName: '',
            sentFirstName: '',
            sentLastName: '',
            useSoundex: true,
            filings: true,
            judgments: true,
        }
    }
    componentDidMount() {
        this.props.navigation.setParams({ goToContact: this._goToContacts});
    }

    _showDialog = () => this.setState({ visible: true });

    _hideDialog = () => this.setState({ visible: false });

    _doSearch() {
        this.setState({searching: true});
        this.getEvictionsFromApi().then(evictions => {
            // let evictionStr = JSON.parse(evictions);
            let evictionsArr = [];
            for (const eviction of evictions) {
                evictionsArr.push(new Eviction(
                    eviction.idJudgementsAndFilings,
                    eviction.DefendantFirstName,
                    eviction.DefendantLastName,
                    eviction.DefendantAddress,
                    eviction.DefendantCity,
                    eviction.DefendantState,
                    eviction.DefendantZIP,
                    eviction.DefendantDOB,
                    eviction.PlaintiffName,
                    eviction.PlaintiffAddress,
                    eviction.PlaintiffCity,
                    eviction.PlaintiffState,
                    eviction.PlaintiffZIP,
                    eviction.PlaintiffPhone,
                    eviction.PlaintiffCorp,
                    eviction.CaseFileDate,
                    eviction.CaseNumber,
                    eviction.CaseStatusCD,
                    eviction.CaseStatus,
                    eviction.CaseTypeDescription,
                    eviction.DispositionDate,
                    eviction.DispositionAmount,
                    eviction.Disposition,
                    eviction.PersonAliasID));
            }
            this.setState({
                results: evictionsArr,
                searching: false,
                sentFirstName: this.state.firstName,
                sentLastName: this.state.lastName,
            });
        });
    }
    // {this.renderDisclaimer()}
    async getEvictionsFromApi() {
        let defendantFirstName = this.state.firstName;
        let defendantLastName = this.state.lastName;
        let soundexCheck = this.state.useSoundex;
        let useFilings = this.state.filings;
        let useJudgments = this.state.judgments;
        try {
            let response = await fetch('https://evictionssearchn-1516845969440.appspot.com/evictions/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    defendantFirstName: defendantFirstName,
                    defendantLastName: defendantLastName,
                    soundexCheck: soundexCheck,
                    useFilings: useFilings,
                    useJudgments: useJudgments
                }),
            });
            let responseJson = await response.json();
            console.log(responseJson.items);
            return responseJson.items;
        } catch (error) {
            console.error(error);
        }
    }
    render() {
        return (
                <View style={styles.container} >
                    {this.renderList()}
                </View>
        );
    }
    renderList() {
                return (
                        <FlatList
                            data={this.state.results}
                            renderItem={this._renderItem}
                            ListHeaderComponent={this.renderHeader()}
                            keyExtractor={(item, index) => index.toString()}
                        />
                )
    }
// ItemSeparatorComponent={this.renderSeparator}
    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "14%"
                }}
            />
        );
    };
    renderHeader = () => {
        const {hasConsented, firstName, lastName } = this.state;
        return (
            <View>
            <Card style={styles.infoCard}>
                <Card.Content>
                <KeyboardAvoidingView style={styles.search}>
                    <TextInput label='Defendant First Name'
                               mode={"outlined"}
                               style={{marginTop: 12}}
                               value={firstName}
                               onChangeText={firstName => this.setState({ firstName })}/>
                    <TextInput label='Defendant Last Name'
                               mode={"outlined"}
                               value={lastName}
                               style={{marginBottom: 12}}
                               onChangeText={lastName => this.setState({ lastName })}/>
                    <Button
                        mode="contained"
                        color={colors.accent}
                        onPress={() => this._doSearch()}
                        disabled={!hasConsented || !this.state.firstName || !this.state.lastName}>
                        Search
                    </Button>

                    <Button
                        color={colors.accent}
                        onPress={this._showDialog}>
                        Options
                    </Button>
                    <View>
                        <Portal>
                            <Dialog
                                visible={this.state.visible}
                                onDismiss={this._hideDialog}>
                                <Dialog.Title>Search Options</Dialog.Title>
                                <Dialog.Content>
                                    <Text style={{color: 'black'}}>Include Filings in Results:</Text>
                                    <Checkbox.Android
                                            status={this.state.filings ? 'checked' : 'unchecked'}
                                            onPress={() => { this.setState({ filings: !this.state.filings }); }}
                                        />
                                    <Text>Search for Similar Sounding Names:</Text>
                                    <Checkbox.Android
                                        status={this.state.useSoundex ? 'checked' : 'unchecked'}
                                        onPress={() => { this.setState({ useSoundex: !this.state.useSoundex }); }}
                                    />
                                </Dialog.Content>
                                <Dialog.Actions>
                                    <Button onPress={this._hideDialog}>Done</Button>
                                </Dialog.Actions>
                            </Dialog>
                        </Portal>
                    </View>

                </KeyboardAvoidingView>
                </Card.Content>
            </Card>
        {this._renderSearchOrNoResults()}
            </View>

        )
    };

    /*
                        <Button
                        color={colors.primary}
                        onPress={() => { this._resetConsent() }}>
                        Reset Consent
                    </Button>
                    <Button
                        raised
                        primary
                        onPress={() => { this.props.navigation.navigate('Splash'); }}>
                        Back to splash
                    </Button>
    <Button
                        raised
                        primary
                        onPress={() => { this.props.navigation.navigate('Splash'); }}>
                        Back to splash
                    </Button>
     */
    /*
     <View>
                                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                                            <Checkbox
                                                status={this.state.filings ? 'checked' : 'unchecked'}
                                                onPress={() => { this.setState({ filings: !this.state.filings }); }}
                                            />
                                            <Text>Include Filings in Results</Text>
                                        </View>
                                        <Paragraph/>
                                        <Paragraph/>
                                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                                            <Checkbox
                                                status={this.state.useSoundex ? 'checked' : 'unchecked'}
                                                onPress={() => { this.setState({ useSoundex: !this.state.useSoundex }); }}
                                            />
                                            <Text>Search for similar sounding names</Text>
                                        </View>
                                    </View>
     */
    _renderItem = ({item}) => (
        <EvictionListItem
            item={item}
            onPressItem={this._onPressItem}
            ItemSeparatorComponent={this.renderSeparator}
        />
    );
    _onPressItem = (eviction) => {
        console.log('onPressItem: item: ' + eviction);
        this.props.navigation.navigate('Detail', {eviction: eviction})
    };

    _renderSearchOrNoResults() {
        if (this.state.searching) {
            return (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        }
        else {
            if(!this.state.results) {
               /* return (
                    <View style={styles.container}>
                        <Title style={styles.welcome}>Search by Defendant Name</Title>
                    </View>
                )*/
            } else if(this.state.results.length === 0){
                return (
                    <View style={styles.container}>
                        <Text style={styles.instructions}>No records found for {this.state.sentFirstName} {this.state.sentLastName}</Text>
                    </View>
                )
            } else {
                return (
                    <View style={styles.container}>
                        <Text style={styles.instructions}>
                            {this.state.results.length} records found for {this.state.sentFirstName} {this.state.sentLastName}</Text>
                    </View>
                )
            }
        }
    }
    _resetConsent = async () => {
        try {
            await AsyncStorage.setItem('hasConsented', 'false');
            console.log('list, hasconsented is now false')
        } catch (error) {
            // Error saving data
        }
    };

    _goToContacts = () => {
        this.props.navigation.navigate('Contact');
    }
}



const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#F5FCFF',
    },
    loadingContainer: {
        // flex: 1,
        // justifyContent: 'flex-start',
        paddingTop: 8,
        backgroundColor: '#F5FCFF',
    },
    results: {
        // flex: 2,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: '#11FF11',
    },
    search: {
        marginLeft: 20,
        marginRight: 20,
        // marginBottom: 20,
        // flex: 1,
        // alignItems: 'stretch',
        // justifyContent: 'flex-start',
        // backgroundColor: '#1188FF',
    },
    welcome: {
        fontSize: 24,
        textAlign: 'center',
        marginTop: 10,
    },
    title: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        paddingLeft: 16,
        fontWeight: '500',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    collapsibleContent: {
        padding: 20,
        backgroundColor: '#fff',
        textAlign: 'left',
    },
    infoCard: {
        margin: 16,
    },
});
const colors = {
    accent: '#F9AA33',
};
