import React, {useState} from 'react';
import {EditableSpan} from '../common/EditableSpan/EditableSpan';

export const Junior = () => {

    let [value, setValue] = useState('EditableSpan');
    let [error, setError] = useState<string | null>(null);

    const onChange = (value: string) => {
        if (value.trim()) {
            setValue(value);
        } else {
            alert('error');
            setError('error');
        }
    };


    return (
        <div>
            <h3>Junior</h3>
            <EditableSpan value={value}
                          onChange={onChange}
                          error={error}
            />
            <button>X</button>
            <button>X</button>
        </div>
    )
};
