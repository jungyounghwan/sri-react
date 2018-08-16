import React from 'react';
import style from '../App.css';
import { Link, NavLink } from 'react-router-dom';

/*const MenuItem = ({active, children, to}) => (
    <li role="presentation">{children}</li>
)*/

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
                <div className="col-md-4 text-right">
                    <button type="button" className="btn btn-link">Login</button>
                    <NavLink to={"/mypage"}>Mypage</NavLink>
                    {/*<button type="button" className="btn btn-link" to={"/mypage"}>Mypage</button>*/}
                </div>
            </div>
        );
    }
}

export default Header;