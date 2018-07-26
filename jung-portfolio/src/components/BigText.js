import React from 'react';
import style from './App.css';

const BigText = ({children}) => {
    return (
        <div className={style.big_text}>
            {children}
        </div>
    );
};

export default BigText;