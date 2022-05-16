import React from 'react';
import DateTimeInput from './DateTimeInput';
import {formatTime} from '../utils';

export default function TimeInput(props) {
    return (
        <DateTimeInput
            label={props.label}
            mode="time"
            value={props.value}
            format={formatTime}
            onChange={props.onChange}
            style={props.style}
        />
    );
}