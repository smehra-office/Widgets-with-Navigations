import React from 'react';
import { useState } from 'react';

const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const renderedList = items.map((item, index) => (
        <React.Fragment key={item.title}>
            <div className={`title ${index === activeIndex ? 'active' : ''}`} onClick={() => setActiveIndex(index)}>
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${index === activeIndex ? 'active' : ''}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
    ));

    return <div className='ui styled accordion'>{renderedList}</div>
};

export default Accordion;