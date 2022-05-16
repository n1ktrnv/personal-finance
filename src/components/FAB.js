import React from 'react';
import {StyleSheet} from 'react-native';
import { FAB as MaterialFAB } from 'react-native-paper';
import colors from '../res/colors';

export default function FAB(props) {
    return (
        <MaterialFAB
            label={props.label}
            icon={props.icon}
            onPress={props.onPress}
            uppercase={false}
            small
            style={styles.fab}
        />
    );
}

const styles = StyleSheet.create({
    fab: {
        backgroundColor: colors.primary,
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 0,
    },
});

FAB.defaultProps = {
    icon: 'plus'
};