import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const Translate = () => {

    const options = [
        {
            label: 'Afrikaans',
            value: 'af'
        },
        {
            label: 'Arabic',
            value: 'ar'
        },
        {
            label: 'Hindi',
            value: 'hi'
        }
    ];
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div className='ui form '>
            <div className='field'>
                <label>Enter some text below</label>
                <input type='text' onChange={(e) => setText(e.target.value)} value={text} />
            </div>
            <Dropdown text="Select a language" options={options} selected={language} onSelectedChange={setLanguage} />
            <div style={{ 'paddingTop': '5%' }}>
                <Convert language={language} text={text} />
            </div>
        </div>
    )
};

export default Translate;
