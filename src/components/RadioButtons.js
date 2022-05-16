import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {colors} from '../res/lists';
import resColor from '../res/colors';
import styling from "../res/styling";

export default function RadioButtons(props) {
    return (
        <View style={props.style}>
            <RadioButton.Group onValueChange={props.onValueChange} value={props.value}>
                {props.buttons.map((button, index) =>
                    <View style={styles.buttonContainer} key={index}>
                        <RadioButton value={button.value} color={resColor.primary}/>
                        <Text onPress={() => props.onValueChange(button.value)} style={styles.label}>{button.label}</Text>
                    </View>
                )}
            </RadioButton.Group>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {...styling.text, ...{
        flex: 1,
    }}
});
