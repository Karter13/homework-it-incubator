import s from './Affairs.module.css'
import React from 'react';


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
                props.affairs.map(a => <div key={a.id} className={s.item}>
                    <div className={s.name}>{a.name}</div>
                    <div className={s.mean}>{a.priority}</div>
                    <button onClick={() => {
                        props.removeBusiness(a.id)}}>Delete</button>
                </div>)
            }

            <button onClick={() => {props.filterAffairs('all')}}>All</button>
            <button onClick={() => {props.filterAffairs('high')}}>High</button>
            <button onClick={() => {props.filterAffairs('middle')}}>Middle</button>
            <button onClick={() => {props.filterAffairs('low')}}>Low</button>
        </div>
    )
}
