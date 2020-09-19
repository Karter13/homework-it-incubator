import React from 'react';
import JuniorPlus from './JuniorPlus';
import {ReduxStoreProviderDecorator} from '../../stories/ReduxStoreProviderDecorator';

export default {
    title: 'JuniorPlus component',
    component: JuniorPlus,
    decorators: [ReduxStoreProviderDecorator]
}

export const JuniorPlusBaseExamples = () => {
    return <JuniorPlus/>
};
