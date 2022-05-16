import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Checkbox as MaterialCheckbox} from 'react-native-paper';
import resColors from '../res/colors';
import styling from "../res/styling";


export default function Checkbox(props) {
    return (
        <View style={[styles.container, props.style]} onPress={props.onPress}>
            <MaterialCheckbox
                status={props.checked ? 'checked' : 'unchecked'}
                color={resColors.primary}
                onPress={props.onPress}
            />
            <Text onPress={props.onPress} style={styling.text}>{props.label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {...styling.text, ...{
        flex: 1
    }}
});
