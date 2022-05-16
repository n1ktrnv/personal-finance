import React from 'react';
import {StyleSheet, Text} from 'react-native';
import EntityItem from './EntityItem';
import styling from '../res/styling';
import {getMonetaryFormat} from '../utils';

export default function Account(props) {
    const leftBlock = (
        <>
            <Text numberOfLines={1} style={styles.name}>{props.name}</Text>
            <Text style={styling.text}>{
                props.balance < 0 ? '−' + getMonetaryFormat(Math.abs(props.balance)) :
                    getMonetaryFormat(props.balance)
            }</Text>
        </>
    );
    return (
        <EntityItem
            onPress={props.onPress}
            onLongPress={props.onLongPress}
            color={props.color}
            icon={props.icon}
            leftBlock={leftBlock}
            style={props.style}
        />
    );
}

const styles = StyleSheet.create({
    name: {...styling.boldText, ...{
        marginBottom: 4,
    }},
});