import React from 'react';
import Home from 'jung-portfolio/src/components/Profile';

const Home = ({children}) => {
    return (
        <div className={style.big_text}>
            {children}
        </div>
    )
}