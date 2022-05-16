import React from 'react';
import {Pressable, View} from 'react-native';
import Input from './Input';


export default function BlockedInput(props) {
    return (
        <Pressable onPress={props.onPress} style={props.style}>
            <View pointerEvents="none">
                <Input label={props.label} value={props.value}/>
            </View>
        </Pressable>
    );
}