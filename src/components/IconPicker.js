import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HorizontalItemPicker from './HorizontalItemPicker';


export default function IconPicker(props) {
    const renderItem = (icon) => {
        return (
            <View style={[styles.circle, {backgroundColor: props.color}, props.style]}>
                <TouchableRipple style={styles.touchable} onPress={() => props.onChangeIcon(icon)}>
                    <View style={props.icon === icon ? styles.border : undefined}>
                        <Icon name={icon} color="#FFFFFF" size={24}/>
                    </View>
                </TouchableRipple>
            </View>
        );
    }

    return (
        <HorizontalItemPicker
            label={props.label}
            list={props.icons}
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
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,

    },
    border: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 45,
        height: 45,
        borderWidth: 2,
        borderColor: 'white',
        borderStyle: 'solid',
        borderRadius: 25,
    },
});