import React, {useCallback} from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import style from './Range.module.css'

export type RangePropsType = {
    value: number | number[]
    minValue: number
    maxValue: number
    onChange: (event: any, newValue: number | number[]) => void
}

export const Range: React.FC<RangePropsType> = React.memo((props) => {

    const onChangeRange = useCallback((event: any, newValue: number | number[]) => {
        props.onChange(event, newValue);
    }, [props.onChange]);

    return (
        <div className={style.sliderBlock}>
            <Typography id="non-linear-slider" gutterBottom className={style.text}>
                Volume range
            </Typography>
            <div className={style.wrapSlider}>
                <span>MIN</span>
                <Slider className={style.slider}
                        value={props.value}
                        min={props.minValue}
                        max={props.maxValue}
                        onChange={onChangeRange}
                        valueLabelDisplay="auto"
                        aria-labelledby="non-linear-slider"
                />
                <span>MAX</span>
            </div>

        </div>
    );
});


