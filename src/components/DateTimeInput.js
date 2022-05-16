import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import BlockedInput from './BlockedInput';

export default function DateTimeInput(props) {
    const [open, setOpen] = useState(false);
    this.state = {open: false};

    const onPress = () => {
        setOpen(true);
    }

    const onChange = (event, date) => {
        setOpen(false);
        props.onChange(date);
    }

    return (
        <>
            <BlockedInput
                value={props.format(props.value)}
                label={props.label}
                onPress={onPress}
                style={props.style}
            />
            {
                open &&
                <DateTimePicker
                    maximumDate={new Date()}
                    value={props.value}
                    mode={props.mode}
                    onChange={onChange}
                />
            }
        </>
    );
}