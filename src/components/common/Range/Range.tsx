import React from 'react';

export type RangePropsType = {
    value: number
    minValue: number
    maxValue: number
    onChange: () => void
}

export const Range: React.FC<RangePropsType> = React.memo((props) => {
    return (
        <div>

        </div>
    )
});
