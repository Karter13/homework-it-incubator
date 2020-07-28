import React from 'react';
import {Image} from './Image/Image';
import {Message} from './Message/Message';
import {Affairs, AffairsType} from './Affairs/Affairs';
import {Greeting, NameType} from './Greeting/Greeting';
import {UniversalComponents} from './UniversalComponents/UniversalComponents';

export type PreJuniorPropsType = {
    affairs: Array<AffairsType>
    removeBusiness: (id: number) => void
    filterAffairs: (value: string) => void
    addName: (name: string) => void
    names: Array<NameType>
    error: string | null
    setError: (value: string | null) => void
}
export const PreJunior: React.FC<PreJuniorPropsType> = (props) => {
    return (
        <div>
            <h3>PreJunior</h3>
            <div className="message">
                <Image url='https://live.staticflickr.com/1170/5152497387_939ee3015a_b.jpg'/>
                <Message myName='Michael' myText='I love React!!!' realTime='19.40'/>
            </div>
            <Affairs affairs={props.affairs}
                     removeBusiness={props.removeBusiness}
                     filterAffairs={props.filterAffairs}
            />
            <Greeting addName={props.addName}
                      names={props.names}
                      error={props.error}
                      setError={props.setError}
            />
            <UniversalComponents/>
        </div>
    )
};
