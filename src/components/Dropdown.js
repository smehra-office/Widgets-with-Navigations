import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ text, options, selected, onChangeSelected }) => {
    const [clicked, setClicked] = useState(false);
    const Ref = useRef();

    useEffect(() => {
        window.document.addEventListener('click', () => {
            setClicked(false);
        }
        );
    }, []);

    const renderedList = options.map((option) => {
        if (option === selected)
            return null;

        return (
            <div key={option.value} className='item' onClick={() => onChangeSelected(option)}>
                {option.label}
            </div>
        );
    });

    return (
        <div className='ui form' ref={Ref}>
            <div className='field'>
                <label className='label'>{text}</label>
                <div className={`ui selection dropdown ${clicked ? 'visible active' : ''}`} onClick={() => setClicked(!clicked)}>
                    <i className='dropdown icon'></i>
                    <div className='text'>
                        {selected.label}
                    </div>
                    <div className={`menu ${clicked ? 'visible transition' : ''}`}>
                        {renderedList}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;