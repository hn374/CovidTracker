import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { GlobalDetailCard } from '../components/GlobalDetailCard';
import { ScrollView } from 'react-native-gesture-handler';

export default class NewHomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cases: 0,
            deaths: 0,
            recovered: 0
        };

        this.getCaseInformation = this.getCaseInformation.bind(this);
    }

    componentDidMount() {
        // Change the state every second
        this.timerID = setInterval(() => this.getCaseInformation(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    // Function to call the corona virus API
    async getCaseInformation() {
        try {
            let response = await fetch('https://coronavirus-19-api.herokuapp.com/all');
            let responseJson = await response.json();

            this.setState({
                cases: responseJson.cases,
                deaths: responseJson.deaths,
                recovered: responseJson.recovered
            });
          } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    {/* <Text style={styles.text}>Hello World</Text> */}
                    <GlobalDetailCard style={styles.detailCards} name="Number of Cases" caseNumber={this.state.cases}></GlobalDetailCard>
                    <GlobalDetailCard style={styles.detailCards} name="Number of Deaths" caseNumber={this.state.deaths}></GlobalDetailCard>
                    <GlobalDetailCard style={styles.detailCards} name="Number of Recovered" caseNumber={this.state.recovered}></GlobalDetailCard>
                </ScrollView>
            </View>
        );
    }
}

NewHomeScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: 30,
    },
    detailCards: {
        justifyContent: 'center',
        textAlign: 'center',
    }
  });