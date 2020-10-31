import React, { useState } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Router from './Router';
import Header from './Header';

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

export default () => {
    const [selected, SelectedChange] = useState(options[0]);

    //Here we pass the component JSX in between the Router tags so that it can directly render 
    //the mentioned components via props.children

    return (
        <div className="ui container" style={{ 'marginTop': '2%' }}>
            <Header />
            <Router path='/'>
                <Accordion items={items} />
            </Router>
            <Router path='/translate'>
                <Translate />
            </Router>
            <Router path='/search'>
                <Search />
            </Router>
            <Router path='/dropdown'>
                <Dropdown label="select a color" options={options} selected={selected} onSelectedChange={SelectedChange} />
            </Router>
        </div>
    );
};