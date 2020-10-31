import { useState, useEffect } from "react";

const Router = ({ path, children }) => {

    let [currentPath, setCurrentPath] = useState(window.location.pathname);  //keep track of path 

    useEffect(() => {
        function onLocationChange() {
            setCurrentPath(window.location.pathname)   //update state to refresh router component
        }

        window.addEventListener('popstate', onLocationChange);  //listen to event emitted by Link component onClick()

        return () => window.removeEventListener('popstate', onLocationChange);  //unsubscribe when component unmounts --Cleanup fn()
    }, []);

    return currentPath === path ? children : null;
}

export default Router;