import React from 'react';
import {StyleSheet} from 'react-native';
import {ColorPicker, IconPicker, Input} from '../../components';
import {categoryIcons, colors} from '../../res/lists';

export default function Form(props) {
    return (
        <>
            <Input
                label="Название категории"
                value={props.name}
                onChangeText={props.onChangeName}
                maxLength={25}
                style={styles.input}
            />
            <ColorPicker
                label="Цвет"
                color={props.color}
                colors={colors}
                onChangeColor={props.onChangeColor}
                style={styles.input}
            />
            <IconPicker
                label="Иконка"
                icon={props.icon}
                icons={categoryIcons}
                color={props.color}
                onChangeIcon={props.onChangeIcon}
                style={styles.input}
            />
        </>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 16,
    },
});