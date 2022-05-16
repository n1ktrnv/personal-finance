import React, {useState} from 'react';
import {createNumberMask, formatWithMask} from 'react-native-mask-input';
import Input from './Input';


const mask = createNumberMask({
    prefix: ['₽', ' '],
    delimiter: ' ',
    precision: 0,
});

export default function CurrencyInput(props) {
    const formatMask = (text) => formatWithMask({text, mask});
    const onChangeText = (text) => props.onChangeText(parseInt(formatMask(text).unmasked).toString());

    return (
        <Input
            label={props.label}
            value={formatMask(props.value).masked}
            maxLength={props.maxLength}
            type="numeric"
            onChangeText={onChangeText}
            style={props.style}
        />
    );
}