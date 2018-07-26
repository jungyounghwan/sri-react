import React from 'react';
import style from '../App.css';
import { Link } from 'react-router-dom';

const MenuItem = ({active, children, to}) => (
    <li role="presentation">{children}</li>
)

class Header extends React.Component {
    render(){
        return (
            <div className="row">
                <h1 className={style.blind}>Navi</h1>
                <ul className="nav nav-pills">
                    <MenuItem><Link to={"/"}>Home</Link></MenuItem>
                    <MenuItem><Link to={"profile"}>Profile</Link></MenuItem>
                    <MenuItem><Link to={"posts"}>Post</Link></MenuItem>
                </ul>
            </div>
        );
    }
}

export default Header;