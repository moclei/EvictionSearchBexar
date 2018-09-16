import React from 'react';
import {
    View,
    StyleSheet, ScrollView, Text
} from 'react-native';
import {
    Title,
    Paragraph,
    TouchableRipple, Button
} from 'react-native-paper';
import {Card} from "react-native-paper";

export default class MakeReadyListItem extends React.PureComponent {

    _onPress = () => {
        console.log("MakeReadyListItem onPress,this.props.mr: " + this.props.item);
        this.props.onPressItem(this.props.item);
    };

    render() {
        // let createdOn = this.props.item.timestamp.split(',')[0];
        // const {navigate} = this.props.navigation;
        let caseFileDate = this.props.item.caseFileDate;
        let dateStr = caseFileDate.split('T')[0];
        return (


            <Card style={styles.infoCard}>
                <Card.Content>
                        <TouchableRipple
                            onPress={this._onPress}
                            // onPress={(item) => navigate('Detail', { data: item})}
                            rippleColor="rgba(0, 0, 0, .32)">
                            <View>
                                <Title>Defendant: {this.props.item.defendantFirstName} {this.props.item.defendantLastName}</Title>
                                <Title>Case File Date: {dateStr}</Title>
                                <Paragraph>Plaintiff: {this.props.item.plaintiffName}</Paragraph>
                                <Paragraph>Address: {this.props.item.combinedDefAddress}</Paragraph>
                                <Paragraph>Case Type: {this.props.item.recordType}</Paragraph>
                                <Paragraph>Disposition: {this.props.item.disposition}</Paragraph>
                            </View>
                        </TouchableRipple>
                </Card.Content>
            </Card>



        );
    }
}

/*
<View style={styles.listitem}>
                <TouchableRipple
                    onPress={this._onPress}
                    // onPress={(item) => navigate('Detail', { data: item})}
                    rippleColor="rgba(0, 0, 0, .32)">
                    <View>
                        <Title>Defendant: {this.props.item.defendantFirstName} {this.props.item.defendantLastName}</Title>
                        <Title>Case File Date: {dateStr}</Title>
                        <Paragraph>Plaintiff: {this.props.item.plaintiffName}</Paragraph>
                        <Paragraph>Address: {this.props.item.combinedDefAddress}</Paragraph>
                        <Paragraph>Case Type: {this.props.item.recordType}</Paragraph>
                        <Paragraph>Disposition: {this.props.item.disposition}</Paragraph>
                    </View>
                </TouchableRipple>
            </View>
 */
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
    toolbar: {},
    infoCard: {
        margin: 16,
    },
});