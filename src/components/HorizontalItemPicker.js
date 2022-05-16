import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import styling from '../res/styling';

export default function HorizontalItemPicker(props) {
    return (
        <View style={props.style}>
            <Text style={styles.label}>{props.label}</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.container}
            >
                {props.list.map((item, index) => {
                    const marginRightStyle = props.list.length - 1 === index ? {marginRight: 0} : undefined;
                    return (
                        <View key={index} style={{...styles.item, ...marginRightStyle}}>
                            {props.renderItem(item)}
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    item: {
        marginRight: 12,
    },
    label: { ...styling.label, ...{
        marginLeft: 12,
        marginBottom: 12,
    }},
});