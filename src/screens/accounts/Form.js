import React from 'react';
import {StyleSheet} from 'react-native';
import {ColorPicker, CurrencyInput, IconPicker, Input, Checkbox} from '../../components';
import {accountIcons, colors} from '../../res/lists';

export default function Form(props) {
    return (
        <>
            <Input
                label="Название счета"
                value={props.name}
                onChangeText={props.onChangeName}
                maxLength={25}
                style={styles.input}
            />
            <CurrencyInput
                label="Баланс"
                value={props.balance}
                onChangeText={props.onChangeBalance}
                maxLength={13}
                style={styles.input}
            />
            <Checkbox
                label="Отрицательный баланс"
                checked={props.negativeBalance}
                onPress={props.onChangeNegativeBalance}
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
                icons={accountIcons}
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