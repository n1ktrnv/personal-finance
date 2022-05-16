import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import EntityItem from './EntityItem';
import styling from '../res/styling';
import colors from "../res/colors";
import {getMonetaryFormat, trim} from '../utils';


export default function Operation(props) {
    const leftBlock = (
        <View style={styles.leftBlock}>
            <Text numberOfLines={1} style={styles.name}>{props.name}</Text>
            <Text numberOfLines={1} style={styles.account}>{props.account}</Text>
        </View>
    );

    let amountText = Math.abs(props.amount);
    let amountColorStyle = {color: 'black'};
    if (props.amount > 0) {
        amountColorStyle = {color: colors.success};
        amountText = '+' + props.amount;
    }

    const rightBlock = (
        <Text style={[styling.text, amountColorStyle]}>{getMonetaryFormat(amountText)}</Text>
    );

    return (
        <EntityItem
            onPress={props.onPress}
            onLongPress={props.onLongPress}
            color={props.color}
            icon={props.icon}
            leftBlock={leftBlock}
            rightBlock={rightBlock}
            style={props.style}
            leftBlockStyles={{width: '45%'}}
        />
    );
}

const styles = StyleSheet.create({
    name: {...styling.boldText, ...{
        marginBottom: 4,
    }},
    account: {...styling.text, ...{
        color: colors.grey50,
    }}
});
