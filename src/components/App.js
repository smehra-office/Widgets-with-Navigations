import React, { useState } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';

const items = [
    {
        title: 'What is React?',
        content: 'React is a frontend JS framework'
    },
    {
        title: 'Why use react?',
        content: 'React is a favourite among engineers'
    },
    {
        title: ' How to use react?',
        content: 'We use react by creating components'
    }
];

const options = [
    {
        label: 'Favourite Red',
        value: 'red'
    },
    {
        label: 'Vibrant Green',
        value: 'green'
    },
    {
        label: 'Sky blue',
        value: 'blue'
    }
];

function showAccordion() {
    if (window.location.pathname == '/')
        return <Accordion items={items} />
}

function showTranslate() {
    if (window.location.pathname == '/translate')
        return <Translate />
}

export default () => {
    return (
        <div className="ui container" style={{ 'marginTop': '2%' }}>
            {showAccordion()}
            {showTranslate()}
        </div>
    );
};