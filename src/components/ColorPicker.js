import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HorizontalItemPicker from "./HorizontalItemPicker";


export default function ColorPicker(props) {
    const renderItem = (color) => {
        return (
            <View style={[styles.circle, {backgroundColor: color}, props.style]}>
                <TouchableRipple style={styles.touchable} onPress={() => props.onChangeColor(color)}>
                    <>
                        {props.color === color ? <Icon name="check" color="#FFFFFF" size={24}/> : null}
                    </>
                </TouchableRipple>
            </View>
        );
    }

    return (
        <HorizontalItemPicker
            label={props.label}
            list={props.colors}
            renderItem={renderItem}
        />
    );
}

const styles = StyleSheet.create({
    circle: {
        borderRadius: 25,
        overflow: 'hidden',
    },
    touchable: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});