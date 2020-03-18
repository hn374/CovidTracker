import * as React from 'react';
import { Text, View } from 'react-native';

export function GlobalDetailCard(props) {
    return (
    <View>
        <Text>{ props.name }</Text>
        <Text>{ props.caseNumber }</Text>
    </View>)
}
