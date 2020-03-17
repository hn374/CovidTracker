import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function NewHomeScreen() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <Text style={styles.text}>Hello World</Text>
            </ScrollView>
        </View>
    );
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
    text: {

    }
  });