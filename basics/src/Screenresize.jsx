import React, { useState, useEffect } from 'react';

const Screenresize = () => {
    let [screensize, setScreensize] = useState({ width: window.innerWidth, height: window.innerHeight });

    let UpdateScreenSize = () => {
        setScreensize({ width: window.innerWidth, height: window.innerHeight });
    }

    useEffect(() => {``
        window.addEventListener('resize', UpdateScreenSize);
        return () => {
            window.removeEventListener('resize', UpdateScreenSize);
        };
    }, []);

    return (   
        <div>
            <p>Width: {screensize.width}px</p>
            <p>Height: {screensize.height}px</p>
        </div>
    );
}

export default Screenresize;
