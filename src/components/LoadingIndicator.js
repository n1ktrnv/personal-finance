import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import colors from '../res/colors';

export default function LoadingIndicator() {
    return (
        <View style={styles.container}>
            <ActivityIndicator animating={true} color={colors.primary} size={40}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});