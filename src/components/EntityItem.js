import React from 'react';
import { StyleSheet, View } from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../res/colors';


export default function EntityItem(props) {
    return (
        <TouchableRipple
            rippleColor={colors.rippleBlackColor}
            onPress={props.onPress}
            onLongPress={props.onLongPress}
            style={[styles.container, props.style]}
        >
            <>
                <View style={styles.icon}>
                    <View style={[styles.iconContainer, {backgroundColor: props.color}]}>
                        <Icon name={props.icon} color="white" size={24}/>
                    </View>
                </View>
                <View style={[props.leftBlockStyles, styles.leftBlock]}>
                    {props.leftBlock}
                </View>
                <View style={styles.rightBlock}>
                    {props.rightBlock}
                </View>
            </>
        </TouchableRipple>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 24,
        backgroundColor: 'white',
    },
    iconContainer: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    icon: {
        marginRight: 12,
    },
    rightBlock: {
        marginLeft: 'auto',
    }
});