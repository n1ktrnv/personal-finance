import React from 'react';
import {StyleSheet} from 'react-native';
import {Account, Category, CurrencyInput, DateInput, RadioButtons, Selector, TimeInput} from '../../components';


export default function Form(props) {
    const radioButtons = [
        {label: 'Расход', value: 'expense'},
        {label: 'Доход', value: 'income'}
    ];

    const renderAccount = ({name,  balance, color, icon}) =>
        <Account name={name} balance={balance} color={color} icon={icon}/>;

    const renderCategory = ({name, color, icon}) =>
        <Category name={name} color={color} icon={icon}/>;

    return (
        <>
            <RadioButtons
                value={props.type}
                onValueChange={props.onChangeType}
                buttons={radioButtons}
                style={styles.input}
            />
            <CurrencyInput
                label="Сумма"
                value={props.amount}
                onChangeText={props.onChangeAmount}
                maxLength={13}
                style={styles.input}
            />
            <Selector
                label="Счет"
                value={props.accountName}
                data={props.accounts}
                renderItem={renderAccount}
                onChangeValue={props.onChangeAccount}
                style={styles.input}
            />
            <Selector
                label="Категория"
                value={props.categoryName}
                data={props.categories}
                renderItem={renderCategory}
                onChangeValue={props.onChangeCategory}
                style={styles.input}
            />
            <DateInput
                label="Дата"
                value={props.date}
                onChange={props.onChangeDate}
                style={styles.input}
            />
            <TimeInput
                label="Время"
                value={props.time}
                onChange={props.onChangeTime}
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