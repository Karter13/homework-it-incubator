import React from "react";
import s from './Message.module.css'

type MessagePropsType = {
    myName: string;
    myText: string;
    realTime: string;
}

export const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.block}>
            <MessageName name={props.myName} />
            <div className={s.content}>
                <MessageText text={props.myText} />
                <MessageTime time={props.realTime} />
            </div>
        </div>
    )
};

type MessageNamePropsType = {
    name: string
}
const MessageName: React.FC<MessageNamePropsType> = (props) => {
    return (
        <div className={s.name}>
            {props.name}
        </div>
    )
};

type MessageTextPropsType = {
    text: string
}
const MessageText: React.FC<MessageTextPropsType> = (props) => {
    return (
        <div className={s.text}>
            {props.text}
        </div>
    )
};

type MessageTimePropsType = {
    time: string
}
const MessageTime: React.FC<MessageTimePropsType> = (props) => {
    return (
        <div className={s.time}>
            {props.time}
        </div>
    )
};
