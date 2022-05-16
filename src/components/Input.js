import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import colors from "../res/colors";


export default function Input(props) {
    return (
        <TextInput
            value={props.value}
            keyboardType={props.type}
            label={props.label}
            onChangeText={props.onChangeText}
            maxLength={props.maxLength}
            mode="outlined"
            outlineColor={colors.grey10}
            activeOutlineColor={colors.primary}
            style={[styles.textInput, props.style]}
        />
    );
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#FFFFFF',
    },
});