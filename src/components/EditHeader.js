import React from 'react';
import {StyleSheet, View, ScrollView, Alert} from 'react-native';
import { IconButton } from 'react-native-paper';


export default function EditHeader(props) {
    const onCloseButtonPress = () => {
        props.navigation.goBack();
    };

    const onDeleteButtonPress = () => {
        const alertButtons = [
            {text: 'Отмена', style: 'cancel'},
            {text: 'Удалить', style: 'destructive', onPress: onDelete}
        ];
        const options = {cancelable: true};
        Alert.alert(props.alertTitle, props.alertMessage, alertButtons, options);
    };

    const onApplyButtonPress = () => {
        props.onApply();
        props.navigation.goBack();
    };

    const onDelete = () => {
        props.onDelete();
        props.navigation.goBack();
    };

    const headerLeft = () => {
        return <IconButton icon="close" color='black' size={24} onPress={onCloseButtonPress}/>;
    };

    const headerRight = () => {
        return (
            <View style={styles.headerRightContainer}>
                {props.deletePossible &&
                    <IconButton icon="delete-outline" color='black' size={24} onPress={onDeleteButtonPress}/>}
                {props.applyPossible &&
                    <IconButton icon="check" color='black' size={24} onPress={onApplyButtonPress}/>}
            </View>
        );
    };

    props.navigation.setOptions({title: props.title, headerLeft, headerRight});

    return <ScrollView style={styles.container}>{props.children}</ScrollView>;
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    headerRightContainer: {
        flexDirection: 'row',
    },
});