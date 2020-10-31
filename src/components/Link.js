import React from 'react';

const Link = ({ className, href, children }) => {

    function handleClick(event) {
        event.preventDefault();  //prevent reload
        window.history.pushState({}, '', href);  //change URL without navigating 

        let navigationEvent = new PopStateEvent('popstate');  // emit event which can help detect navigations by router components
        window.dispatchEvent(navigationEvent);
    }

    return <a onClick={(e) => handleClick(e)} className={className} href={href}>{children}</a>
};

export default Link;