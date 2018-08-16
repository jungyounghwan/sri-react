import React from 'react';
import style from './App.css';
import { Link, NavLink } from 'react-router-dom';

class Header extends React.Component {
    render(){
        return (
            <div className="row">
                <div className="col-md-8">
                    <h1 className={style.blind}>Navi</h1>
                    <div className="nav nav-pills">
                        <li role="presentation"><NavLink activeClassName="active" exact to={"/"}>Home</NavLink></li>
                        <li role="presentation"><NavLink activeClassName="active" to={"/profile"}>Profile</NavLink></li>
                        <li role="presentation"><NavLink activeClassName="active" to={"/posts"}>Post</NavLink></li>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;