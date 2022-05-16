import React from 'react';
import {Text} from 'react-native';
import EntityItem from './EntityItem';
import styling from '../res/styling';


export default function Category(props) {
    const leftBlock = (
        <Text numberOfLines={1} style={styling.boldText}>{props.name}</Text>
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