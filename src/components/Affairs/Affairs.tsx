import s from './Affairs.module.css'
import React from 'react';
import {Button} from '../common/Button/Button';


export type AffairsType = {
    id: number
    name: string
    priority: string

}
export type AffairsPropsType = {
    affairs: Array<AffairsType>
    removeBusiness: (id: number) => void
    filterAffairs: (value: string) => void
}

export const Affairs: React.FC<AffairsPropsType> = (props) => {

    return (
        <div className={s.list}>
            <h3>Affairs</h3>
            {
                props.affairs.map(a => {
                        const deleteItem = () => {
                            props.removeBusiness(a.id)
                        };
                        return (
                            <div key={a.id} className={s.item}>
                                <div className={s.name}>{a.name}</div>
                                <div className={s.mean}>{a.priority}</div>
                                <Button click={deleteItem} value={'Delete'} filter={'delete'}/>
                            </div>
                        )
                    }
                )
            }
            <div className={s.buttonsBox}>
                <Button click={() => props.filterAffairs('all')} value={'All'}/>
                <Button click={() => props.filterAffairs('high')} value={'High'}/>
                <Button click={() => props.filterAffairs('middle')} value={'Middle'}/>
                <Button click={() => props.filterAffairs('low')} value={'Low'}/>
            </div>
        </div>
    )
};
