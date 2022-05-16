import React from 'react';
import DateTimeInput from './DateTimeInput';
import {formatDate} from '../utils';

export default function DateInput(props) {
    return (
        <DateTimeInput
            label={props.label}
            mode="date"
            value={props.value}
            format={formatDate}
            onChange={props.onChange}
            style={props.style}
        />
    );
}